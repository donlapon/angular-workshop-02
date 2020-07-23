# stage 1

FROM node:12.18.2-stretch AS product-app
WORKDIR /product-app
COPY . .
RUN npm install && npm run build
# stage 2

FROM nginx:alpine
COPY --from=product-app /app/dist/product-app /usr/share/nginx/html
EXPOSE 80