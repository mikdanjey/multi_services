const { Kafka } = require("kafkajs");
const { CLOUDKARAFKA_TOPIC, CLOUDKARAFKA_BROKERS, CLOUDKARAFKA_USERNAME, CLOUDKARAFKA_PASSWORD, CLOUDKARAFKA_CLIENT_ID } = require("./config.js");

async function createPartition() {
    const kafka = new Kafka({
        clientId: CLOUDKARAFKA_CLIENT_ID,
        brokers: CLOUDKARAFKA_BROKERS,
        // ssl: true,
        // sasl: {
        //     mechanism: 'scram-sha-256', // plain, scram-sha-256 or scram-sha-512
        //     username: CLOUDKARAFKA_USERNAME,
        //     password: CLOUDKARAFKA_PASSWORD,
        // },
    });

    const admin = kafka.admin();
    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: CLOUDKARAFKA_TOPIC,
                numPartitions: 10,
            },
        ],
    });
    console.log("2 Partitions created");
    await admin.disconnect();
}

createPartition();
