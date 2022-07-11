# FROM node:lts-alpine as build 

# WORKDIR /app

# COPY package.json .
# RUN npm install 
# COPY . .
# RUN npm run build

# FROM nginx
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 

# COPY --from=build /app/build /usr/share/nginx/html 

# base image
FROM node:14.17.0 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# stage: 2 — the production environment
FROM nginx:alpine

COPY --from=react-build /app/build /usr/share/nginx/html/


EXPOSE 8080

# COPY default.conf /etc/nginx/conf.d/
COPY /nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]

