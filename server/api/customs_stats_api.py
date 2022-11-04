from flask import jsonify
from flask_restful import Resource

from repository.customs_stats_repository import CustomsStatsRepository


class CustomsStatsApi(Resource):
    __repository = CustomsStatsRepository()

    def get(self):
        stats = self.__repository.find_all()
        return jsonify(list(stats))
