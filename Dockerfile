# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Build the app
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
