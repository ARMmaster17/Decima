FROM node:latest as js-build-stage
WORKDIR /app
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend/ .
RUN NODE_OPTIONS=--openssl-legacy-provider yarn run build

FROM golang:1.17-alpine as go-build-stage
RUN mkdir /src
COPY ./backend/ /src/
WORKDIR /src
RUN go build ./cmd/main.go

FROM alpine:3.14.2 as final-stage
RUN mkdir /app
WORKDIR /app
COPY --from=go-build-stage /src/main /app/
RUN mkdir /app/dist
COPY --from=js-build-stage /app/dist /app/dist
CMD /app/main