import psycopg2
class DAO:
    def __init__(self):
        self.c = None
        self.connection = None
    def connect(self):
        try:
            self.c = psycopg2.connect\
                ("dbname='simple_blog' user='postgres' host='localhost' password='123456' port='5433'")
            self.connection = self.c.cursor()
        except Exception as error:
            print("Error connecting to the Database", error)

