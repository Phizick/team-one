from flask_api import status

from repository.project_repository import ProjectRepository
from flask import jsonify, request
from flask_restful import Resource, reqparse, abort

parser = reqparse.RequestParser()
parser.add_argument("user_id")
parser.add_argument("name")
parser.add_argument("dateOn")
parser.add_argument("dateFrom")
parser.add_argument("about")
parser.add_argument("subject")

del_parser = reqparse.RequestParser()
del_parser.add_argument("project_id")


class ProjectApi(Resource):
    __repository = ProjectRepository()

    def get(self, user_id: str):
        projects = self.__repository.find_by_user_id(user_id)
        return jsonify(list(projects))

    def post(self):
        args = parser.parse_args()
        if args["user_id"] is None:
            abort(http_status_code=status.HTTP_400_BAD_REQUEST, message="user_id have to be specified")

        inserted_project = self.__repository.insert(args)
        return jsonify(inserted_project.inserted_id)

    def delete(self):
        args = del_parser.parse_args()
        if args["project_id"] is None:
            abort(http_status_code=status.HTTP_400_BAD_REQUEST, message="project_id have to be specified")

        removed_project = self.__repository.delete_by_id(args["project_id"])
        return jsonify({"ack": removed_project.acknowledged, "count": removed_project.deleted_count})
