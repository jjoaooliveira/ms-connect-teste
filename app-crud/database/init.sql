CREATE DATABASE IF NOT EXISTS crud_api;
CREATE USER IF NOT EXISTS 'laravel-api'@'%' IDENTIFIED BY 'laravel-api';
GRANT ALL PRIVILEGES ON crud_api.* TO 'laravel-api'@'%';
FLUSH PRIVILEGES;

use crud_api;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, phone) VALUES
('Joao Silva', 'joao@example.com', '11999999999'),
('Maria Santos', 'maria@example.com', '21988888888'),
('Pedro Oliveira', 'pedro@example.com', '31977777777');