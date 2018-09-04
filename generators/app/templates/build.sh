#!/bin/bash
app=${PWD##*/}_app

laravel new

docker-compose build && docker-compose up -d && docker exec -it $app /bin/bash
