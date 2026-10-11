FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat git
WORKDIR /app


FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci


FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_SITE_URL=https://docs.kth.it
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
# Clean default nginx files
RUN rm -rf ./*
COPY --from=builder /app/out ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
