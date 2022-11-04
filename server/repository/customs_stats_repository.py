from . import config, database


class CustomsStatsRepository:
    __collection = config["CUSTOMS_STATS_COLLECTION"]

    def find_all(self):
        return database[self.__collection].find({})
