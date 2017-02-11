FROM node:7.5.0

EXPOSE 4200

RUN npm install -g yarn
RUN yarn global add @angular/cli

ADD . /ooha-app
WORKDIR /ooha-app
RUN yarn
