import http.server
import socketserver

PORT = 8000

DIRECTORY = 'D:\my stuff\code\uni projects\information modelling'

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server running at http://localhost:{}".format(PORT))
    httpd.serve_forever()