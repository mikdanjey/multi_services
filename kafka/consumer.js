const { Kafka } = require("kafkajs");
const { CLOUDKARAFKA_TOPIC, CLOUDKARAFKA_BROKERS, CLOUDKARAFKA_USERNAME, CLOUDKARAFKA_PASSWORD, CLOUDKARAFKA_CLIENT_ID, CLOUDKARAFKA_GROUP_ID } = require("./config.js");

async function consume() {
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

    const consumer = kafka.consumer({ groupId: CLOUDKARAFKA_GROUP_ID });
    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({
        topic: CLOUDKARAFKA_TOPIC,
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            // 1. topic
            // 2. partition
            // 3. message
            console.log(
                `To Partition ${partition} -> message ${message.value.toString()}`
            );
            console.log("\n");
        },
    });
}

consume();
