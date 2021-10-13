let config = {};

config.CLOUDKARAFKA_TOPIC_PREFIX = "";
config.CLOUDKARAFKA_TOPIC = `${config.CLOUDKARAFKA_TOPIC_PREFIX}`;
config.CLOUDKARAFKA_PARTITION = 3;
config.CLOUDKARAFKA_BROKERS = ["localhost:9094",];
config.CLOUDKARAFKA_USERNAME = "";
config.CLOUDKARAFKA_PASSWORD = "";
config.CLOUDKARAFKA_CLIENT_ID = "users-app";
config.CLOUDKARAFKA_GROUP_ID = "users";

module.exports = config;