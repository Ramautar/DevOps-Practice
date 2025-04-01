FROM nginx:stable-alpine

COPY ./html/index.html /usr/share/nginx/html/index.html
#COPY ./webserver/html/index.html /usr/share/nginx/html/index.html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]