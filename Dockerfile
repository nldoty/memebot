FROM node:14.4.0

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8888
CMD [ "node", "main.js" ]