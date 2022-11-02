from typing import Optional, Dict

from flask import jsonify
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

    def get_customs_stats(self):
        return self.__database[self.__customs_stats_collection].find({})
