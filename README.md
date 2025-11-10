# ms-connect-teste

Este projeto é um teste desenvolvido para a **MS-CONNECT**. 

## Objetivo
Aplicação  *CRUD* com frontend em Angular e backend com api restful em PHP.

### Requisitos
- Frontend -> Angular  
- Backend -> PHP
- Banco de dados -> Mysql

## Frameworks utilizados
- Laravel (backend)

## Executar aplicação
Para fazer o build da aplicação clone o projeto com `git clone` e navegue até o root da aplicação `./app-crud`. Em seguida, digite no CMD: 
    
    docker-compose build 

Em seguida execute o comando:
    
    docker-compose up -d
    
Com isso, o docker realizará a containerização do projeto. Cada serviço está em um diretório correspondente e contem um arquivo Dockerfile. 

## Observação
O container do backend espera pela disponibilidade do banco de dados. Aguarde a inicialização completa de todos os serviços para utilização do sistema.


## URLs
### Frontend
- localhost:80/
- localhost:80/users
- localhost:80/users/new

### Backend (RESTful)
- localhost:8000/api/users
- localhost:8000/api/users/`:id`
