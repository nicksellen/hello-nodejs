FROM mhart/alpine-node:8

COPY . /app
WORKDIR /app

EXPOSE 80

ENV NODE_ENV=production
ENV PORT=80

CMD ["node", "."]

