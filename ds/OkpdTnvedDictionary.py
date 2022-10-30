from typing import Optional, Dict

import pandas as pd
from pandas import DataFrame


class OkpdTnvedDictionary:
    config: Dict[str, Optional[str]]
    df: DataFrame

    def __init__(self, config: Dict[str, Optional[str]]):
        self.config = config

        f = open(config["OKVED_OKPD_DICTIONARY_XLS_PATH"], "rb")
        self.df = pd.read_excel(
            io=f,
            sheet_name=config["OKVED_OKPD_DICTIONARY_XLS_SHEET_NAME"],
            skiprows=4,
            header=None,
            names=["okpd", "tnved"],
            engine="openpyxl",
            usecols=[0, 2],
        )

        self.df["okpd"] = self.df["okpd"].fillna(method='ffill')
        self.df["tnved"] = self.df["tnved"].str.replace(" ", "")

    def get_tnveds(self, okpd: str) -> DataFrame:
        return self.df.loc[self.df["okpd"] == okpd, "tnved"]
