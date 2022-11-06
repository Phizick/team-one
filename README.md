# Проект: Рекомендательный сервис по выявлению перспективных производственных ниш на основе таможенной статистики

## Функциональность
- Авторизация пользователя
- Инструменты анализа таможенных данных для сотрудника, с интерактивными
дашбордами по разным периодам, категориям (например, продукции), нишам,
регионам РФ
- Экспорт результатов анализа и подобранных ниш в Excel, PDF
- Возможность сохранить проведенный анализ в своем профиле для возвращения к нему


## Технологии проекта
### ФРОНТЕНД:
- React,
- React Router,
- Redux,
- Axios,
- ChartJs,
- React-to-PDF,
- React-CSV,
- uuid
### 

### DS
* Стек
    * Python 3.7
    * Pandas
* Запуск
    * cd ds/rest_scrapping
    * pip install -r /path/to/requirements.txt
    * > python main.py
* .env:
    * ATLAS_URI
    * DB_NAME
    * CUSTOMS_STATS_COLLECTION
    * OKVED_OKPD_DICTIONARY_XLS_PATH
    * OKVED_OKPD_DICTIONARY_XLS_SHEET_NAME
    * CUSTOMS_STATS_URL
    * PERIOD_START
    * PERIOD_END
###

### Backend
* Стек
    * Python 3.7
    * Flask
* Запуск
    * cd ds/server
    * pip install -r /path/to/requirements.txt
    * > python main.py
* .env:
    * ATLAS_URI
    * DB_NAME
    * CUSTOMS_STATS_COLLECTION
    * PROJECT_COLLECTION
    * API_BASE
###

### DB
    * Mongo


## Планы по доработке:
- Разбить БД на более мелкие и сформировать общую схему для ускорения работы
- Сделать возможной гибкую настройку статистики по заданным параметрам
- Добавить критерии для анализа рекомендаций в соответсвии с документацией к проекту

## Ссылка на GitHubPages: 
[Деплой](http://37.230.196.81/)
