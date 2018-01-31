import tornado.web
from tornado.options import define, options
from app.Operations.Fetch import Fetch
from app.Operations.Insert import Insert
from app.Operations.Delete import Delete
from app.Operations.Update import Update
from app.Util.Configure import Configure

define("port", default=8000, help="run on the given port", type=int)




if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers=[
    (r"/fetch/", Fetch), (r"/insert/",Insert), (r"/delete/",Delete), (r"/update/",Update)])
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
