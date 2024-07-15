# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies, including Next.js
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install a static file server like `serve`
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Serve the static files from the "out" directory
CMD ["serve", "-s", "out", "-l", "3000"]
