#!/bin/bash

docker build -t todo_api api &&
docker build -t todo_app app &&
docker build -t todo_db db &&
docker run --name todo_db -p 5432:5432 -e POSTGRES_PASSWORD=todo -e POSTGRES_USER=x -d postgres &&
docker exec -it todo_db psql -U x -c "create database todo" &&
docker cp db todo_db:db &&
docker exec -it todo_db psql -U x -d todo -f db/db.sql &&
docker-compose up -d &&
docker network connect simpletodo_todo_net todo_db
