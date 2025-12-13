FROM python:3.9-alpine

WORKDIR /app

COPY index.html style-dark.css style-light.css script.js server.py ./

EXPOSE 80

CMD ["python", "server.py"]