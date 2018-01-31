import tornado.web
from app.Model.FetchData import FetchData
from app.Util.Configure import Configure

class Fetch(tornado.web.RequestHandler):
    def get(self):
        result = {"data": []}
        fetch = FetchData()
        r = fetch.get()
        for data in r:
            result["data"].append({"id":data[0], "title": data[1], "body": data[2]})
        self.write(result)

    def set_default_headers(self):
        print("setting headers!!!")
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

