from app.Model.DAO import DAO

class InsertData:
    def insertToDB(self, t, b):
        dao = DAO()
        dao.connect()
        string = "INSERT INTO post (idpost, title, body) VALUES(DEFAULT, %s, %s)"
        data = (t,b)
        try:
            dao.connection.execute(string, data)
            dao.c.commit()
            return True
        except Exception as error:
            print("error... "+error)
            return False
        finally:
            dao.connection.close()
            dao.c.close()
