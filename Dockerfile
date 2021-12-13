FROM node:lts-alpine AS pm2
WORKDIR /usr/src/app
RUN yarn global add pm2@5.1.2 serve --non-interactive

FROM pm2 AS dependencies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile --non-interactive

FROM dependencies AS build
WORKDIR /usr/src/app
COPY . ./
RUN yarn build

FROM build AS app
WORKDIR /usr/src/app/build
ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3000
CMD [ "pm2-runtime", "serve", ".", "--name", "portfolio-web", "--env", "production", "--spa" ]
