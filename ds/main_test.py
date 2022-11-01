from dotenv import dotenv_values

from customs_data_fetcher import CustomsDataFetcher
from mongo_cient import TeamOneMongoClient
from okpd_tnved_dictionary import OkpdTnvedDictionary
from worker import Worker

if __name__ == '__main__':
    config = dotenv_values(".env")
    worker = Worker(
        config=config,
        import_data_fetcher=CustomsDataFetcher(
            config=config, period_start="2021-12-31", period_end="2022-12-31", direction="ИМ"
        ),
        export_data_fetcher=CustomsDataFetcher(
            config=config, period_start="2021-12-31", period_end="2022-12-31", direction="ЭК"
        ),
        okpd_tnved_dictionary=OkpdTnvedDictionary(config=config)
    )
    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(worker.get_df(fetch_pages_count=4))
    mongo.destroy()
