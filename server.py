# Basic HTTP Server for Local Development
import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

handler = SimpleHTTPRequestHandler
server  = BaseHTTPServer.HTTPServer
protocol = "HTTP/1.0"
hostname = '127.0.0.1'

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000

server_address = (hostname, port)

handler.protocol_version = protocol
httpd = server(server_address, handler)

sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."
httpd.serve_forever()