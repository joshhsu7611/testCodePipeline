FROM node:7.5.0

RUN npm install -g yarn
RUN yarn global add @angular/cli

ADD package.json /tmp/package.json
RUN cd /tmp && yarn
RUN mkdir -p /ooha-app && cp -a /tmp/node_modules /ooha-app

WORKDIR /ooha-app
ADD . /ooha-app

EXPOSE 4200
EXPOSE 49153

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
