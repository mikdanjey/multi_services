docker-compose up

docker-compose down

docker images

docker container ls

docker build druid_service

docker run -it bitnami/kafka:2 bash

docker exec -it bitnami/kafka:2 bash


docker rmi adf2b126dda8 --force

./bin/kafka-topics.sh --list --bootstrap-server localhost:9092

## Goto Kafka location
cd /opt/bitnami/kafka

## Create Topic
./bin/kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic mytopic

## Topic Description
./bin/kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic mytopic

## List All Topics
./bin/kafka-topics.sh --list --zookeeper zookeeper:2181

## Send some messages
./bin/kafka-console-producer.sh --zookeeper zookeeper:2181 --topic mytopic

## Start a consumer
./bin/kafka-console-consumer.sh --zookeeper zookeeper:2181 --topic mytopic --from-beginning
