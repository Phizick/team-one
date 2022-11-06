from bson import ObjectId

from . import config, database


class ProjectRepository:
    __collection = config["PROJECT_COLLECTION"]

    def find_all(self):
        return database[self.__collection].find({})

    def insert(self, project):
        return database[self.__collection].insert_one(project)

    def find_by_user_id(self, user_id: str):
        return database[self.__collection].find({"user_id": user_id})

    def delete_by_id(self, project_id: str):
        return database[self.__collection].delete_one( { "_id" : ObjectId(project_id) } )
