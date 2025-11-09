#!/bin/sh

cd /var/www/html

DB_HOST=mysql
DB_PORT=3306
DB_USERNAME=laravel-api
DB_PASSWORD=laravel-api

echo "Aguardando MySQL em $DB_HOST:$DB_PORT..."

# Loop até a porta do MySQL estar aberta
echo "Waiting for database..."
echo DB_NAME: ${DB_NAME}
echo DB_HOST: ${DB_HOST}
echo DB_PORT: ${DB_PORT}
while ! nc -z ${DB_HOST} ${DB_PORT}; do sleep 1; done
echo "Connected to database."

# Gerar APP_KEY se faltar
if [ ! -f .env ]; then
    cp .env.example .env
fi

chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

composer install --no-interaction --prefer-dist

php artisan key:generate

# Executar migrations
php artisan migrate

# Subir servidor Laravel
php artisan serve --host 0.0.0.0 --port 8000