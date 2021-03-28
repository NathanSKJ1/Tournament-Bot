module.exports = {
    
    name: 'unmute',
    description: 'Server unMute User',
    execute(message, args) {
        const user = message.mentions.users.first();

        const jack = '549975837672472596';

        var counter = 0;

        if(message.author == jack) {
            while(counter <= 10) {
                counter++;
                message.guild.member(jack).voice.setChannel("565681555075498033");
                message.guild.member(jack).voice.setChannel("810526683920728105");
                setTimeout(function(){
                }, 10000);

            }

        }else{
        message.guild.member(user.id).voice.setMute(false);
        }
    },

};