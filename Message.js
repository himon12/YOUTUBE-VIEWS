module.exports = {
    name: 'message',
    execute(message) {
        console.log(`Received message: ${message.content}`);
    },
};
