
const Discord = require("discord.js");
module.exports = {
    name: "kapışma",
    aliases: ["kapışma",],
    description: "kapışma",
    usage: "kapışma",
    ownerOnly: false,
    run: async (message,args,client) => {

        try{

        var resim=[
            "https://1.bp.blogspot.com/-L61RKJ94Wcg/Xpg4z1k-_aI/AAAAAAAAKvg/hGrZvJlOP4QUNDKYAF8Mjs7OAP7pCfg1ACNcBGAsYHQ/s200/zar1.png",
            "https://1.bp.blogspot.com/-DwMVIPYvthw/Xpg547hz7nI/AAAAAAAAKv0/qwaEcefdXqAtN-dWS_HAlpRT2d8HPt83gCNcBGAsYHQ/s200/zar2.png",
            "https://1.bp.blogspot.com/-iTzF7GTURFY/Xpg54p-WbLI/AAAAAAAAKvs/FZy8roRNkO0ANPKoNdxLrjQv2Y-cBYqRACNcBGAsYHQ/s200/zar3.png",
            "https://1.bp.blogspot.com/-Qm8Z-kUyjjU/Xpg541tE5UI/AAAAAAAAKvw/FP5W_LREYoo0tg5Jz7kE1pK9bEM6nqTZACNcBGAsYHQ/s200/zar4.png",
            "https://1.bp.blogspot.com/-S57QyxGfbMo/Xpg55SLbY5I/AAAAAAAAKv4/lg1TvFMRXtoVnwo8wR2zHfK1FvIRLaTDwCNcBGAsYHQ/s200/zar5.png",
            "https://1.bp.blogspot.com/-pJee7zELvEQ/Xpg55uWlilI/AAAAAAAAKv8/eHQ8f3HXwFY63S8Z8qtVI9VM73pzPq_8QCNcBGAsYHQ/s200/zar6.png"
        ]

        var random = Math.floor(Math.random()*(6));
        var random2 = Math.floor(Math.random()*(6));


        var s = 0;
        var kisi = message.mentions.users.first();
        if(!kisi) return message.channel.send("Lütfen kapışmak istediğiniz arkadaşınızı ekleyin");
        if(kisi===message.author){
            const embed12 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Cidden kendinle mi kapışmak istiyorsun? Mal herif.***')
        message.channel.send(embed12)}
        if(kisi===client.user){const embed12 = new Discord.MessageEmbed()
                                .setColor('#000011')
                                .setTitle('***Lan aptal bir botla nasıl oynamayı düşünüyorsun beynini siktiğim.***')
           return message.channel.send(embed12)}
            
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author}, ${kisi} kişisine kapışma teklifi etti . ${kisi} Kabul ediyor musun ?`)
        .setColor("#000011")).then(msg=>{
            msg.react("✅");
            msg.react("❌");
            client.on("messageReactionAdd",(reaction,user)=>{
                if(s==0){
                    if(reaction.message.id==msg.id){
                        if(user.id==kisi.id){
                            if(reaction.emoji.name=="✅"){
                                msg.edit(new Discord.MessageEmbed()
                                .setDescription(`${kisi} teklifi kabul etti! Zar atmaya başlanıyor... `)
                                .setColor("GREEN"))
                                s++;
                                var y=0; 
                                const embed12 = new Discord.MessageEmbed()
                                    .setColor('#000011')
                                    .setTitle('***Zar atmak için emojiye tıkla***')
                                    .setDescription("Öncelik teklif eden taraftadır.")                                    
                                    message.channel.send(embed12).then(msg=>{
                                    msg.react("🎲");
                                    client.on("messageReactionAdd",(reaction,user)=>{
                                    if(y==0){
                                        if(reaction.message.id==msg.id){
                                            if(user.id==message.author.id){
                                                if(reaction.emoji.name=="🎲"){
                                                    y++;
                                                    
                                                    const embed12 = new Discord.MessageEmbed()
                                                    .setColor('#000011')
                                                    .setDescription("<@"+message.author.id+"> "+(random+1)+" attı")
                                                    .setImage(resim[random])
                                                    message.channel.send(embed12)
                                                }}}}})
                                    client.on("messageReactionAdd",(reaction,user)=>{                 
                                    if(y==1){
                                        if(reaction.message.id==msg.id){ 
                                            if(user.id==kisi.id){
                                                if(reaction.emoji.name=="🎲"){
                                                    y++;
                                                    const embed12 = new Discord.MessageEmbed()
                                                    .setColor('#000011')
                                                    .setDescription("***<@"+kisi.id+"> "+(random2+1)+" attı***")
                                                    .setImage(resim[random2])
                                                    message.channel.send(embed12)

                                                    if(random>random2){
                                                        const embed12 = new Discord.MessageEmbed()
                                                        .setColor('GREEN')
                                                        .setDescription(`***${message.author} kazandı!***`)
                                                        message.channel.send(embed12)
                                                        }
                                                    else if(random<random2){
                                                        const embed12 = new Discord.MessageEmbed()
                                                        .setColor('GREEN')
                                                        .setDescription(`***${kisi} kazandı!***`)
                                                        message.channel.send(embed12)
                                                        }
                                                        else{
                                                            const embed12 = new Discord.MessageEmbed()
                                                            .setColor('#000011')
                                                            .setDescription('***Durum berabere***')
                                                            message.channel.send(embed12)
                                                            }
                                                    }}}}})
                                        if(kisi===message.author){
                                        const embed12 = new Discord.MessageEmbed()
                                        .setColor('#000011')
                                        .setDescription('***Al egonu tatmin et aptal piç.***') 
                                        message.channel.send(embed12)                    
                                        }                                            
                                    }
                                )
                            }   
                            else if(reaction.emoji.name=="❌"){
                                msg.edit(new Discord.MessageEmbed()
                                .setTitle(`***${kisi} teklifi red etti.Birazcık korktu galiba :d ***`)
                                .setColor("RED"))
                                s++;
                            }
                        }
                    }
                }
            });
        })
    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }
    }
}

