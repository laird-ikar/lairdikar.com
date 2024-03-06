FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./www/	/www/data/


EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
