from dotenv import dotenv_values
from flask import Flask, jsonify
from flask_restful import Resource, Api

from json_encoder import JSONEncoder
from mongo_cient import TeamOneMongoClient

app = Flask(__name__)
api = Api(app)
config = dotenv_values(".env")
mongo = TeamOneMongoClient(config)
app.json_encoder = JSONEncoder
app.config['JSON_AS_ASCII'] = False


class TeamOneApi(Resource):
    def get(self):
        stats = mongo.get_customs_stats()
        return jsonify(list(stats))


api.add_resource(TeamOneApi, f'{config["API_BASE"]}/customs_stats')

if __name__ == '__main__':
    app.run(debug=True)
