FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./lairdikar.com.crt /etc/ssl/lairdikar.com.crt
COPY ./lairdikar.com.key /etc/ssl/lairdikar.com.key

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
