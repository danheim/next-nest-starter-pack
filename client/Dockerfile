FROM node:16-alpine AS development

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install glob rimraf
RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/client/ ./

EXPOSE 4000

CMD ["npm", "start"]