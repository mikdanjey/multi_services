
## Downlaod Files
`curl https://raw.githubusercontent.com/manikandan-kyyba/multi_services/develop/docker-compose.yml --output docker-compose.yml`

`curl https://raw.githubusercontent.com/manikandan-kyyba/multi_services/develop/environment --output environment`

## Up the server
docker-compose up -d
 
http://localhost:8888

Druid UI: http://18.209.150.127:8888

Analytics UI: http://18.209.150.127:5000

git pull origin develop

docker-compose up
docker-compose up -d
docker-compose down && docker volume prune


rm -rf /home/ubuntu/.pm2/logs

https://convertlive.com/u/convert/megabytes/to/bytes#500

docker images

docker rmi adf2b126dda8 --force

docker container ls

docker exec -it kafka bash

docker exec -it broker /opt/druid/var
docker exec -it historical bash
docker exec -it middlemanager bash
docker exec -it router bash
docker exec -it coordinator bash
docker exec -it zookeeper bash


## Goto Kafka location
cd /opt/kafka

## Create Topic
./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 10 --topic newtopic

./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic newtopic

## Topic Description
./bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic newtopic

./bin/kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic newtopic

## List All Topics
./bin/kafka-topics.sh --list --bootstrap-server localhost:9092

./bin/kafka-topics.sh --list --zookeeper zookeeper:2181

## Send some messages
./bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic newtopic

./bin/kafka-console-producer.sh --zookeeper zookeeper:2181 --topic newtopic

## Start a consumer
./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic newtopic --from-beginning

./bin/kafka-console-consumer.sh --zookeeper zookeeper:2181 --topic newtopic --from-beginning



Stop the container(s) using the following command:
docker-compose down
Delete all containers using the following command:
docker rm -f $(docker ps -a -q)
Delete all volumes using the following command:
docker volume rm $(docker volume ls -q)
or
docker volume prune
Restart the containers using the following command:
docker-compose up -d


### Ref
https://kafka.apache.org/quickstart
http://selftuts.com/kafaka-setup-using-docker-compose/
https://hub.docker.com/r/wurstmeister/kafka
https://github.com/apache/druid/blob/master/distribution/docker/docker-compose.yml

https://druid.apache.org/docs/latest/development/extensions.html#loading-extensions

https://github.com/apache/druid/blob/0.22.0/distribution/docker/docker-compose.yml

CORS: https://druid.apache.org/docs/latest/design/auth.html

Memory: https://druid.apache.org/docs/latest/operations/basic-cluster-tuning.html
https://docs.docker.com/config/pruning
Zookeeper Doc: https://hub.docker.com/_/zookeeper

# Linus
chrome --disable-web-security --user-data-dir=~/chromeTemp

# Windows
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="D:/temp"

https://www.xenonstack.com/blog/apache-druid