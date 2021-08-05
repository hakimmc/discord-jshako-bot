const Discord = require('discord.js');
module.exports = {
    name: "unban",
    aliases: ["unban"],
    description: "",
    usage: "unban",
    ownerOnly: false,
    run: async (message,args,client) => {

      try{
      
            

      var normal = message.author.id;

        let embed1 = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);

         var guild = message.guild;
 //if (!args[0]) return message.channel.send("Banını kaldıracağım kişinin ID'sini yazman gerek!");
 var kisi = args[0];
 var neden = args.slice(1).join(' ')
     var neden2 = neden ? neden : "Neden belirtilmemiş";


    var kanala = new Discord.MessageEmbed()
    .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField("Banı açılan kişi ve sebebi", `Banı açılan kişi: **<@${kisi}>**\nBan açılma nedeni: ${neden2}\n\nOtomatik olarak banı açılan kişiye invite yolladım.`)
    
    var kişiye = new Discord.MessageEmbed()
    .setColor("#000011")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addField(`**${guild}**`+` adlı sunucuda` ,`${message.author} tarafından banınız kaldırıldı. İsterseniz davet linkinden geri gelebilirsiniz.\n\nNedeni: ${neden2}`)     
 
await guild.members.unban(kisi, neden);
      
      message.author.id = args[0];
      message.author.send(kişiye);
      message.author.id = normal;

      
      message.channel.createInvite({maxAge: 0}).then(invite => {
      message.author.id = args[0];
    message.author.send(`${invite}`)
                  message.author.id = normal;

    
})
      
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