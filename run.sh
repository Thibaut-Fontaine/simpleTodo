#!/bin/bash

read -p "Build API [Press ENTER] ..."
docker build -t todo_api api
read -p "Build APP [Press ENTER] ..."
docker build -t todo_app app
read -p "Build DB [Press ENTER] ..."
docker run --name todo_db --network="host" -e POSTGRES_PASSWORD=todo -e POSTGRES_USER=x -d postgres
sleep 1.5
read -p "Create database [Press ENTER] ..."
docker exec -it todo_db psql -U x -c "create database todo"
docker cp db todo_db:db
docker exec -it todo_db psql -U x -d todo -f db/db.sql
read -p "Finish [Press ENTER] ..."
docker-compose up -d
echo "\nNow, try localhost:8080\n"
