const { Kafka } = require("kafkajs");
const { CLOUD_KAFKA_TOPIC, CLOUD_KAFKA_BROKERS, CLOUD_KAFKA_USERNAME, CLOUD_KAFKA_PASSWORD, CLOUD_KAFKA_CLIENT_ID, CLOUD_KAFKA_GROUP_ID } = require("./config.js");

async function consume() {
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

    const consumer = kafka.consumer({ groupId: CLOUD_KAFKA_GROUP_ID });
    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({
        topic: CLOUD_KAFKA_TOPIC,
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
