const axios = require('axios');

module.exports = {
    name: 'view',
    description: 'Increase views on a YouTube video.',
    execute(message, args) {
        const videoId = args[0]; // YouTube video ID
        const loopCount = parseInt(args[1]) || 1; // Number of times to loop the video (default: 1)

        for (let i = 0; i < loopCount; i++) {
            axios.get(`https://www.youtube.com/watch?v=${videoId}`)
                .then(response => {
                    console.log(`View ${i + 1} completed for video ${videoId}`);
                })
                .catch(error => {
                    console.error(`Error increasing views for video ${videoId}: ${error.message}`);
                });
        }

        message.channel.send(`Successfully initiated ${loopCount} views for video ${videoId}.`);
    },
};
