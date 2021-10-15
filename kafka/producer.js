const { Kafka, logLevel } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
const { CLOUD_KAFKA_MAX_PARTITION, CLOUD_KAFKA_TOPIC, CLOUD_KAFKA_BROKERS, CLOUD_KAFKA_USERNAME, CLOUD_KAFKA_PASSWORD, CLOUD_KAFKA_CLIENT_ID } = require("./config.js");

// 4oxw1lld-default
async function produce() {
    const kafka = new Kafka({
        clientId: CLOUD_KAFKA_CLIENT_ID,
        brokers: CLOUD_KAFKA_BROKERS,
        // connectionTimeout: 3000,
        // requestTimeout: 25000,
        // logLevel: logLevel.ERROR,
        // ssl: false,
        // ssl: true,
        // sasl: {
        //     mechanism: 'scram-sha-256', // plain, scram-sha-256 or scram-sha-512
        //     username: CLOUD_KAFKA_USERNAME,
        //     password: CLOUD_KAFKA_PASSWORD,
        // },
    });

    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");
    let index = 1;
    // after the produce has connected, we start an interval timer
    if (index <= 1100000) {
        setInterval(async () => {
            try {
                for (let i = 1; i <= 12; i++) {
                    const producedData = await producer.send({
                        topic: CLOUD_KAFKA_TOPIC,
                        messages: [
                            {
                                value: JSON.stringify({
                                    transactionId: uuidv4(),
                                    customerId: getRandom("Customer", 10),
                                    ownerId: getRandom("OwnerId", 10),
                                    channel: getRandom("Channel", 4),
                                    deviceType: getRandom("Device Type", 4),
                                    tpn: getRandom("TPN", 1000),
                                    amount: getRandomAmount(),
                                    transactionDate: generateRandomDate(),
                                    index: index,
                                }),
                                partition: CLOUD_KAFKA_MAX_PARTITION
                            },
                        ],
                    });
                    // if the message is written successfully, log it and increment `i`
                    console.log(`Produced ${index} data ${JSON.stringify(producedData)}`);
                    index++;
                }
            } catch (err) {
                console.error("could not write message " + err)
            }
        }, 1000);
    } else {
        console.log("Done");
    }
}

getRandom = (name = "Sample", count = 0) => {
    const randomArray = Array.from({ length: count }, (_, i) => name + ' ' + (i + 1));
    const random = Math.floor(Math.random() * randomArray.length);
    return randomArray[random];
}

getRandomAmount = () => {
    return parseFloat(`${(Math.floor(Math.random() * 100) + 50)}.${(Math.floor(Math.random() * 50) + 10)}`);
}

generateRandomDate = () => {
    const random = getRandomDate(new Date('2020-01-01'), new Date('2021-10-01'))
    return random.toISOString();
}

getRandomDate = (from, to) => {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

randomDate = (start, end, startHour, endHour) => {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}

produce();
// console.log(generateRandomDate());