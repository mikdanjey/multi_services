
## Downlaod Files
`curl https://raw.githubusercontent.com/manikandan-kyyba/multi_services/develop/docker-compose.yml --output docker-compose.yml`

`curl https://raw.githubusercontent.com/manikandan-kyyba/multi_services/develop/environment --output environment`

## Up the server
`docker-compose up -d`

docker-compose down

docker images

docker rmi adf2b126dda8 --force

docker container ls

docker exec -it kafka bash

## Goto Kafka location
cd /opt/kafka

## Create Topic
./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic mytopic

./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic mytopic

## Topic Description
./bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic mytopic

./bin/kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic mytopic

## List All Topics
./bin/kafka-topics.sh --list --bootstrap-server localhost:9092

./bin/kafka-topics.sh --list --zookeeper zookeeper:2181

## Send some messages
./bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic mytopic

./bin/kafka-console-producer.sh --zookeeper zookeeper:2181 --topic mytopic

## Start a consumer
./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic mytopic --from-beginning

./bin/kafka-console-consumer.sh --zookeeper zookeeper:2181 --topic mytopic --from-beginning



### Ref
https://kafka.apache.org/quickstart
http://selftuts.com/kafaka-setup-using-docker-compose/
https://hub.docker.com/r/wurstmeister/kafka
https://github.com/apache/druid/blob/master/distribution/docker/docker-compose.yml

https://druid.apache.org/docs/latest/development/extensions.html#loading-extensions