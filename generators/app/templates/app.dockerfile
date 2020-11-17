FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev \
    mariadb-client --no-install-recommends \
    && pecl install mcrypt-1.0.3 \
    && docker-php-ext-install pdo_mysql

RUN apt-get install --yes zip unzip

RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/local/bin --filename=composer
