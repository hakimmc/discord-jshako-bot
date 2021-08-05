const Discord = require('discord.js');
module.exports = {
    name: "invite",
    aliases: ["invite"],
    description: "",
    usage: "invite",
    ownerOnly: false,
    run: async (message,args,client) => {      
      var normal = message.author.id;
       var kisi2 = args[0];


    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok'); 
    //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);

    var kişi = message.mentions.users.first()

if(!kişi){
  
  
  if(kisi2){
    message.channel.createInvite({maxAge: 100}).then(invite => {
      
      
      let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.guild} adlı sunucuya ${message.author} tarafından davet edildiniz!`);
    
          message.author.id = args[0];
          message.author.send(embed).catch(error=>{

            let hata = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
            .setDescription("```"+error+"```")
            return message.channel.send(hata).then(msg => msg.delete({ timeout: 1000*3 }).catch(console.error));;
          })
          message.author.send(`${invite}`).catch(error=>{

            let hata = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
            .setDescription("```"+error+"```")
            return message.channel.send(hata).then(msg => msg.delete({ timeout: 1000*3 }).catch(console.error));;
          })
          message.author.id = normal;
      
      message.channel.send("Davet başarıyla gönderildi!");

    })
  }
  else{
  
  message.channel.createInvite({maxAge: 100}).then(invite => {
    
    message.channel.send(`${invite}`);
  
  });}
}
else{

  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${message.guild} adlı sunucuya ${message.author} tarafından davet edildiniz!`);
    kişi.send(embed).catch(error=>{

      let hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
      .setDescription("```"+error+"```")
      return message.channel.send(hata).then(msg => msg.delete({ timeout: 1000*3 }).catch(console.error));;
    })
    kişi.send(`${invite}`).catch(error=>{

      let hata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
      .setDescription("```"+error+"```")
      return message.channel.send(hata).then(msg => msg.delete({ timeout: 1000*3 }).catch(console.error));
    })
    message.channel.send("Davet başarıyla gönderildi!");

    
})}

}}