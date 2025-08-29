# Use Node.js for backend
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json first for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Run server
CMD ["npm", "start"]