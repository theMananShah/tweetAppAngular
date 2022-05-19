FROM nginx:1.17.1-alpine
EXPOSE 4200
COPY /dist/tweetAppAngular /usr/share/nginx/html