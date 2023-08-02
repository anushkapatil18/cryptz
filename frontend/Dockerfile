# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY frontend/package.json frontend/package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files to the container
COPY frontend/ ./

# Build the React app
RUN npm run build

# Start the production server (you might need to adjust the command based on your React project)
CMD ["npm", "start"]
