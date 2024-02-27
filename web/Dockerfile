FROM node:18.18.2

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

COPY .env.development ./

EXPOSE 5173

CMD ["npm", "run", "dev"]