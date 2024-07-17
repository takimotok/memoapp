# base
# -----
FROM node:20.15-alpine3.19 as base

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
ENV HOME=/home/node
ENV APP_HOME=$HOME/app

WORKDIR $APP_HOME

EXPOSE 3000

# curl: for checking APIs in local dev. env.
# git: for watch mode in Jest
RUN apk upgrade --no-cache && \
    apk add --update --no-cache \
    bash \
    curl \
    git \
    vim

# set npm to install dependencies globally
# cf.) BestPractices.md
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY package*.json ./

# for PoLP
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
RUN chown -R node:node .
USER node

RUN echo "WORKDIR is $WORKDIR" && \
    echo "HOME is $HOME" && \
    echo "LANG is $LANG" && \
    npm config list

# dev
# -----
FROM base as dev
ENV NODE_ENV=development

# RUN npm ci
