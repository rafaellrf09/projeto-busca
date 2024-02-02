FROM node:18.18.2

WORKDIR /server/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.development ./

EXPOSE 3000

CMD ["npm", "run", "start:dev"]