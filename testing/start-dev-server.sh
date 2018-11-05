#!/usr/bin/env bash
dir="$(git rev-parse --show-toplevel)"
key="testing/test-key.pem"
cert="testing/test-cert.pem"
port="8000"

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
  echo "Using existing key and cert for dev server"
fi

echo "Starting dev server"
gatsby develop --open --https --cert-file="${cert}" --key-file="${key}" --verbose --port "${port}"
