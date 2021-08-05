const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const weather = require('weather-js');

var lele = ayarlar.prefix;
module.exports = {
    name: "hava",
    aliases: ["hava"],
    description: "",
    usage: "hava",
    ownerOnly: false,
    run: async (message,client) => {

      try{

  let sender = message.author;
  let cont = message.content.slice(lele.length).split(" ");
  let args = cont.slice(1);

  var msg = message.content.toLowerCase();
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
          

    if (result === undefined || result.length === 0) {
      message.channel.send('**Lütfen geçerli bir konum belirt**')
      return;
  }
      var current = result[0].current;
      var location = result[0].location;

    

      const embed = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor("#000011")
          .addField('Saat dilimi',`UTC${location.timezone}`, true)
          .addField('Derece tipi',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hissedilen sıcaklık', `${current.feelslike} Derece`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)

          
          message.channel.send(embed);

  });
}catch(error){

  let hata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
  .setDescription("```"+error+"```")
  return message.channel.send(hata);
}
}}