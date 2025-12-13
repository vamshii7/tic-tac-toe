FROM nginx:alpine

COPY static/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod 644 /usr/share/nginx/html/*

EXPOSE 80