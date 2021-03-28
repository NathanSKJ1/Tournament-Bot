module.exports = {
    name: 'join',
    description: 'Join Voice Channel ',
    execute(message, args) {

        const { voice } = message.member;
        const path = require ('path');

        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'music1.mp3'))
        })
    },

};