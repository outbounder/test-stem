# Dockerfile context is repo's root
# Dockerfile is a template
# usage 
# $ cd cells/cell89 && npx angel docker build ./docker/Dockerfile
FROM node:16-alpine as base
RUN apk update && apk upgrade
RUN apk add --no-cache bash git openssh

ARG mode='production'
ARG cellName='cell89'
ARG cellRoot='cells/cell89'

ENV NODE_ENV $mode
ENV CELL_MODE _$mode

#deps>
#
# cell package dependencies will be inserted here as 
# COPY ./packages/package/ /repo/packages/package/
# RUN cd /packages/package/ && npm install --$mode
# 
#<deps

COPY ./dna/ ./repo/dna/
COPY ./$cellRoot/ /repo/$cellRoot/
RUN cd /repo/$cellRoot/ && rm package-lock.json && npm install --production

WORKDIR /repo/$cellRoot/
CMD node index.js