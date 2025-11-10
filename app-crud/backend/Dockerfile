FROM php:8.2

# Instala dependências do sistema e extensões do PHP necessárias
RUN apt-get update && apt-get install -y \
    unzip \
    libpq-dev \
    libzip-dev \
    git \
    netcat-traditional \
    && docker-php-ext-install pdo pdo_mysql zip

WORKDIR /var/www/html
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN sed -i 's/\r$//' /usr/local/bin/entrypoint.sh

EXPOSE 8000
ENTRYPOINT [ "entrypoint.sh" ]
