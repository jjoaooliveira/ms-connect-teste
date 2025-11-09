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
Para executar a aplicação é necessário navegar até o root da aplicação `./app-crud` e digitar no CMD: 
    
    docker-compose up --build 

Com isso, o docker realizará a containeralização do projeto. Cada serviço está em um diretório correspondente e contem um arquivo Dockerfile. 

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
