#!/usr/bin/env sh

dir="$(git rev-parse --show-toplevel)"
docker_dir="${dir}/testing/visual-regression"
docker_tag="gunrock-visual-regression"

docker build -t "${docker_tag}" -f "${docker_dir}/Dockerfile" "${dir}"
docker run \
  -v "${dir}/src/__tests__/__image_snapshots__/":/build/src/__tests__/__image_snapshots__/ \
  "${docker_tag}" "${1}"
