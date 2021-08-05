const Discord = require('discord.js');
module.exports = {
    name: "yardım",
    aliases: ["yardım"],
    description: "",
    usage: "yardım",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{

        const ayarlar = require("../ayarlar.json");
        const prefix= ayarlar.prefix;
        const id = ayarlar.ID[0];
        const id1 = ayarlar.ID[1];

        let helpembed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***GENEL KOMUTLAR***")
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`
        \`Sunucudaki Prefix'i öğrenmek için botu etiketleyebilir veya prefix yazıp öğrenebilirsiniz\`
        
        \`${prefix}yardım\`  ➖➖ *Botun yardım penceresini açar*
        \`${prefix}avatar [@kullanıcı]\`  ➖➖ *Birini etiketlediğinizde etiketlediğiniz kişinin avatarını; etiketlemediğinizde de kendi avatarınızı gösterir*
        \`${prefix}triggered [@kullanıcı]\`  ➖➖ *Avatara triggered efekti koyar [avatardaki sistem geçerlidir]*
        \`${prefix}ascii\`  ➖➖ *Yazdığınız yazıyı şekilli yapar*
        \`${prefix}ping\`  ➖➖ *Botun pingini gösterir*
        \`${prefix}meme\`  ➖➖ *Güncel Reddit meme'lerini gösterir*
        \`${prefix}zar\`  ➖➖ *Zar atar*
        \`${prefix}kapışma [@kullanıcı]\`  ➖➖ *Biriyle karşılıklı zar atmanı  sağlar*
        \`${prefix}oyun-yardım\`  ➖➖ *Oyun yardım penceresini açar*
        \`${prefix}müzik-yardım\`  ➖➖ *Müzik yardım penceresini açar*
        \`${prefix}radyo-yardım\`  ➖➖ *Radyo yardım penceresini açar*
        \`${prefix}disconnect\`  \`${prefix}dc\`  ➖➖ *Botu ses kanalından atar*
        \`${prefix}hesapla [işlem]\`  ➖➖ *Girilen matematiksel işlemi yapar*
        \`${prefix}hesap-yardım\`  ➖➖ *Matematiksel hesap için yardım penceresi açar*
        \`${prefix}hava [şehir]\`  ➖➖ *Belirtilen şehrin hava durumunu gösterir*

        
        ***ADMIN'LERE ÖZEL KOMUTLAR***
        
        \`${prefix}ban [@kullanıcı]\`  ➖➖ *Bir kullanıcıyı sunucudan banlar*
        \`${prefix}block [@kullanıcı]\`  ➖➖ *Bir kullanıcıyı sunucuda blocklar*
        \`${prefix}unban [@kullanıcı]\`  ➖➖ *Bir kullanıcının banını açar*
        \`${prefix}unblock [@kullanıcı]\`  ➖➖ *Bir kullanıcının sunucudaki block'unu kaldırır*
        \`${prefix}delete [kanal-ismi]\`  ➖➖ *Bir ses kanalını veya mesaj kanalını siler*
        \`${prefix}invite [@kullanıcı]\`  ➖➖ *Eğer birini etiketlersen sunucunun davet linkini o kişiye atar, yoksa sohbete atar*
        \`${prefix}kick [@kullanıcı]\`  ➖➖ *Bir kullanıcıyı sunucudan kickler*
        \`${prefix}text [kanal-ismi]\`  ➖➖ *Bir mesaj kanalı oluşturur*
        \`${prefix}voice [kanal-ismi]\`  ➖➖ *Bir ses kanalı oluşturur*        
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