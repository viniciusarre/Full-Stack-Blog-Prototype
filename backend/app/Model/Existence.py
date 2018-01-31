from app.Model.DAO import DAO

class Existence:
    def isPost(self, id):
        dao = DAO()
        dao.connect()

        string = "SELECT * FROM post WHERE idpost = {0}".format(id)

        try:
            dao.connection.execute(string)
            r = dao.connection.fetchall()
            if len(r) > 0:
                return True
            else:
                return False
        except Exception as error:
            print("ERROR: " + error)
