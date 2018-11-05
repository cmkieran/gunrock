#!/usr/bin/env bash
dir="$(git rev-parse --show-toplevel)"
key="testing/test-key.pem"
cert="testing/test-cert.pem"

if [ ! -f "${key}" ] || [ ! -f "${cert}" ]; then
  echo "Generating new key and cert for dev server"
  openssl req \
    -x509 \
    -nodes \
    -new \
    -keyout "${dir}/${key}" \
    -out "${dir}/${cert}" \
    -subj "/C=US/ST=CA/L=Sacramento/O=Smythian/OU=Gunrock/CN=localhost" \
    -days 365
  sleep 1
else
  echo "Using existing key and cert for storybook"
fi

echo "Starting storybook"
start-storybook --port 9000 --https --ssl-cert "${cert}" --ssl-key "${key}"
