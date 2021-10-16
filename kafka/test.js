function nanoseconds(time) {
    if (!Array.isArray(time) || time.length !== 2) {
        throw new TypeError('expected an array from process.hrtime()');
    }
    return +time[0] * 1e9 + +time[1];
};

let index = 1;
var refreshIntervalId = setInterval(async (interval) => {
    if (index <= 100) {
        let messages = [];
        for (let i = 1; i <= 100; i++) {
            messages.push({
                value: nanoseconds(process.hrtime())
                // value: new Date().getMilliseconds()
            });
        }
        console.log(messages);
    } else {
        clearInterval(refreshIntervalId);
        console.log("Done");
    }
    index++;
}, 1000);
