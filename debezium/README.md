docker volume prune

docker-compose down && docker volume prune

docker-compose up


docker run -it --rm --name connect -p 8083:8083 -e GROUP_ID=1 -e CONFIG_STORAGE_TOPIC=debezium_connect_configs -e OFFSET_STORAGE_TOPIC=debezium_connect_offsets -e STATUS_STORAGE_TOPIC=debezium_connect_statuses --link zookeeper:zookeeper --link kafka:kafka debezium/connect:1.8



docker run -it --rm --name zookeeper -p 2181:2181 -p 2888:2888 -p 3888:3888 debezium/zookeeper:1.8

docker run -it --rm --name kafka -p 9092:9092 --link zookeeper:zookeeper debezium/kafka:1.8

docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_PASSWORD=root debezium/example-mysql:1.8

docker run -it --rm --name mysqlterm --link mysql --rm mysql:5.7 sh -c "exec mysql -h 192.168.29.240 -P 3306 -u root -p root"


docker run -it --rm --name watcher --link zookeeper:zookeeper --link kafka:kafka debezium/kafka:1.8 watch-topic -a -k dbserver1.denovosystem_portal_dev.sample

docker run -it --rm --name watcher --link zookeeper:zookeeper --link kafka:kafka debezium/kafka:1.8 kafka-topics --list

## List All Topics
./bin/kafka-topics.sh --list --bootstrap-server localhost:9092

## Create Topic
./bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 10 --topic newtopic

## Start a consumer
./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic newtopic --from-beginning

./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic dbserver1.denovosystem_portal_dev.sample --from-beginning

docker run -it --rm --name watcher --link zookeeper:zookeeper --link kafka:kafka debezium/kafka:1.8 watch-topic -a -k dbserver1.denovosystem_portal_dev.sample


{
    "name": "inventory-connector",
    "config": {
        "connector.class": "io.debezium.connector.mysql.MySqlConnector",
        "tasks.max": "1",
        "database.hostname": "mysql",
        "database.port": "3306",
        "database.user": "debezium",
        "database.password": "dbz",
        "database.server.id": "184054",
        "database.server.name": "dbserver1",
        "database.include.list": "inventory",
        "database.history.kafka.bootstrap.servers": "kafka:9092",
        "database.history.kafka.topic": "schema-changes.inventory"
    }
}