FROM node:8

RUN npm i -g pm2

ADD . /code
WORKDIR /code

RUN yarn && yarn run build
ENV NODE_ENV=production
CMD pm2 startOrRestart ecosystem.json --env production --no-daemon

EXPOSE 3000