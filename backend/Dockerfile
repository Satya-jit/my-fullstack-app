# Step 1: Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Step 2: Setup backend
FROM node:18-alpine
WORKDIR /app

# Copy backend package files and install deps
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# Copy backend code
COPY backend/ ./

# Copy frontend build output into backend/public
COPY --from=frontend-build /app/frontend/build ./public

EXPOSE 5000
CMD ["npm", "start"]
