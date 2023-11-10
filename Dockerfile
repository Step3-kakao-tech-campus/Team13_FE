# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 AS build
WORKDIR /usr/src/app
COPY src/package*.json ./
RUN yarn install
COPY src/ ./
RUN yarn build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist

# Env
ENV VITE_USE_MOCK_API=false
ENV VITE_FUNDERING_API="https://k9c64b90a0b75a.user-app.krampoline.com"

RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
