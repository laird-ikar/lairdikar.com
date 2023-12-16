FROM node:alpine

WORKDIR /usr/src

COPY ./package.json /usr/src/package.json
COPY ./package-lock.json /usr/src/package-lock.json
COPY src /usr/src/src

EXPOSE 80
EXPOSE 443

RUN npm install

CMD ["node", "."]
