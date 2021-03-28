module.exports = {
    
    name: 'kick',
    description: 'Kick Command',
    execute(message, args) {
        message.channel.send('Ur Gettin Kicked!');

        const user = message.mentions.users.first();

        message.guild.member(user.id).kick();


    },

};