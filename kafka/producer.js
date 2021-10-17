const { Kafka, logLevel } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const faker = require('faker');

const { CLOUD_KAFKA_MAX_PARTITION, CLOUD_KAFKA_TOPIC, CLOUD_KAFKA_BROKERS, CLOUD_KAFKA_USERNAME, CLOUD_KAFKA_PASSWORD, CLOUD_KAFKA_CLIENT_ID } = require("./config.js");

function nanoseconds(time) {
    if (!Array.isArray(time) || time.length !== 2) {
        throw new TypeError('expected an array from process.hrtime()');
    }
    return +time[0] * 1e9 + +time[1];
};

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
    let refreshIntervalId = setInterval(async () => {
        if (index <= 100000) { // 1125900 <= 1100000 // false
            try {
                let messages = [];
                let partition = Math.floor(Math.random() * CLOUD_KAFKA_MAX_PARTITION);
                for (let i = 1; i <= 100; i++) {
                    messages.push({
                        value: JSON.stringify({
                            transactionId: uuidv4(),
                            customerId: getRandom("Customer", 10),
                            ownerId: getRandom("OwnerId", 10),
                            channel: getRandom("Channel", 4),
                            deviceType: getRandom("Device Type", 4),
                            tpn: getRandom("TPN", 1000),
                            amount: getRandomAmount(),
                            transactionDate: generateRandomDate(),
                            index: `${index}-${i}`,
                            // streamTime: nanoseconds(process.hrtime())
                        }),
                        partition,
                    });
                }
                const producedData = await producer.send({
                    topic: CLOUD_KAFKA_TOPIC,
                    messages
                });
                // if the message is written successfully, log it and increment `i`
                console.log(`Produced ${index} data ${JSON.stringify(producedData)}`);
                index++;
            } catch (err) {
                console.error("could not write message " + err);
                clearInterval(refreshIntervalId);
            }
        } else {
            console.log("Done");
            clearInterval(refreshIntervalId);
        }
    }, 1000);
}

getRandom = (name = "Sample", count = 0) => {
    const randomArray = Array.from({ length: count }, (_, i) => name + ' ' + (i + 1));
    const random = Math.floor(Math.random() * randomArray.length);
    return randomArray[random];
}

getRandomAmount = () => {
    return parseFloat(`${(Math.floor(Math.random() * 100) + 50)}.${(Math.floor(Math.random() * 50) + 10)}`);
}

function generateRandomDate() {
    const random = getRandomDate(new Date('2020-01-01'), new Date('2021-10-01'))
    return new Date(random);
}

function getRandomDate(from, to) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    const dateTime = new Date(fromTime + Math.random() * (toTime - fromTime));
    return moment(dateTime).format('YYYY-MM-DD');
}

randomDate = (start, end, startHour, endHour) => {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}

produce();
// console.log(generateRandomDate());