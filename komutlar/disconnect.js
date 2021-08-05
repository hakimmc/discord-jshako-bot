const Discord = require('discord.js');
module.exports = {
    name: "disconnect",
    aliases: ["disconnect","dc"],
    description: "",
    usage: "disconnect",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{
        if(!message.guild.members.cache.get(client.user.id).voice.channel) return message.channel.send("Zaten ses kanalında değilim!");
        else{
            message.react("👋");
            return message.member.voice.channel.leave()
        }
    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }

    }}