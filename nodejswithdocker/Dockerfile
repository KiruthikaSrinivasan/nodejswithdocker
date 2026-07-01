FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN chmod +x node_modules/.bin/jest
EXPOSE 3000
CMD ["node","index.js"]

