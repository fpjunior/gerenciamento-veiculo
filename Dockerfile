# Dockerfile para o backend Node.js
FROM node:20
WORKDIR /app
COPY gerenciamento-combustivel-backend/package*.json ./
RUN npm install
COPY gerenciamento-combustivel-backend/. .
EXPOSE 3000
CMD ["node", "server.js"]
