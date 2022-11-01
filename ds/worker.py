from typing import Dict, Optional

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
    ):
        self.__config = config
        self.__import_data_fetcher = import_data_fetcher
        self.__export_data_fetcher = export_data_fetcher
        self.__okpd_tnved_dictionary = okpd_tnved_dictionary

    def get_df(self, fetch_pages_count=None):
        import_df = self.__import_data_fetcher.get_df(fetch_pages_count)
        import_df = import_df.rename(columns={"dei": "import"})
        export_df = self.__export_data_fetcher.get_df(fetch_pages_count)
        export_df = export_df.rename(columns={"dei": "export"})
        return import_df.set_index(["tnved", "period", "subject"]) \
            .join(export_df.set_index(["tnved", "period", "subject"])) \
            .reset_index()
