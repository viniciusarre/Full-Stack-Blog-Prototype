from app.Model.DAO import DAO
from app.Model.Existence import Existence

class UpdateData:
    def update(self, title, body, id):
        dao = DAO()
        dao.connect()
        # e = Existence()
        # r = e.isPost(id)
        string = "UPDATE post SET title = '{0}', body = '{1}' WHERE idpost = {2}".format(title, body, id)
        try:
            dao.connection.execute(string)
            dao.c.commit()
            return True
        except Exception as error:
            print("error... " + error)
            return False
        finally:
            dao.connection.close()
            dao.c.close()
