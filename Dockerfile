FROM node:7.5.0


ADD . /ooha-app
WORKDIR /ooha-app

RUN npm install -g yarn
RUN yarn global add @angular/cli
RUN yarn

EXPOSE 4200
EXPOSE 49153
