import tornado.web
from app.Model.DeleteData import DeleteData
from app.Util.Configure import Configure

class Delete(tornado.web.RequestHandler):
    def get(self):
        id = self.get_argument('id')
        d = DeleteData()
        result = d.delete(id)
        self.write({"success": result or False})

    def set_default_headers(self):
        print("setting headers!!!")
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

