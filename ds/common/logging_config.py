import logging
import logging.handlers
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

        file_handler = logging.handlers.RotatingFileHandler(filename="logs/worker.log", maxBytes=1024, encoding="utf-8")
        file_handler.setLevel(log_level)
        file_handler.setFormatter(
            logging.Formatter('[%(threadName)s] %(asctime)s - %(name)s - %(levelname)s - %(message)s')
        )
        root.addHandler(file_handler)
