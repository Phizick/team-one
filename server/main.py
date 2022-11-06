import logging
import os

from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api

from api.customs_stats_api import CustomsStatsApi
from api.project_api import ProjectApi
from config import config
from json_encoder import JSONEncoder
from logging_config import LoggingConfig

app = Flask(__name__, static_folder="react_app")
CORS(app)
app.json_encoder = JSONEncoder
app.config['JSON_AS_ASCII'] = False

api = Api(app)
api_base = config["API_BASE"]
api.add_resource(CustomsStatsApi, f'{api_base}/customs_stats')
api.add_resource(ProjectApi, f'{api_base}/projects', f'{api_base}/projects/<user_id>')


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    LoggingConfig.init(logging.DEBUG)
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
