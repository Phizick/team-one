from typing import Optional, Dict

import pandas as pd
from pandas import DataFrame


class OkpdTnvedDictionary:
    __df: DataFrame

    def __init__(self, config: Dict[str, Optional[str]]):
        f = open(config["OKVED_OKPD_DICTIONARY_XLS_PATH"], "rb")
        self.__df = pd.read_excel(
            io=f,
            sheet_name=config["OKVED_OKPD_DICTIONARY_XLS_SHEET_NAME"],
            skiprows=4,
            header=None,
            names=["okpd", "tnved"],
            engine="openpyxl",
            usecols=[0, 2],
        )

        self.__df["okpd"] = self.__df["okpd"].fillna(method='ffill')
        self.__df["tnved"] = self.__df["tnved"].str.replace(" ", "")

    def get_tnveds(self, okpd: str) -> DataFrame:
        return self.__df.loc[self.__df["okpd"] == okpd, "tnved"]

    def get_okpd(self, tnved: str) -> DataFrame:
        return self.__df.loc[self.__df["tnved"] == tnved, "okpd"]
