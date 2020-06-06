docker-compose up

docker-compose down

docker images

docker container ls

docker build druid_service

docker run -it bitnami/kafka:2 bash

docker exec -it bitnami/kafka:2 bash

/opt/bitnami/kafka

bin/kafka-topics.sh --create --bootstrap-server 0.0.0.0:9092 --replication-factor 1 --partitions 1 --topic test


docker rmi adf2b126dda8 --force