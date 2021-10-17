let config = {};

config.CLOUD_KAFKA_TOPIC_PREFIX = "";
config.CLOUD_KAFKA_TOPIC = `${config.CLOUD_KAFKA_TOPIC_PREFIX}transactions`;
config.CLOUD_KAFKA_BROKERS = ["localhost:9094"];
config.CLOUD_KAFKA_USERNAME = "";
config.CLOUD_KAFKA_PASSWORD = "";
config.CLOUD_KAFKA_CLIENT_ID = "my-app";
config.CLOUD_KAFKA_GROUP_ID = "users";
config.CLOUD_KAFKA_MAX_PARTITION = 8;

module.exports = config;