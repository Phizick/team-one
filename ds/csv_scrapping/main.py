import logging
from concurrent.futures import ThreadPoolExecutor

from dotenv import dotenv_values

from common.logging_config import LoggingConfig
from common.okpd_tnved_dictionary import OkpdTnvedDictionary
from csv_scrapping.customs_data_fetcher_csv import CustomsDataFetcher
from csv_scrapping.worker import Worker
from db.mongo_cient import TeamOneMongoClient

if __name__ == '__main__':
    config = dotenv_values("../.env")
    LoggingConfig.init(logging.DEBUG)
    executor = ThreadPoolExecutor(6)

    worker = Worker(
        config=config,
        customs_data_fetcher=CustomsDataFetcher(config=config, thread_pool_executor=executor),
        okpd_tnved_dictionary=OkpdTnvedDictionary(config=config),
    )
    df = worker.get_df(
        periods=[
            ("2021-12-01", "2021-12-31"),
            ("2021-11-01", "2021-11-30"),
            ("2021-10-01", "2021-10-31"),
            ("2021-09-01", "2021-09-30"),
            ("2021-08-01", "2021-08-31"),
            ("2021-07-01", "2021-07-31"),
            ("2021-06-01", "2021-06-30"),
            ("2021-05-01", "2021-05-31"),
            ("2021-04-01", "2021-04-30"),
            ("2021-03-01", "2021-03-31"),
            ("2021-02-01", "2021-02-28"),
            ("2021-01-01", "2021-01-31"),
        ]
    )

    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(df)
    mongo.destroy()
