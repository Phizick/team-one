import logging
from concurrent.futures import ThreadPoolExecutor

from dotenv import dotenv_values

from common.logging_config import LoggingConfig
from common.okpd_tnved_dictionary import OkpdTnvedDictionary
from db.mongo_cient import TeamOneMongoClient
from rest_scrapping.customs_data_fetcher import CustomsDataFetcher
from rest_scrapping.worker import Worker

if __name__ == '__main__':
    config = dotenv_values("../.env")
    LoggingConfig.init(logging.DEBUG)
    executor = ThreadPoolExecutor(6)

    worker = Worker(
        config=config,
        import_data_fetcher=CustomsDataFetcher(config=config, thread_pool_executor=executor),
        export_data_fetcher=CustomsDataFetcher(config=config, thread_pool_executor=executor),
        okpd_tnved_dictionary=OkpdTnvedDictionary(config=config),
    )
    dataframe = worker.get_df(period_start=config["PERIOD_START"], period_end=config["PERIOD_END"])

    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(dataframe)
    mongo.destroy()
