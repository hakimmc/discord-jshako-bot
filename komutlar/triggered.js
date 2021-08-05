const canva = require('canvacord');
const Discord = require('discord.js')
module.exports = {
    name: "triggered",
    aliases: ["triggered"],
    description: "triggered",
    usage: "triggered",
    ownerOnly: false,
    run: async (message,args,client) => {

      try{
      var kisi = message.mentions.users.first();
      if(!kisi){


    let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let image = await canva.trigger(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered);
  }
  else{
    let avatar = kisi.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
    let image = await canva.trigger(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered);
  }
}catch(error){

  let hata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
  .setDescription("```"+error+"```")
  return message.channel.send(hata);
}} 
}
