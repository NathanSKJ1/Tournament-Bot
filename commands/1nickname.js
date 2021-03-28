module.exports = {
    
    name: 'nickname',
    description: 'change nickname of member',
    execute(message, args) {
        const user = message.mentions.users.first();

        const tate = '417953871613263874';
        
        if(user == tate) {
        message.guild.member(user.id).setNickname(args[1]);
        }else{
            message.channel.send('ONLY WORKS ON TATE');

        }
    },  

};