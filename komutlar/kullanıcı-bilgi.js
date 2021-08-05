const Discord = require('discord.js');
const moment = require("moment")
require('moment-duration-format');
module.exports = {
    name: "kullanıcı-bilgi",
    aliases: ["kullanıcı-bilgi"],
    description: "",
    usage: "kullanıcı-bilgi",
    ownerOnly: false,
    run: async (message,args,client) => {

  if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

  var user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author; message.author;
  const member = message.guild.member(user)
  let kisi = client.users.cache.get(member.id);

moment.locale('tr-TR');
      var userRoles
        if (member.roles.size > 1) {
            userRoles = `${member.roles.array().sort((a, b) => a.comparePositionTo(b)).slice(1).reverse().map(role => `**\`${role.name}\`**`)}`
          } else {
            userRoles = '`Bulunmuyor`'
              }
             
  function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };

  if (!member){member=message.author}


  const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL())
      .setThumbnail(user.avatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#000011' : member.displayHexColor)
      .addField('Üye bilgisi:',`**Kullanıcı İsmi:** ${member.displayName}\n**Katılım Tarihi:** ${moment.utc(member.joinedAt).format('Do MMMM YYYY')} - ${checkDays(member.joinedAt)} \n**Rolleri:** ${member.roles.cache.sort((b, a) => { return a.position - b.position }).map(role => `${role}`).join(" | ")}`, false)        .addField('Kullanıcı bilgisi:',  `\n**Tag**: ${member.user.tag}\n**ID:** ${member.user.id}\n**Kuruluş Tarihi**: ${moment.utc(user.createdAt).format('Do MMMM YYYY')} - ${checkDays(user.createdAt)}`, false)
      .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
      .setTimestamp()
     return message.channel.send(embed)

    
                               
            }}