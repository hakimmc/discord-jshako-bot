const Discord = require('discord.js');
module.exports = {
    name: "müzik-yardım",
    aliases: ["müzik-yardım"],
    description: "",
    usage: "müzik-yardım",
    ownerOnly: false,
    run: async (message,args,client) => {
        try{

        const ayarlar = require("../ayarlar.json");
        const prefix= ayarlar.prefix;
        const id = ayarlar.ID[0];
        const id1 = ayarlar.ID[1];

        let helpembed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***MÜZİK KOMUTLARI***")
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`

        \`${prefix}yardım\`  ➖➖ *Botun yardım penceresini açar*
        \`${prefix}search\`  ➖➖ *Botun yardım penceresini açar*
        \`${prefix}play <Şarkı/Url>\`  \`${prefix}p\`  ➖➖ *Şarkı açar*
        \`${prefix}status\`  ➖➖ *Kuyruktaki sırayı söyler*
        \`${prefix}nowplay\`  \`${prefix}np\`  ➖➖ *O anda çalan şarkıyı gösterir*
        \`${prefix}pause\`  ➖➖ *Şarkıyı durdurur*
        \`${prefix}resume\`  ➖➖ *Şarkıya devam eder*
        \`${prefix}shuffle\`  \`${prefix}mix\`  ➖➖ *Playlisti karıştırır*
        \`${prefix}playskip\`  \`${prefix}ps\`  ➖➖ *Yazdığınız şarkıyı listeye ekler ve o anda çalmakta olan şarkıyı geçer*
        \`${prefix}autoplay\`  \`${prefix}ap\`  ➖➖ *Autoplay açıldığında açtığınız şarkıya yakın şarkıları sonsuz döngüde açar*
        \`${prefix}skip\`  \`${prefix}s\`  ➖➖ *Şarkıyı atlar*
        \`${prefix}stop\`  ➖➖ *Çalmakta olan bir şarkı var ise kapatır*
        \`${prefix}seek <Şarkı süresi>\`  ➖➖ *Şarkının herhangi bir saniyesine gider*
        \`${prefix}volume <Num.>\`  \`${prefix}vol\`  ➖➖ *Sesi değiştirir*
        \`${prefix}queue\`  \`${prefix}que\`  ➖➖ *Çalma listesini gösterir*
        \`${prefix}loop <0/1/2>\`  ➖➖ *Herhangi bir şarkıyı / listeyi   kapalı / şarkı / liste tekrarına alır*
        \`${prefix}jump <Liste Num.>\`  ➖➖ *Çalma listesindeki bir miktar şarkıyı atlar*
        \`${prefix}uptime\`  ➖➖ *Botun çalışma süresini gösterir*
        `)
        .addField("***FİLTRE KOMUTLARI:***",`
        \`${prefix}gate\` | \`${prefix}haas\` | \`${prefix}pulsator\` | \`${prefix}surrounding\` | \`${prefix}clear\` | \`${prefix}8d\` | \`${prefix}bassboost\` | \`${prefix}echo\` | \`${prefix}karaoke\` | \`${prefix}nightcore\` | \`${prefix}vaporwave\` | \`${prefix}flanger\` | \`${prefix}subboost\` | \`${prefix}phaser\` | \`${prefix}tremolo\` | \`${prefix}vibrato\` | \`${prefix}reverse\` | \`${prefix}treble\` | \`${prefix}clear\`   
        `)
        .addField("***DESTEKLENEN PLATFORMLAR:***",`
        \`Youtube\`, \`Soundcloud\`, [\`Ve daha fazlası..\`]\` (Spotify desteklenmemektedir!)\`
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