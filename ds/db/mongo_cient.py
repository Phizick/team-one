from typing import Optional, Dict

import pandas
from pymongo import MongoClient
from pymongo.database import Database


class TeamOneMongoClient:
    __mongodb_client: MongoClient
    __database: Database
    __customs_stats_collection: str

    def __init__(self, config: Dict[str, Optional[str]]):
        self.__mongodb_client = MongoClient(config["ATLAS_URI"])
        self.__database = self.__mongodb_client[config["DB_NAME"]]
        self.__customs_stats_collection = config["CUSTOMS_STATS_COLLECTION"]
        print("Connected to the MongoDB database!")

    def destroy(self):
        self.__mongodb_client.close()

    def save_customs_stats(self, df: pandas.DataFrame):
        print("inserting df...")
        self.__database[self.__customs_stats_collection].insert_many(df.to_dict("records"))
        print("inserted df")
