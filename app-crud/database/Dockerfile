FROM mysql:8.0

COPY init.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root \
    MYSQL_USER=laravel-api \
    MYSQL_PASSWORD=laravel-api \
    MYSQL_DATABASE=crud_api
EXPOSE 3306