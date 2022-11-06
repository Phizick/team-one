from typing import Optional, Dict

import pandas as pd


# Dictionary:
# "Классификатор единиц измерения" -> "unit_measure_class"
# "Классификатор объектов административно-территориального деления (ОКАТО) -> "region"
# "Классификатор продукции по видам экономической деятельности (ОКПД2) -> "okpd2"
# "Единица измерения" -> "unit_measure"
# "Период" -> "period"
class RosstatManufactureParser:
    __xls_path: str
    __dict_xls_exclude_sheets: set

    def __init__(self, config: Dict[str, Optional[str]]):
        self.__xls_path = config["ROSSTAT_MANUFACTURE_STATS_XLS_PATH"]
        self.__dict_xls_exclude_sheets = set(map(
            lambda x: x.strip(),
            config["ROSSTAT_MANUFACTURE_STATS_XLS_EXCLUDE_SHEETS"].split(",")
        ))

    def get_df(self) -> pd.DataFrame:
        f = pd.ExcelFile(self.__xls_path)
        sheet_names = set(f.sheet_names).difference(self.__dict_xls_exclude_sheets)
        df = pd.read_excel(
            io=f,
            skiprows=3,
            sheet_name=list(sheet_names),
            header=None,
            names=["unit_measure_class", "region_okato", "product_okpd2", "period",
                   "2017", "2018", "2019", "2020", "2021", "2022"],
        )

        df = df[~df["period"].str.contains("январь-")]

        return df
