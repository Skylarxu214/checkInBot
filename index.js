const cron = require('node-cron');

const task = cron.schedule('27 0 29 8 1', () => {
    console.log('node bot.js');
})

task.start();
