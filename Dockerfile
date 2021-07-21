FROM node:14.16

WORKDIR /app

RUN npm install
RUN npm install -g nodemon

EXPOSE 3000
CMD ["bash", "-c","cd /app/srcs/ && npm install && nodemon server.js"]
