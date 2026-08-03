
FROM node:22-alpine AS build
# Git is needed for last changed
# libc6-compat, see: https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat git

WORKDIR /src
# source.config.ts is required during postinstall
COPY package.json package-lock.json source.config.ts /src/
RUN npm ci

COPY . /src/
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL:-https://docs.kth.it}
RUN npm run build

FROM nginx:alpine AS release
COPY --from=build /src/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
