FROM node:11.1.0-alpine

RUN apk add --update --no-cache python g++ make git chromium nss \
    && apk add fftw-dev --update --no-cache --repository https://dl-3.alpinelinux.org/alpine/edge/main/ \
    && apk add vips-dev --update --no-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

WORKDIR /build
ADD package.json .
RUN yarn global add node-gyp \
    && yarn install --silent

VOLUME ["src/__tests__/__image_snapshots__/"]

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ADD . .
RUN yarn build \
    && yarn storybook:build

ENTRYPOINT ["yarn", "test:visual:ci"]
