FROM node:16.13.1

WORKDIR /app

COPY . .
RUN npm install --only=production

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]