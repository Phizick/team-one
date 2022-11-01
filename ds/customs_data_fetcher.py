import concurrent
import json
import threading
from concurrent.futures import ThreadPoolExecutor
from typing import Optional, Dict

import numpy as np
import pandas as pd
import requests


class CustomsDataFetcher:
    __config: Dict[str, Optional[str]]
    __df_customs: pd.DataFrame

    def __init__(self, config: Dict[str, Optional[str]]):
        self.__config = config
        self.load_customs_data()

    def load_customs_data(self):
        url = f'{self.__config["CUSTOMS_STATS_URL"]}?page=1&pageSize=100'
        init_response = requests.post(url=url, data=self.__payload, headers=self.__headers)
        if init_response.status_code != 200:
            raise RuntimeError(f'Error fetching 1st page {init_response.json()}')

        init_json = init_response.json()
        df = pd.DataFrame(
            data=init_json["data"],
            columns=["tnved", "period", "direction", "subject", "dei"]
        )
        executor = ThreadPoolExecutor(4)
        futures = {
            executor.submit(self.__load_page, page): page for page in list(range(2, init_json["pageCount"] + 1))
        }
        dataframes = [df]
        for future in concurrent.futures.as_completed(futures):
            page = futures[future]
            try:
                data = future.result()
            except Exception as exc:
                print('%r generated an exception: %s' % (page, exc))
            else:
                dataframes.append(data)

        self.__df_customs = pd.concat(dataframes).groupby(["tnved", "period"])[["dei"]].aggregate(np.sum).reset_index()
        print(self.__df_customs)

    def __load_page(self, page: int) -> pd.DataFrame:
        url = f'{self.__config["CUSTOMS_STATS_URL"]}?page={page}&pageSize=100'
        print(f"[Thread - {threading.current_thread().ident}] Loading {url}")
        response = requests.post(url=url, data=self.__payload, headers=self.__headers)
        if response.status_code != 200:
            raise RuntimeError(f'Error fetching 1st page {response.json()}')

        print(f"[Thread - {threading.current_thread().ident}] Response {response}")
        response_json = response.json()
        print(f"[Thread - {threading.current_thread().ident}] Response json {response_json}")
        df_response = pd.DataFrame(
            data=response_json["data"],
            columns=["tnved", "period", "direction", "subject", "dei"]
        )
        aggregated = df_response.groupby(["tnved", "period", "subject", "direction"])[["dei"]].aggregate(np.sum).reset_index()
        aggregated.loc[aggregated["direction"] == "Экспорт", "dei"] *= -1
        difference = aggregated.groupby(["tnved", "period", "subject"])[["dei"]].aggregate(np.sum).reset_index()
        return difference

    def get_df(self) -> pd.DataFrame:
        return self.__df_customs

    __headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
    }

    __payload = json.dumps({
        "periodTab": "YY",
        "period": [
            {
                "start": "2021-12-31",
                "end": "2022-12-31"
            }
        ],
        "countries": [],
        "tnved": [],
        "tnvedLevel": 6,
        "federalDistricts": [],
        "subjects": [],
        "costForm": 1,
        "weightForm": 1
    })
