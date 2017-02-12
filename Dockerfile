FROM node:7.5.0

EXPOSE 4200
EXPOSE 49153

RUN npm install -g yarn
RUN yarn global add @angular/cli

ADD . /ooha-app
WORKDIR /ooha-app
RUN yarn

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
