
Apache Kafka is a framework implementation of a software bus using stream-processing.

3 Main Entities:
  - Topic: Space where data is produces and consumed.
  - Producer: Produces data to topic.
  - Consumer: Consumes data from topic.


https://kafka.js.org/docs/configuration
https://www.sohamkamani.com/nodejs/working-with-kafka/


18.209.150.127:9094
transactions

pm2 start producer.js --name "Kafka Producer"

git pull origin develop
docker-compose up
docker-compose up -d
docker-compose down
docker volume prune

docker exec -it zookeeper1 /bin/bash

docker image prune -a