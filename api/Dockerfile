FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i --force

RUN npm run envVariable
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "start"]