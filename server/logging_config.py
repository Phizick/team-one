import logging
import logging.handlers
import os
import sys


class LoggingConfig:
    @staticmethod
    def init(log_level: int):
        root = logging.getLogger()
        root.setLevel(log_level)

        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(log_level)
        console_handler.setFormatter(
            logging.Formatter('[%(threadName)s] %(asctime)s - %(name)s - %(levelname)s - %(message)s')
        )
        root.addHandler(console_handler)

        if not os.path.exists("logs"):
            os.makedirs("logs")

        file_handler = logging.handlers.RotatingFileHandler(filename="logs/worker.log", maxBytes=1024, encoding="utf-8")
        file_handler.setLevel(log_level)
        file_handler.setFormatter(
            logging.Formatter('[%(threadName)s] %(asctime)s - %(name)s - %(levelname)s - %(message)s')
        )
        root.addHandler(file_handler)
