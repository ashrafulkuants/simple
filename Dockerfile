#stage 1
#build docker image of react app
FROM node:14.17.0 AS build-stage
#set working directory
RUN mkdir /usr/app

COPY . /usr/app

WORKDIR /usr/app

RUN yarn

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

#Stage 2 
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

COPY default.conf /etc/nginx/conf.d/
ENTRYPOINT ["nginx", "-g", "daemon off;"]