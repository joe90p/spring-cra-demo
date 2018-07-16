#!/bin/bash
npm run build --prefix src/main/app
cp src/main/app/build/static/js/main.*.js src/main/resources/static/static/index.js
~/idea-IC-181.5540.7/plugins/maven/lib/maven3/bin/mvn clean package
~/idea-IC-181.5540.7/plugins/maven/lib/maven3/bin/mvn
