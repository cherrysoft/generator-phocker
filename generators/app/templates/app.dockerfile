FROM php:7.1.0-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev \
    mysql-client --no-install-recommends \
    && docker-php-ext-install mcrypt pdo_mysql

RUN apt-get install --yes zip unzip php-pclzip

RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/local/bin --filename=composer
