let config = {};

config.CLOUDKARAFKA_TOPIC_PREFIX = "4oxw1lld-";
config.CLOUDKARAFKA_TOPIC = `${config.CLOUDKARAFKA_TOPIC_PREFIX}default`;
config.CLOUDKARAFKA_BROKERS = ["glider-02.srvs.cloudkafka.com:9094", "glider-03.srvs.cloudkafka.com:9094", "glider-01.srvs.cloudkafka.com:9094"];
config.CLOUDKARAFKA_USERNAME = "4oxw1lld";
config.CLOUDKARAFKA_PASSWORD = "Xa3StslqUZ65Q_hAYz9kXOs1sbxRIM1Z";
config.CLOUDKARAFKA_CLIENT_ID = "users-app";
config.CLOUDKARAFKA_GROUP_ID = "users";
config.CLOUDKARAFKA_PARTITION = 3;

module.exports = config;

let config = {};

config.CLOUDKARAFKA_TOPIC_PREFIX = "";
config.CLOUDKARAFKA_TOPIC = `${config.CLOUDKARAFKA_TOPIC_PREFIX}mytopic`;
config.CLOUDKARAFKA_BROKERS = ["192.168.29.2:9094"];
config.CLOUDKARAFKA_USERNAME = "4oxw1lld";
config.CLOUDKARAFKA_PASSWORD = "Xa3StslqUZ65Q_hAYz9kXOs1sbxRIM1Z";
config.CLOUDKARAFKA_CLIENT_ID = "users-app";
config.CLOUDKARAFKA_GROUP_ID = "users";
config.CLOUDKARAFKA_PARTITION = 3;

module.exports = config;