# Base image
FROM node:18-alpine

# Set working directory so that all subsequent command runs in this folder
WORKDIR ./BackEnd
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 3030
# Command to run our app
CMD [ "npm", "start"]
