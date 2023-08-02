# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY backend/package.json backend/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files to the container
COPY backend/ ./

# Start the backend server (you might need to adjust the command based on your server file)
CMD ["node", "server.js"]
