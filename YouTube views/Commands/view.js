module.exports = {
    name: 'view',
    description: 'Simulates increasing views for content.',
    execute(message, args) {
        // Check if the user has provided a content name
        if (!args[0]) {
            return message.reply('Please provide a valid content name.');
        }

        // Get the content name
        const contentName = args.join(' ');

        // Increase view count for the content
        increaseViews(contentName);

        // Respond to the user
        message.reply(`Views increased for ${contentName}!`);
    },
};

