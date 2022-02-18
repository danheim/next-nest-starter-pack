FROM node:16-slim AS development

WORKDIR /usr/src/api

COPY package*.json ./
COPY prisma ./prisma/


RUN apt-get update
RUN apt-get install -y openssl
RUN npm install glob rimraf
RUN npm install --only=development

COPY . .

RUN npm run build
RUN npx prisma generate

FROM node:16-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package*.json ./

RUN apt-get update
RUN apt-get install -y openssl
RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/api/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]