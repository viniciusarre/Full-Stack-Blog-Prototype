from app.Model.DAO import DAO
from app.Model.Existence import Existence

class DeleteData:
    def delete(self, id):
        dao = DAO()
        # ex = Existence()
        # exist = ex.isPost(id)
        dao.connect()
        string = "DELETE FROM post WHERE idpost = {0}".format(id)
        try:
            dao.connection.execute(string)
            dao.c.commit()
            return True
        except Exception as error:
            print("Error... " + str(error))
            return False
        finally:
            dao.connection.close()
            dao.c.close()