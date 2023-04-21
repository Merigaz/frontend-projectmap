# Build stage
FROM 14.18.0-alpine as build
WORKDIR /frontend/frontend-projectmap
COPY package.json yarn.lock ./ 
RUN yarn install --frozen-lockfile --verbose --network-timeout 600000
COPY . .
COPY .env .
RUN yarn build


# Production stage
FROM nginx:1.21.3-alpine
COPY --from=build /frontend/frontend-projectmap/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]