# Dockerfile
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


# PAso 2
FROM nginx:alpine
COPY --from=node /app/dist/heroesapp /usr/share/nginx/html