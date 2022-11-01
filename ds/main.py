from dotenv import dotenv_values

from customs_data_fetcher import CustomsDataFetcher
from mongo_cient import TeamOneMongoClient
from okpd_tnved_dictionary import OkpdTnvedDictionary

if __name__ == '__main__':
    config = dotenv_values(".env")
    okpd_tnved_dictionary = OkpdTnvedDictionary(config)
    print(okpd_tnved_dictionary.get_tnveds("01.11.12"))
    customs_data_fetcher = CustomsDataFetcher(config)
    mongo = TeamOneMongoClient(config)
    mongo.save_customs_stats(customs_data_fetcher.get_df())
    mongo.destroy()
