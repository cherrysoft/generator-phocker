#!/bin/bash
app=${PWD##*/}_app

mkdir /tmp/${app}
mv * /tmp/${app}

composer create-project --prefer-dist laravel/laravel .

cp /tmp/${app}/* .

docker-compose build && docker-compose up -d && docker exec -it $app /bin/bash
