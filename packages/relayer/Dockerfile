FROM node:8

COPY ./packages/colony /monorepo/packages/colony
COPY ./packages/typings /monorepo/packages/typings
COPY ./packages/relayer /monorepo/packages/relayer

COPY package.json /monorepo
COPY tsconfig.json /monorepo
COPY tslint.json /monorepo
COPY .yarnrc /monorepo

WORKDIR /monorepo/packages/relayer

RUN yarn install

EXPOSE 4030
CMD [ "yarn", "start" ]
