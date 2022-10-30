from dotenv import dotenv_values

from OkpdTnvedDictionary import OkpdTnvedDictionary

if __name__ == '__main__':
    config = dotenv_values(".env")
    okpd_tnved_dictionary = OkpdTnvedDictionary(config)
    print(okpd_tnved_dictionary.get_tnveds("01.11.12"))
