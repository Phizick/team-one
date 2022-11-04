import logging

from dotenv import dotenv_values

from customs_data_fetcher import CustomsDataFetcher
from mongo_cient import TeamOneMongoClient
from okpd_tnved_dictionary import OkpdTnvedDictionary
from worker import Worker

if __name__ == '__main__':
    config = dotenv_values(".env")
    worker = Worker(
        config=config,
        import_data_fetcher=CustomsDataFetcher(config=config),
        export_data_fetcher=CustomsDataFetcher(config=config),
        okpd_tnved_dictionary=OkpdTnvedDictionary(config=config),
        log_level=logging.INFO
    )
    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(worker.get_df(year=2022))
    mongo.save_customs_stats(worker.get_df(year=2021))
    mongo.save_customs_stats(worker.get_df(year=2020))
    mongo.destroy()
