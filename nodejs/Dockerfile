FROM node:23

WORKDIR /usr/src/app
COPY /nodejs/ .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]