module.exports = {
    
    name: 'avatar',
    description: 'avatar',
    execute(message, args) {
        
        message.channel.send(message.author.displayAvatarURL());
    },

};




