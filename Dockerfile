FROM node:latest as build
WORKDIR /frontend/frontend-projectmap
COPY package.json ./ 
RUN npm install
COPY . .
COPY .env .
RUN npm run build

# Production stage
FROM nginx:latest
COPY --from=build /frontend/frontend-projectmap/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]