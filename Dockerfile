FROM node:18

WORKDIR /usr/src/coolshop-adnan

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

CMD [ "npm", "run", "start" ]