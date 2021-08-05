const canva = require('canvacord');
const Discord = require('discord.js');
const { changemymind } = require('canvacord');
module.exports = {
    name: "changemymind",
    aliases: ["changemymind"],
    description: "changemymind",
    usage: "changemymind",
    ownerOnly: false,
    run: async (message,args,client) => {
      try{
     
  	let text = args.join(" ");

        if(!args[0]) return message.channel.send('Provide a valid HEX code (#FF0000)');

        let image = await canva.changemymind(text);

        let changeMyMind = new Discord.MessageAttachment(image, "cmm.png")

        message.channel.send(changeMyMind);
      }
      catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }

}
  
  
};




        
