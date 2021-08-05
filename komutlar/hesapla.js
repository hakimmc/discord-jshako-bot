const Discord = require('discord.js');
const math = require('mathjs');
module.exports = {
    name: "hesapla",
    aliases: ["hesapla","h"],
    description: "",
    usage: "hesapla",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{
        if(!args[0]) return message.channel.send('Lütfen sorunu yaz!');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Lütfen geçerli bir soru gir!')
        }

        const embed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle('Hesap Makinesi')
        .addField('Soru', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Cevap', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);
    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }
    }
}