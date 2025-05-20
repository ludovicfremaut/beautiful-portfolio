# Étape 1 : build de React
FROM node:20 AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY . .
RUN pnpm install && pnpm run build

# Étape 2 : serveur Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
