const Discord = require('discord.js');
module.exports = {
    name: "ban",
    aliases: ["ban"],
    description: "",
    usage: "ban",
    ownerOnly: false,
    run: async (message,args,client) => {

      try{

      let embed1 = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
      //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);

  var guild = message.guild;
  var banlayan = message.author.tag;
  if (!args[0]) return message.channel.send("Banlayacağım kişiyi etiketlemen gerek!");
  var kisi = message.mentions.users.first() || guild.members.cache.find(u => u.username === args[0]) || guild.members.cache.get(args[0]);
  var neden = args.slice(1).join(' ')
    var neden2 = neden ? neden : "Neden belirtilmemiş";

 
    if(!kisi) return message.channel.send("Birini etiketlemediniz veya etiketlediğiniz kişi sunucuda yok!");
    if (!message.guild.member(kisi).bannable) return message.reply(`Bu kişi banlanamaz!`);

      
 var kişiye = new Discord.MessageEmbed()
 .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField(`**${guild}**`+` adlı sunucudan` ,`${message.author} tarafından banlandınız.\n\nNedeni: ${neden2}`)

 var kanala = new Discord.MessageEmbed()
    .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField("Banlanan kişi ve sebebi", `Banlanan kişi: **${kisi}**\nBanlanma nedeni: ${neden2}`)
    
 
  await kisi.send(kişiye)
  await guild.members.ban(kisi, { reason: neden2});
 
  message.delete();

      
 if(!message.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste")){
            message.delete();
            message.guild.channels.create("kick-ban-unban-liste", {type:'text',}).then(msg => {
              msg.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste").send(kanala);
            })
        }
      else{
        message.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste").send(kanala);
      }
    }catch(error){

      let hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
      .setDescription("```"+error+"```")
      return message.channel.send(hata);
  }

}}