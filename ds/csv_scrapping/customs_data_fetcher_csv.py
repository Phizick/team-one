import concurrent
import io
import json
import logging
import zipfile
from concurrent.futures import ThreadPoolExecutor
from typing import Optional, Dict, Iterable

import numpy as np
import pandas as pd
import requests


class CustomsDataFetcher:
    __config: Dict[str, Optional[str]]
    __headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
    }

    __thread_pool_executor: ThreadPoolExecutor

    def __init__(
            self,
            config: Dict[str, Optional[str]],
            thread_pool_executor: ThreadPoolExecutor
    ):
        self.__config = config
        self.__thread_pool_executor = thread_pool_executor

    def get_df(
            self,
            periods: Iterable[Iterable],
    ) -> pd.DataFrame:
        futures = {
            self.__thread_pool_executor.submit(
                self.__load_page,
                period_start,
                period_end,
            ): [period_start, period_end] for [period_start, period_end] in periods
        }
        dataframes = []
        for future in concurrent.futures.as_completed(futures):
            period = futures[future]
            try:
                data = future.result()
            except Exception as exc:
                logging.error('%r generated an exception: %s' % (period, exc))
            else:
                dataframes.append(data)

        return self.__group_and_aggregate(pd.concat(dataframes))

    def __load_page(
            self,
            period_start: str,
            period_end: str,
    ) -> pd.DataFrame:
        url = 'http://stat.customs.gov.ru/api/DataAnalysis/UnloadData'
        logging.info(f"Loading {url}. Period: {period_start} - {period_end}")
        response = requests.post(
            url=url,
            data=self.__get_payload(period_start=period_start, period_end=period_end),
            headers=self.__headers,
            timeout=180
        )
        if response.status_code != 200:
            raise RuntimeError(f'Error fetching period {period_start} - {period_end}: {response.json()}')
        logging.info(f"Response {response}")

        z = zipfile.ZipFile(io.BytesIO(response.content))

        df = pd.read_csv(
            z.open(z.namelist()[0]),
            sep='\t',
            usecols=["napr", "tnved", "edizm", "period", "Region", "Kol"],
            converters={
                'Kol': lambda x: np.float32(x.replace(',', '.'))
            },
            dtype={
                'period': np.string_,
                'tnved': np.string_,
                'edizm': np.string_,
                'Region': np.string_
            },
        )

        return self.__group_and_aggregate(df)

    @staticmethod
    def __group_and_aggregate(df):
        grouped = df.groupby(["napr", "tnved", "edizm", "period", "Region"])
        return grouped[["Kol"]].aggregate(np.sum).reset_index()

    @staticmethod
    def __get_payload(period_start, period_end):
        return json.dumps({
            "exportType": "Csv",
            "tnved": [],
            "tnvedLevel": 6,
            "federalDistricts": [],
            "subjects": [],
            "direction": "",
            "period": [
                {
                    "start": period_start,
                    "end": period_end
                }
            ]
        })
