import http.server
import socketserver

PORT = 5000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving on http://localhost:{PORT}")
    httpd.serve_forever()