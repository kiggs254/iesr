# ── Stage 1: install deps ────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ── Stage 2: build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* vars are baked into the JS bundle at build time.
# Pass them as Docker build arguments in Coolify → Build Args.
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_PORTAL_URL=https://lms.iesr.co.ke

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_PORTAL_URL=$NEXT_PUBLIC_PORTAL_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ── Stage 3: serve with Nginx ─────────────────────────────────────────────────
FROM nginx:stable-alpine AS runner

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy the static export output
COPY --from=builder /app/out /usr/share/nginx/html

# Custom Nginx config for Next.js static export
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
