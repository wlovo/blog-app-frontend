FROM node:10.16.3-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client

RUN npm install

COPY . /app/client

CMD ["npm", "start"]