const Discord = require('discord.js');
module.exports = {
    name: "delete",
    aliases: ["delete"],
    description: "",
    usage: "delete",
    ownerOnly: false,
    run: async (message,args,client) => {
      try{

    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);
    
      let text=message.content.slice(9)

      const { guild } = message
      const kanal = guild.channels.cache
        .filter((channel) => {return channel.name === text
        })
        .first()


        if (!kanal) {
          return message.channel.send("**"+text+"** adında bir kanal yok!")
        }
        if(kanal.type === 'text'){
        if(message.channel.name === text){
          return message.channel.send("Silmek istediğiniz **"+text+"** kanalına silme komutunu yazamazsınız.")
        }
      }
      if(kanal.type === 'voice'){
        if(message.guild.members.cache.get(message.author.id).voice.channel === kanal) return message.channel.send("Silmek istediğiniz **"+text+"** sesli kanalında aktif iken silme komutunu yazamazsınız!");
        let size=kanal.members.size;
        if(size>0) return message.channel.send("Silmek istediğiniz **"+text+"** kanalında aktif üyeler var!")
      }
      message.delete();
      kanal.delete()
  
      message.channel.send("**"+text+'** kanalı silindi!')
    }
    catch(error){

      let hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
      .setDescription("```"+error+"```")
      return message.channel.send(hata);
    }
  }
  }