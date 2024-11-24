# Use Node.js LTS image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the port for the development server
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]