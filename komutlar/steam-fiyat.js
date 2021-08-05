const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

module.exports = {
    name: "steam-fiyat",
    aliases: ["steam-fiyat"],
    description: "",
    usage: "steam-fiyat",
    ownerOnly: false,
    run: async (message,args,client) => {

        let error_embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("***Bu Oyun Bulunamadı!***")
      .setDescription("```"+"Lütfen oyun ismini doğru yazınız"+"```")
    let game = args[0];
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if(!game){return msg.channel.send("Lütfen bir oyun adı yazınız!")};
    provider.search(game).then(result => {
    provider.detail((result[0].id), "turkey", "tr").catch(e => {
        ms
    }).then(results => {
        console.log(results)
    const embed = new Discord.MessageEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("RANDOM")
    .setTitle(result[0].name)
    .addField(`Oyunun ID'si`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyatı', `Normal Fiyat **${results.priceData.initialPrice}** TL
    İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
  .setColor("RANDOM")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.channel.send('Bir hata oluştu veya `' + game + '` adlı oyun bulunamadı')
    })
})
})
}}
