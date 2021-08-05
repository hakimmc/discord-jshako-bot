const Discord = require('discord.js');
module.exports = {
    name: "radyo-yardım",
    aliases: ["radyo-yardım"],
    description: "",
    usage: "radyo-yardım",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{

        const ayarlar = require("../ayarlar.json");
        const prefix= ayarlar.prefix;
        const id = ayarlar.ID[0];
        const id1 = ayarlar.ID[1];

        let helpembed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***RADYO KOMUTLARI***")
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`
        
        \`Radyo komutunda 186 radyo istasyonu vardır\nİsimlerini öğrenmek için ${prefix}radyo yazıp listeyi görüntüleyebilirsiniz\`
        
        \`${prefix}radyo [1-187]\`  ➖➖ *Radyo dinlemeni sağlar*
        \`${prefix}radyo stop\`  ➖➖ *Radyoyu durdurur*
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