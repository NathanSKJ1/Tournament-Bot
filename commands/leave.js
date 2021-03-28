module.exports = {
    
    name: 'leave',
    description: 'Leaves the voice channel',
    execute(message, args) {
        message.channel.send('Leaving');

        const voiceChannel = message.member.voice.channel;

        voiceChannel.leave();
        
    },

};
