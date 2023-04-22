# Build stage
FROM node:alpine
WORKDIR /frontend/frontend-projectmap
COPY package.json yarn.lock ./
ENV NODE_OPTIONS="--max-old-space-size=1630"
RUN yarn install --frozen-lockfile --verbose --network-timeout 600000
COPY . .
COPY .env .
RUN  yarn build


# Production stage
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
COPY .hluapp/frontend/frontend-projectmap/dist/ .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]