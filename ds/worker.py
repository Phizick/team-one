import logging
import sys
from typing import Dict, Optional

import pandas as pd

from customs_data_fetcher import CustomsDataFetcher
from okpd_tnved_dictionary import OkpdTnvedDictionary


class Worker:
    __config: Dict[str, Optional[str]]
    __import_data_fetcher: CustomsDataFetcher
    __export_data_fetcher: CustomsDataFetcher
    __okpd_tnved_dictionary: OkpdTnvedDictionary

    def __init__(
            self,
            config: Dict[str, Optional[str]],
            import_data_fetcher: CustomsDataFetcher,
            export_data_fetcher: CustomsDataFetcher,
            okpd_tnved_dictionary: OkpdTnvedDictionary,
            log_level: int
    ):
        self.__config = config
        self.__import_data_fetcher = import_data_fetcher
        self.__export_data_fetcher = export_data_fetcher
        self.__okpd_tnved_dictionary = okpd_tnved_dictionary

        root = logging.getLogger()
        root.setLevel(log_level)
        handler = logging.StreamHandler(sys.stdout)
        handler.setLevel(log_level)
        formatter = logging.Formatter('[%(threadName)s] %(asctime)s - %(name)s - %(levelname)s - %(message)s')
        handler.setFormatter(formatter)
        root.addHandler(handler)

    def get_df(self, year: int, fetch_pages_count=None):
        import_df = self.__df_postprocess(
            df=self.__import_data_fetcher.get_df(
                period_start=f"{year - 1}-12-31",
                period_end=f"{year}-12-31",
                direction="ИМ",
                fetch_pages_count=fetch_pages_count
            )
        )
        export_df = self.__df_postprocess(
            df=self.__export_data_fetcher.get_df(
                period_start=f"{year - 1}-12-31",
                period_end=f"{year}-12-31",
                direction="ЭК",
                fetch_pages_count=fetch_pages_count
            )
        )
        tnved_okpd_dict = self.__okpd_tnved_dictionary.get_df()

        import_export_df = import_df.set_index(
            ["tnved_no", "tnved_measure_unit", "tnved_name", "period", "subject"]
        ).join(
            other=export_df.set_index(["tnved_no", "tnved_measure_unit", "tnved_name", "period", "subject"]),
            how="left",
            lsuffix="_import",
            rsuffix="_export"
        ).reset_index()

        logging.debug("[Worker import_export_df] %s", import_export_df.to_dict("records"))

        with_okpd = import_export_df.set_index(["tnved_no"]) \
            .join(other=tnved_okpd_dict.set_index(["tnved"]), how="left")
        with_okpd.reset_index(names=["tnved"], inplace=True)

        logging.debug("[Worker with_okpd] %s", with_okpd.to_dict("records"))

        return with_okpd

    @staticmethod
    def __df_postprocess(df: pd.DataFrame):
        df[["tnved_no", "tnved_str"]] = df["tnved"].str.split(pat=" - ", n=1, expand=True)
        df[["tnved_measure_unit", "tnved_name"]] = df["tnved_str"].str.split(pat="-", n=1, expand=True)
        df.drop(columns=["tnved", "tnved_str"], inplace=True)
        return df
