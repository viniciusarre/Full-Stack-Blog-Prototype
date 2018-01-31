import tornado.web
from app.Model.InsertData import InsertData
from app.Util.Configure import Configure

class Insert(tornado.web.RequestHandler):
    def get(self):
        title = self.get_argument('title')
        body = self.get_argument('body')
        i = InsertData()
        if i.insertToDB(title, body):
            self.write({"success":True})
        else:
            self.write({"success":False})

    def set_default_headers(self):
        print("setting headers!!!")
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

