FROM node:12-slim

WORKDIR /usr/src/app

COPY package*.json ./

#install dependencies

RUN npm install --production

# Copy local code to the container image.
COPY . ./

# Build the application
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]
