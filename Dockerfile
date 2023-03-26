# Building react static content
FROM node:14.17.3-alpine3.11 as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN npm install --silent
# CMD ["npm", "run-script", "build"]
RUN npm run-script build