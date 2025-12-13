FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod 644 /usr/share/nginx/html/index.html
EXPOSE 80