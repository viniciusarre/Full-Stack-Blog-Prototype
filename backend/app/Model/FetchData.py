from app.Model.DAO import DAO
class FetchData:
    def get(self):
        dao = DAO()
        dao.connect()
        string = "SELECT * FROM post ORDER BY idpost"
        try:
            dao.connection.execute(string)
            result = dao.connection.fetchall()
        except Exception as error:
            print("Error... " + str(error))
        finally:
            dao.connection.close()
            dao.c.close()
        return result