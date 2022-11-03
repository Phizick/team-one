import logging
from concurrent.futures import ThreadPoolExecutor

from dotenv import dotenv_values

from customs_data_fetcher import CustomsDataFetcher
from mongo_cient import TeamOneMongoClient
from okpd_tnved_dictionary import OkpdTnvedDictionary
from worker import Worker

if __name__ == '__main__':
    config = dotenv_values(".env")
    executor = ThreadPoolExecutor(6)

    worker = Worker(
        config=config,
        import_data_fetcher=CustomsDataFetcher(config=config, thread_pool_executor=executor),
        export_data_fetcher=CustomsDataFetcher(config=config, thread_pool_executor=executor),
        okpd_tnved_dictionary=OkpdTnvedDictionary(config=config),
        log_level=logging.INFO
    )
    dataframe = worker.get_df(period_start="2021-01-01", period_end="2021-06-30")

    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(dataframe)
    mongo.destroy()
