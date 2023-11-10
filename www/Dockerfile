FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./index.html /www/data/index.html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
