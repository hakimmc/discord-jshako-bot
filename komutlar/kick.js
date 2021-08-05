const Discord = require('discord.js');
module.exports = {
    name: "kick",
    aliases: ["kick"],
    description: "",
    usage: "kick",
    ownerOnly: false,
    run: async (message,args,client) => {
            
        try{

        let embed1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
        //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);
        
        
        var kisi = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
      
    if(!kisi) return message.channel.send("Birini etiketlemediniz veya etiketlediğiniz kişi sunucuda yok!");
    if (!message.guild.member(kisi).kickable) return message.reply(`Bu kişi kicklenemez!`);

    var reason =  args.slice(1).join(' ');
    var guild = message.guild;
     message.guild.member(kisi).kick(reason);
    var reason2 = reason ? reason : "Neden belirtilmemiş";
    
    var embedv1 = new Discord.MessageEmbed()
    .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField("Kicklenen kişi ve sebebi", `Kicklenen kişi: **${kisi}**\nKicklenme nedeni: ${reason2}`)

    var kişiye = new Discord.MessageEmbed()
    .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField(`**${guild}**`+` adlı sunucudan` ,`${message.author} tarafından kicklendiniz.\nNedeni: ${reason2}`)


    await kisi.send(kişiye)
      
      message.delete();
      
      if(!message.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste")){
            message.delete();
            message.guild.channels.create("kick-ban-unban-liste", {type:'text'}).then(msg => {
              msg.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste").send(embedv1);
            })
        }
      else{
        message.guild.channels.cache.find(channel => channel.name === "kick-ban-unban-liste").send(embedv1);
      }
    }catch(error){

      let hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
      .setDescription("```"+error+"```")
      return message.channel.send(hata);
  }
}}