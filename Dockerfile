FROM node:20.11.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

CMD if [ "$NODE_ENV" = "production" ]; \
    then npm run start:prod; \
    else npm run start:dev; \
    fi
