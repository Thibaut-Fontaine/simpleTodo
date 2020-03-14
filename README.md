# simpleTodo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# start API
node api/server.js
```

## Postgres setup

``` bash
# create database, user with password, and add db permissions
CREATE DATABASE todo;
CREATE USER x WITH PASSWORD 'todo';
GRANT ALL ON DATABASE todo TO x;

# into todo Database (access by \c todo) :
# add schema, table and sequences permissions for user
GRANT ALL ON schema todo TO x;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA todo TO x;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA todo TO x;
```

## Docker Setup

``` bash
docker build -t todo_api api

docker build -t todo_app app

docker-compose up

#docker run --name x -e POSTGRES_PASSWORD=todo -d -p 5432:5432 postgres:alpine
#docker exec -it postgres-0 bash
```
