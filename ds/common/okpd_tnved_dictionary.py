from typing import Optional, Dict

import pandas as pd


class OkpdTnvedDictionary:
    __dict_xls_path: str
    __dict_xls_sheet_name: str

    def __init__(self, config: Dict[str, Optional[str]]):
        self.__dict_xls_path = config["OKVED_OKPD_DICTIONARY_XLS_PATH"]
        self.__dict_xls_sheet_name = config["OKVED_OKPD_DICTIONARY_XLS_SHEET_NAME"]

    def get_df(self) -> pd.DataFrame:
        f = open(self.__dict_xls_path, "rb")
        df = pd.read_excel(
            io=f,
            sheet_name=self.__dict_xls_sheet_name,
            skiprows=4,
            header=None,
            names=["okpd", "tnved"],
            engine="openpyxl",
            usecols=[0, 2],
        )

        df["okpd"] = df["okpd"].fillna(method='ffill')
        df["tnved"] = df["tnved"].str.replace(" ", "")

        return df

