let config = {};

config.CLOUD_KAFKA_TOPIC_PREFIX = "4oxw1lld-";
config.CLOUD_KAFKA_TOPIC = `${config.CLOUD_KAFKA_TOPIC_PREFIX}default`;
config.CLOUD_KAFKA_BROKERS = ["glider-02.srvs.cloudkafka.com:9094", "glider-03.srvs.cloudkafka.com:9094", "glider-01.srvs.cloudkafka.com:9094"];
config.CLOUD_KAFKA_USERNAME = "4oxw1lld";
config.CLOUD_KAFKA_PASSWORD = "Xa3StslqUZ65Q_hAYz9kXOs1sbxRIM1Z";
config.CLOUD_KAFKA_CLIENT_ID = "users-app";
config.CLOUD_KAFKA_GROUP_ID = "users";
config.CLOUD_KAFKA_MAX_PARTITION = 3;

module.exports = config;

let config = {};

config.CLOUD_KAFKA_TOPIC_PREFIX = "";
config.CLOUD_KAFKA_TOPIC = `${config.CLOUD_KAFKA_TOPIC_PREFIX}mytopic`;
config.CLOUD_KAFKA_BROKERS = ["192.168.29.2:9094"];
config.CLOUD_KAFKA_USERNAME = "4oxw1lld";
config.CLOUD_KAFKA_PASSWORD = "Xa3StslqUZ65Q_hAYz9kXOs1sbxRIM1Z";
config.CLOUD_KAFKA_CLIENT_ID = "users-app";
config.CLOUD_KAFKA_GROUP_ID = "users";
config.CLOUD_KAFKA_MAX_PARTITION = 3;

module.exports = config;