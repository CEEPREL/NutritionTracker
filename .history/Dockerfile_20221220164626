FROM node:19-alpine
WORKDIR /app
COPY . .
RUN npm install
# Build the app
RUN npm run build
# COPY . -> ALL IN CURRENT DIR and . place in /app
COPY . .  


# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "start"]
