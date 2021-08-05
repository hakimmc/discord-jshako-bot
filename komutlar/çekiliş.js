/*const Discord = require('discord.js');
const { duration } = require('moment');
const moment = require('moment');
const ms = require('ms')
module.exports = {
    name: "çekiliş",
    aliases: ["çekiliş"],
    description: "",
    usage: "çekiliş",
    ownerOnly: false,
    run: async (message,args,client) => {
    try{    

      if(!args[0]) return message.channel.send("Lütfen çekilişle verilecek hediyeyi yazınız.");
      if(!args[1]) return message.channel.send("Lütfen süreyi yazınız.(saat cinsinden)");

      var kişiye = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**Ödül\n**"+args[0]+"**\nSüre\n**"+args[1])
    .setFooter(message.author.username , message.author.avatarURL);

    message.channel.send(kişiye).then(msg=>{
      msg.react("🎉");


      setTimeout(() => {
        let users = msg.reactions.get("🎉").users
        let list = users.array().filter(u => u.id !== msg.author.id !== client.user.id);
        let gFilter = list[Math.floor(Math.random() * list.length) + 0]
        let endEmbed = new Discord.MessageEmbed()
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .setTitle("***ÇEKİLİŞ BİTTİ***")
        .setColor("RANDOM")
        .addField('Çekiliş Bitti !🎉',`Kazanan : ${gFilter} \nBitiş zamanı :`)
        msg.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

        var embedLel = new Discord.RichEmbed()
         .setColor("#f558c9")
         .setDescription("Ödülünü Moderatörleri Etiketleyerek Alabilirsin!").setFooter("(www.minecraft-turkiye.com)")
     msg.guild.channels.find("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
 }, 10*1000);
    })

}catch(error){

    let hata = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
    .setDescription("```"+error+"```")
    return message.channel.send(hata);
}
}}*/