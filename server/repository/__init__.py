from pymongo import MongoClient
from pymongo.database import Database

from config import config

mongo_connection_string = config["ATLAS_URI"]
mongo_db_name = config["DB_NAME"]

mongodb_client = MongoClient(mongo_connection_string)
database: Database = mongodb_client[mongo_db_name]