const Discord = require('discord.js');
module.exports = {
    name: "voice",
    aliases: ["voice"],
    description: "",
    usage: "voice",
    ownerOnly: false,
    run: async (message,args,client) => {

      try{
    let kanal = args.slice(0).join(' ');
    
    let guild = message.guild;

    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);
    
    if (kanal.length < 1) return message.channel.send("<@"+message.author.id+'> Lütfen oluşturacağım kanalın adını yaz.!!');
    message.delete();
  guild.channels.create(kanal, {type: 'voice',});
  message.channel.send("**"+kanal+"** ses kanalı Oluşturuldu!");
}catch(error){

  let hata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
  .setDescription("```"+error+"```")
  return message.channel.send(hata);
}
      
    }}