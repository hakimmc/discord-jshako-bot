const Discord = require('discord.js');
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
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;



      message.channel.send(`🎉| **Çekilişin yapılacağı kanalın adını yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.cache.find(r => r.name === collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('🎉| **Çekilişin süresini belirle (1s, 1m, 1h, 1d, 1w)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(':heavy_multiplication_x:| **Böyle bir süre bilmiyorum :(**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('🎉| **Şimdi de ödülü yaz bakalım**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.MessageEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Ödül: ${title}** \n🎉'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.cache.find(r => r.name === room).send(' :heavy_check_mark: **ÇEKİLİŞ BAŞLADI** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                         
                       const user = m.reactions.cache.get("🎉").users.fetch();
                       var list = user.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.MessageEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
                       .addField('Çekiliş Bitti !🎉',`Kazanan : ${gFilter} \nBitiş zamanı :`)
                       .setTimestamp()
                     m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

                       var embedLel = new Discord.MessageEmbed()
                        .setColor("#f558c9")
                        .setDescription("Ödülünü Moderatörleri Etiketleyerek Alabilirsin!")
                    message.guild.channels.cache.find(r => r.name === room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
}catch(error){

    let hata = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
    .setDescription("```"+error+"```")
    return message.channel.send(hata);
}

}}