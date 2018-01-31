import tornado.web
from app.Model.UpdateData import UpdateData
from app.Util.Configure import Configure


class Update(tornado.web.RequestHandler):
    def get(self):
        id = self.get_argument('id')
        title = self.get_argument('title')
        body = self.get_argument('body')
        print(id)
        print(title)
        print(body)
        u = UpdateData()
        r = u.update(title, body, id)
        self.write({"Success": r})
    def set_default_headers(self):
        print("setting headers!!!")
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

