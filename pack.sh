#!/bin/bash
set -o errexit
set -o pipefail
set -o nounset

BUILD=./build
S3BUCKET=s3://cortex-test-assets/animation/

rm -rf ${BUILD}
npm run build

for app in opacity rotate scale skew translate webgl-rotate webgl-move
do
    pushd ${BUILD}/${app}
    zip -r ${app}.zip *
    aws s3 cp ${app}.zip ${S3BUCKET} --acl public-read
    popd
done
