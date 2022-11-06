import logging
import logging.handlers
from typing import Dict, Optional, Iterable

from common.okpd_tnved_dictionary import OkpdTnvedDictionary
from csv_scrapping.customs_data_fetcher_csv import CustomsDataFetcher


class Worker:
    __config: Dict[str, Optional[str]]
    __customs_data_fetcher: CustomsDataFetcher
    __okpd_tnved_dictionary: OkpdTnvedDictionary

    def __init__(
            self,
            config: Dict[str, Optional[str]],
            customs_data_fetcher: CustomsDataFetcher,
            okpd_tnved_dictionary: OkpdTnvedDictionary,
    ):
        self.__config = config
        self.__customs_data_fetcher = customs_data_fetcher
        self.__okpd_tnved_dictionary = okpd_tnved_dictionary

    def get_df(self, periods: Iterable[Iterable]):
        df = self.__customs_data_fetcher.get_df(periods)
        import_df = df[df["napr"] == "ИМ"]
        export_df = df[df["napr"] == "ЭК"]
        tnved_okpd_dict = self.__okpd_tnved_dictionary.get_df()

        import_export_df = import_df.set_index(
            ["tnved", "edizm", "period", "Region"]
        ).join(
            other=export_df.set_index(["tnved", "edizm", "period", "Region"]),
            how="left",
            lsuffix="_import",
            rsuffix="_export"
        ).reset_index()

        logging.debug("[Worker import_export_df] %s", import_export_df.to_dict("records"))

        with_okpd = import_export_df.set_index(["tnved"]) \
            .join(other=tnved_okpd_dict.set_index(["tnved"]), how="left")

        logging.debug("[Worker with_okpd] %s", with_okpd.to_dict("records"))

        return with_okpd
