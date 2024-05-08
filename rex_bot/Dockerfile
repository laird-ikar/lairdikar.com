FROM node:22-alpine3.18

WORKDIR /usr/src

COPY ./package.json /usr/src/package.json
COPY ./package-lock.json /usr/src/package-lock.json
COPY ./app.js /usr/src/app.js
COPY ./commands/ /usr/src/commands/

EXPOSE 80
EXPOSE 443

RUN npm install

CMD ["node", "."]
