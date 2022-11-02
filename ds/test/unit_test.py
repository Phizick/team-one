import unittest

from dotenv import dotenv_values


class MyTestCase(unittest.TestCase):
    def test_init(self):
        config = dotenv_values(".env")
        expected = ["Паспорт"]
        values = config["ROSSTAT_MANUFACTURE_STATS_XLS_EXCLUDE_SHEETS"].split(",")
        actual = list(map(lambda x: x.strip(), values))
        self.assertEqual(actual, expected)  # add assertion here


if __name__ == '__main__':
    unittest.main()
