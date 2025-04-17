FROM node:22 AS builder

WORKDIR /app

ARG PRISMA_CLIENT_OUTPUT

ENV PRISMA_CLIENT_OUTPUT=${PRISMA_CLIENT_OUTPUT}

COPY package*.json ./
COPY prisma ./prisma

COPY . .

RUN npm install
RUN npx prisma generate

RUN npm run build

FROM node:22

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start:prod"]