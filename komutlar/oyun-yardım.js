const Discord = require('discord.js');
module.exports = {
    name: "oyun-yardım",
    aliases: ["oyun-yardım"],
    description: "",
    usage: "oyun-yardım",
    ownerOnly: false,
    run: async (message,args,client) => {
        try{

        const ayarlar = require("../ayarlar.json");
        const prefix= ayarlar.prefix;
        const id = ayarlar.ID[0];
        const id1 = ayarlar.ID[1];

        let helpembed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***OYUN KOMUTLARI***")
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`
        \`${prefix}yılan\`  ➖➖ *Eski yılan oyunu oynamanı sağlar*
        \`${prefix}connect4\`  ➖➖ *Arkadaşlarınla beraber Connect4 oynamanı sağlar*
        \`${prefix}satranç\`  ➖➖ *Bir bilgisayarla satranç oynamanı sağlar*
        `)
        .addField("***YAPIMCI:***",`
        <@${id}> 
        `)
        .addField("***BENİ DİSCORD SUNUCUNA ÇAĞIRMAK İÇİN TIKLA:***",`(https://discord.com/oauth2/authorize?client_id=803392725281800242&scope=bot&permissions=2147483647)
        `)
        message.channel.send(helpembed)
    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }

    }
}