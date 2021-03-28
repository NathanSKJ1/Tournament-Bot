module.exports = {
    name: 'bonk',
    description: 'Bonk Command',
    args: true,
    execute(message, args) {

        const user = message.mentions.users.first();

        const nathan = '313044043359846421';
        
        const jack = '549975837672472596';

        if(message.author == jack) {

            message.guild.member(jack).voice.setChannel("565681555075498033");

        }
        else if(user != nathan) {

        message.channel.send('LAD UR GETTIN BONKED!');

        user.send('https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755 YOU HAVE BEEN BONKED! GO TO HORNY JAIL!');

        message.guild.member(user.id).voice.setChannel("565681555075498033");
        }
    },

};