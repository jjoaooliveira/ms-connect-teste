FROM node:latest
WORKDIR /app
COPY ./frontend-app/package*.json ./
RUN npm install
RUN npm install @angular/cli@latest -g
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
