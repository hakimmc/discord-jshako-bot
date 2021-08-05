const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: "mute",
    aliases: ["mute"],
    description: "",
    usage: "mute",
    ownerOnly: false,
    run: async (message,args,client) => {
      try{
  //forumgamer
  const mb = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(client.user.username)
    .setFooter(`JsHako -- ${message.guild.name}`)  

  const emb = new Discord.MessageEmbed()
  .setThumbnail(client.user.displayAvatarURL())
  .setTitle(client.user.username)
  .setFooter(`JsHako -- ${message.guild.name}`)

  /*if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send(
      mb.setDescription(`Bu komutu kullanabilmek için yetkiniz yetersiz.`)
    );
*/
  let forumgamer = message.mentions.users.first();
  if (!args[0])
    return message.channel.send(
      mb.setDescription(`Bir kişiyi etiketlemelisin.`)
    );
  if (!forumgamer)
    return message.channel.send(
      mb.setDescription(`**${args[0]}**, kişisini sunucuda bulamıyorum.`)
    );
  if (
    message.guild.members.cache.get(forumgamer.id).roles.highest.position >
    message.member.roles.highest.position
  )
    return message.channel.send(
      mb.setDescription(
        `Bu kişinin rolü/rolleri, senin rolün/rollerinden daha yüksek.`
      )
    );
  if (!message.guild.members.cache.get(forumgamer.id).voice.channel)
    return message.channel.send(
      mb.setDescription(`Bu kullanıcı seslide değil.`)
    );
  if (!args[1])
    return message.channel.send(
      mb.setDescription(`Ne kadar süre susturacağımı belirtmelisin.`)
    );
  let süre = args[1];

  let sebep1 = args.join(" ").slice(args[1].length + args[0].length + 1);
  let sebep = sebep1 ? sebep1 : "Bir sebep girilmemiş.";

  let muted1 = message.guild.members.cache.get(forumgamer.id)
    muted1.setMute(true)
    .then(() =>
      message.channel.send(
        mb
          .setDescription(`Birisi ses kanalı üzerinden susturuldu!`)
          .addField(`İşlemi yapan:`, message.author, true)
          .addField(`İşlem yapılan:`, forumgamer.tag, true)
          .addField(
            `Süre:`,
            süre
              .replace(/d/, " gün")
              .replace(/s/, " saniye")
              .replace(/m/, " dakika")
              .replace(/h/, " saat"),
            true
          )
          .addField(`Sebep:`, sebep)
      )
    );
  setTimeout(async () => {
    let muted2 = message.guild.members.cache.get(forumgamer.id)
    muted2.setMute(false)
      .then(() =>
        message.channel.send(
          emb
            .setDescription(`Susturulma süresi bitti:`)
            .addField(`İşlemi yapan:`, message.author, true)
            .addField(`İşlem yapılan:`, forumgamer.tag, true)
            .addField(
              `Süre:`,
              süre
                .replace(/d/, " gün")
                .replace(/s/, " saniye")
                .replace(/m/, " dakika")
                .replace(/h/, " saat"),
              true
            )
            .addField(`Sebep:`, sebep)
        )
      );
  }, ms(süre));
}catch(error){

  let hata = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
  .setDescription("```"+error+"```")
  return message.channel.send(hata);
}
}}