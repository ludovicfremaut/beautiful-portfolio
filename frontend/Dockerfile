# Image officielle Node.js 
FROM node:20 AS builder
# Créer un répertoire de travail
WORKDIR /app
# Installer pnpm
RUN npm install -g pnpm
# Copier tout le conrtenu du répertoire courant dans le conteneur
COPY . .
# Installer les dépendances
RUN pnpm install
# Construire l'application
RUN pnpm run build

FROM nginx:alpine
# Copier le contenu du répertoire dist dans le répertoire de nginx
COPY --from=BUILDER /app/dist /usr/share/nginx/html
# On y définit comment gérer les routes (important avec React SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Exposer le port 80
EXPOSE 80
# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]