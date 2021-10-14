const { Kafka, logLevel } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
const { CLOUDKARAFKA_PARTITION, CLOUDKARAFKA_TOPIC, CLOUDKARAFKA_BROKERS, CLOUDKARAFKA_USERNAME, CLOUDKARAFKA_PASSWORD, CLOUDKARAFKA_CLIENT_ID } = require("./config.js");

// 4oxw1lld-default
async function produce() {
    const kafka = new Kafka({
        clientId: CLOUDKARAFKA_CLIENT_ID,
        brokers: CLOUDKARAFKA_BROKERS,
        // connectionTimeout: 3000,
        // requestTimeout: 25000,
        // logLevel: logLevel.ERROR,
        // ssl: false,
        // ssl: true,
        // sasl: {
        //     mechanism: 'scram-sha-256', // plain, scram-sha-256 or scram-sha-512
        //     username: CLOUDKARAFKA_USERNAME,
        //     password: CLOUDKARAFKA_PASSWORD,
        // },
    });

    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");
    let index = 0;
    const producedData = await producer.send({
        topic: CLOUDKARAFKA_TOPIC,
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
                    index: ++index,
                }),
                partition: CLOUDKARAFKA_PARTITION
            },
        ],
    });
    console.log(`Produced data ${JSON.stringify(producedData)}`);
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

setInterval(async () => {
    for (let index = 1; index <= 1; index++) {
        await produce();
    }
    // console.log(generateRandomDate());
}, 1000);

