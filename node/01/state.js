const os = require('os');
const mem = os.freemem() / os.totalmem * 100;
module.exports = () => {
    const cpuStat = require('cpu-stat');
    cpuStat.usagePercent((err, percent) => {
        console.log(`CPU占用${percent}%`);
    });
}