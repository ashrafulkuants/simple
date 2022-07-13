# base image
FROM node:14.17.0 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# stage: 2 — the production environment
FROM nginx:alpine

COPY --from=react-build /app/build /usr/share/nginx/html/

# RUN mkdir /etc/letsencrypt

EXPOSE 80

COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]


