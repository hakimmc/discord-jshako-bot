const Discord = require('discord.js');
module.exports = {
    name: "hesap-yardım",
    aliases: ["hesap-yardım"],
    description: "",
    usage: "hesap-yardım",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{

        const ayarlar = require("../ayarlar.json");
        const prefix= ayarlar.prefix;
        const id = ayarlar.ID[0];
        const id1 = ayarlar.ID[1];

        let helpembed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***HESAPLAMA KOMUTLARI***")
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`
        \`h-hesapla log(10000, 10)  // 4\`  ➖➖  *Logaritmik işlem yapmanızı sağlar*
        \`h-hesapla sqrt(-4)  // 2i\`  ➖➖  *Karekök almanızı sağlar*
        \`h-hesapla pow(2,3)  // 8\`  ➖➖  *Üslü işlem yapmanızı sağlar*
        \`h-hesapla derivative('x^2 + x', 'x')  // 2x + 1\`  ➖➖  *Türev almanızı sağlar*
        \`h-hesapla ('12 / (2.3 + 0.7)')  // 4\`  ➖➖  *Basit 4 işlem yapmanızı sağlar*
        \`h-hesapla ('12.7 cm to inch')  // 5 inch\`  ➖➖  *Cm, Km, M, A, ohm, kohm, W gibi birimlerin dönüşümünü yapmanızı sağlar *
        \`h-hesapla ('sin(45 deg) ^ 2')  // 0.5\`  ➖➖  *Trigonometrik işlem yapmanızı sağlar*
        \`h-hesapla ('9 / 3 + 2i')  // 3 + 2i\`  ➖➖  *İrrasyonel işlemler yapmanızı sağlar*
        \`h-hesapla ('det([-1, 2; 3, 1])')  // -7\`  ➖➖  *Matrislerin determinantını almanızı sağlar*
        \`h-hesapla ('25V / 5A')  // 5 ohm\`  ➖➖  *Cm, Km, M, A, ohm, kohm, W gibi birimlerle işlem yapmanızı sağlar *
        \`h-hesapla [2,3;2,1]*[3,1;4,5]  //[[18, 17], [10, 7]]\`  ➖➖  *Matrislerle işlem yapmanı sağlar*
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