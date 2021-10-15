const { Kafka } = require("kafkajs");
const { CLOUD_KAFKA_MAX_PARTITION, CLOUD_KAFKA_TOPIC, CLOUD_KAFKA_BROKERS, CLOUD_KAFKA_USERNAME, CLOUD_KAFKA_PASSWORD, CLOUD_KAFKA_CLIENT_ID } = require("./config.js");

async function createPartition() {
    const kafka = new Kafka({
        clientId: CLOUD_KAFKA_CLIENT_ID,
        brokers: CLOUD_KAFKA_BROKERS,
        // ssl: true,
        // sasl: {
        //     mechanism: 'scram-sha-256', // plain, scram-sha-256 or scram-sha-512
        //     username: CLOUD_KAFKA_USERNAME,
        //     password: CLOUD_KAFKA_PASSWORD,
        // },
    });

    const admin = kafka.admin();
    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: CLOUD_KAFKA_TOPIC,
                numPartitions: CLOUD_KAFKA_MAX_PARTITION,
            },
        ],
    });
    console.log("2 Partitions created");
    await admin.disconnect();
}

createPartition();
