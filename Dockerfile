FROM node:lts-alpine

WORKDIR /usr/src/app

COPY build .
COPY package.json .
COPY yarn.lock .

RUN yarn global add pm2 \
    && yarn global add serve \
    && yarn install --production

ENV NPM_CONFIG_LOGLEVEL warn

RUN ls -al -R

EXPOSE 3000

CMD [ "pm2-runtime", "serve", "build", "--env", "production" ]