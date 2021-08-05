//lib
const discord = require('discord.js');
const Discord = require("discord.js");
const client = new discord.Client();
const chalk = new require('chalk');
const ayarlar = require('./ayarlar.json');
const proton = require("proton-io")
const ytdl=require('ytdl-core')
const ascii=require('ascii-art');
const mysql = require("mysql");
const fs = require("fs");
const ffmpeg = require("ffmpeg");


var youtubeapi=ayarlar.youtubeapi;



//ayarlamalar


let komutlar= "./komutlar"

let event = "./olaylar"
let geliştiriciler = [ayarlar.ID[0],ayarlar.ID[1]]
let owner = true;
let defaultCommands= ["ping"]

const komutYukle = new proton(client,komutlar,event,geliştiriciler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

var prefix = ayarlar.prefix;
var token = ayarlar.token; 
                    
var speedargs;


client.on('message', async(msg) => {
    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})

////////////////////////////////////////////////
//müzik komutları{DİSTUBE--DİSCORDMUSİCPLAYER}//
////////////////////////////////////////////////

//////////////////////
//DİSCORDMUSİCPLAYER//
//////////////////////
///////////////////
//DİSTUBE DİSCORD//
///////////////////


const DisTube = require("distube");

const distube = new DisTube(client, {
    youtubeCookie: "",
    searchSongs: false, 
    emitNewSongOnly: true, 
    highWaterMark: 1 << 25, 
    leaveOnEmpty: true, 
    leaveOnFinish: false, 
    leaveOnStop: false,
    customFilters:
    {
        "clear": "dynaudnorm=f=200",
        "bassboost": "bass=g=20,dynaudnorm=f=200",
        "8d": "apulsator=hz=0.08",
        "vaporwave": "aresample=48000,asetrate=48000*0.8",
        "nightcore": "aresample=48000,asetrate=48000*1.25",
        "phaser": "aphaser=in_gain=0.4",
        "purebass": "bass=g=20,dynaudnorm=f=200,asubboost",
        "tremolo": "tremolo",
        "vibrato": "vibrato=f=6.5",
        "reverse": "areverse",
        "treble": "treble=g=5",
        "surrounding": "surround",
        "pulsator": "apulsator=hz=1",
        "subboost": "asubboost",
        "karaoke": "stereotools=mlev=0.03",
        "flanger": "flanger",
        "gate": "agate",
        "haas": "haas",
        "mcompand": "mcompand",
        "earwax": "earwax",
        "3d": "apulsator=hz=0.125",
    }
})
let stateswitch = false;
let emojis = [
    "✅", 
    "👌", 
    "👍",
    "🎵"
];
const filters = [
    "mcompand",
    "gate",
    "haas",
    "pulsator",
    "surrounding",
    "clear",
    "8d",
    "bassboost",
    "echo",
    "karaoke",
    "nightcore",
    "vaporwave",
    "flanger",
    "subboost",
    "phaser",
    "tremolo",
    "vibrato",
    "reverse",
    "purebass",
    "treble",
    "earwax",
    "3d",
];


client.on("message", async message => {

    try{
    if (message.author.bot) return; 
    if (!message.guild) return;     
        
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();                                          

///////////////
///KOMUTLAR////
///////////////


try{
        if(message.content.toLowerCase().startsWith("gangsta")){
            if (!message.guild.members.cache.get(message.author.id).voice.channel){ return }
            return distube.play(message,"https://youtu.be/hK20d1hWnqE");
        }
	if(message.content.toLowerCase().startsWith("aa")){
            if (!message.guild.members.cache.get(message.author.id).voice.channel){ return }
            return distube.play(message,"https://youtu.be/88ltrhiSSbU");
        }
        if(message.content.toLowerCase().startsWith("pu")){
            if (!message.guild.members.cache.get(message.author.id).voice.channel){ return }
            return distube.play(message,"https://youtu.be/gwkhbnqxHfo");
        }
        if(message.content.toLowerCase().startsWith("terliyorum")){
            if (!message.guild.members.cache.get(message.author.id).voice.channel){ return }
            return distube.play(message,"https://youtu.be/T548ExprxUw");
        }

    if (command === "search" ) {

        embedbuilder(client, message, "#000011", "***Aranıyor!***", args.join(" "))

        let result = await distube.search(args.join(" "));

        let searchresult = "";

        for (let i = 0; i <= result.length; i++) {
            try {
                searchresult += await `**${i + 1}**. ${result[i].name} - \`${result[i].formattedDuration}\`\n`;
            } catch {
                searchresult += await " ";
            }
        }
        let searchembed = await embedbuilder(client, message, "#000011", "***Mevcut Sıra!***", searchresult)

        let userinput;

        await searchembed.channel.awaitMessages(m => m.author.id == message.author.id, { max: 1, time: 60000, errors: ["time"], }).then(collected => {
            userinput = collected.first().content;
            if (isNaN(userinput)) {
                embedbuilder(client, message, "RED", "***Böyle bir numara yok***", "1 numarayı çalmaya başlıyorum!")
                userinput = 1;
            }
            if (Number(userinput) < 0 && Number(userinput) >= 15) {
                embedbuilder(client, message, "RED", "***Böyle bir numara yok***", "1 numarayı çalmaya başlıyorum!")
                userinput = 1;
            }
            searchembed.delete({ timeout: Number(client.ws.ping) });
        }).catch(() => { console.log(console.error); userinput = 404 });
        if (userinput === 404) {
            return embedbuilder(client, message, "RED", "***Bir şeyler yanlış gitti!***")
        }
        embedbuilder(client, message, "#000011", "Aranıyor!", `[${result[userinput - 1].name}](${result[userinput - 1].url})`, result[userinput - 1].thumbnail)
        return distube.play(message, result[userinput - 1].url)
    }
    else if (command == "status") {
        let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "RED", "***Oynayan hiçbir şey yok!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
       
        const status = `Volume: \`${queue.volume}\` | Filter: \`${queue.filter || "❌"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Tüm Liste" : "Bu şarkı" : "Kapalı"}\` | Autoplay: \`${queue.autoplay ? "Açık" : "Kapalı"}\``
        return embedbuilder(client, message, "#000011", "Mevcut durum:", status)
    }
    else if (command == "np" || command === "nowplay") {
        let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "RED", "***Oynayan hiçbir şey yok!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
       
        let cursong = queue.songs[0];

        return embedbuilder(client, message, "#000011", "***Şu anki şarkı!***", `[${cursong.name}](${cursong.url})\n\nOynatılıyor: \`${(Math.floor(queue.currentTime / 1000 / 60 * 100) / 100).toString().replace(".", ":")} dakika\`\n\nSüre: \`${cursong.formattedDuration}\``, cursong.thumbnail)
    }
    else if (command == "pause") {
        embedbuilder(client, message, "#000011", "***Durduruldu!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
        return distube.pause(message);
    }
    else if (command == "resume") {
        embedbuilder(client, message, "#000011", "***Devam ediyor!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
        return distube.resume(message);
    }
    else if (command == "shuffle" || command == "mix") {
        embedbuilder(client, message, "#000011", "***Liste karıştırıldı!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
        return distube.shuffle(message);
    }
    else if (command == "playskip" || command == "ps") {
        embedbuilder(client, message, "#000011", "***Şarkı aranıyor ve geçiliyor!***", args.join(" "))
        try {
        } catch (error) {
            console.error(error)
            
        }
        return distube.playSkip(message, args.join(" "));
    }
    else if (command == "autoplay" || command == "ap") {
        await embedbuilder(client, message, "#000011", `***Autoplay şuan ${distube.toggleAutoplay(message) ? "Açık" : "Kapalı"}!***`)
        await delay(1500);
        
        await message.channel.bulkDelete(2)
        return
        return;
    }
    else if (command === "uptime") {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let dakika = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        return embedbuilder(client, message, `#000011`, `ÇALIŞMA SÜRESİ:`, `\`${days}d\` \`${hours}h\` \`${dakika}m\` \`${seconds}s\n\``)
    }
    else if (command === "play" || command === "p") {
        embedbuilder(client, message, "#000011", "***ARANIYOR!***", args.join(" ")).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
        return distube.play(message, args.join(" "));
    }
    else if (command === "skip" || command === "s") {
        embedbuilder(client, message, "#000011", "***GEÇİLDİ!***", `Şarkı geçildi!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
        try {
        } catch (error) {
            console.error(error)
        }
        return distube.skip(message);
    }
    else if (command === "stop") {
        embedbuilder(client, message, "RED", "***KAPATILDI!***", `Şarkı kapatıldı`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
        try {
        } catch (error) {
            console.error(error)
            
        }
        return distube.stop(message);
    }
    else if (command === "seek") {
        await embedbuilder(client, message, "#000011", "***Aranıyor!***", `Şarkı \`${args[0]} saniyesine gitti!\``)
        await distube.seek(message, Number(args[0] * 1000));
        await delay(1500);
        await message.channel.bulkDelete(2)
        return
    }
    else if (filters.includes(command)) {
        let filter = await distube.setFilter(message, command);
        await embedbuilder(client, message, "#000011", "***Filtre ekleniyor!***", filter)
        await delay(1500);
        await message.channel.bulkDelete(2)
        return
    }
    else if (command === "volume" || command === "vol") {

        embedbuilder(client, message, "#000011", "***SES DÜZEYİ!***", `Ses düzeyi \`${args[0]} %\` olarak ayarlandı!`)
        await distube.setVolume(message, args[0]);
        await delay(1500);
        await message.channel.bulkDelete(2)
        return
    }
    else if (command === "queue" || command === "que") {

        let currentPage = 0;
        let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "RED", "***Oynayan hiçbir şey yok!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
       
        const embeds = QueueEmbed(queue.songs);
        const queueEmbed = await message.channel.send(`
        **Şu anki sayfa - ${currentPage + 1}/${embeds.length}**`,
            embeds[currentPage]);
        try {
            await queueEmbed.react("⬅️");
            await queueEmbed.react("⏹");
            await queueEmbed.react("➡️");
        } catch (error) {
            console.error(error)
            
        }
        const filter = (reaction, user) =>
            ["⬅️", "⏹", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });
        collector.on("collect", async (reaction, user) => {
            try {
                if (reaction.emoji.name === "➡️") {
                    if (currentPage < embeds.length - 1) {
                        currentPage++;
                        queueEmbed.edit(`**Şu anki sayfa - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                    }
                } else if (reaction.emoji.name === "⬅️") {
                    if (currentPage !== 0) {
                        --currentPage;
                        queueEmbed.edit(`**Şu anki sayfa - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                    }
                } else {
                    collector.stop();
                    reaction.message.reactions.removeAll();
                }
                await reaction.users.remove(message.author.id);
            } catch (error) {
                console.error(error)
                
            }
        })
    }
    else if (command === "loop") {
        if (0 <= Number(args[0]) && Number(args[0]) <= 2) {
            await distube.setRepeatMode(message, parseInt(args[0]));
            await embedbuilder(client, message, "#000011", "***Tekrarlama modu ayarlandı:***", `***${args[0].replace("0", "Kapalı").replace("1", "Şarkı tekrarı").replace("2", "Liste tekrarı")}***`)
            await delay(1500);
            await message.channel.bulkDelete(2)
            return
        }
        else {
            return embedbuilder(client, message, "RED", "***HATA***", `Lütfen **0** ve **2** arasından bir sayı yazın!  |   *(0: Kapalı, 1: Şarkı tekrarı, 2: Liste tekrarı)*`)
        }
    }
    else if (command === "jump") {
        let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "RED", "***Oynayan hiçbir şey yok!***").then(msg => msg.delete({timeout: 1500}).catch(console.error));
       
        if (0 <= Number(args[0]) && Number(args[0]) <= queue.songs.length) {
            embedbuilder(client, message, "RED", "HATA", `${parseInt(args[0])} şarkı atladı!`)
            try {
            } catch (error) {
                console.error(error)
                
            }
            return distube.jump(message, parseInt(args[0]))
                .catch(err => message.channel.send("Geçersiz şarkı numarası!"));
        }
        else {
            return embedbuilder(client, message, "RED", "***HATA***", `Lütfen **0** ve **${DisTube.getQueue(message).length}** arası bir sayı girin!   |   *(0: kapalı, 1: Şarkı tekrarı, 2: Liste tekrarı)*`)
        }

    }
}catch (error){
    console.error
 }
    }
    catch(error){

        let helpembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(helpembed);
    }

})

distube
    .on("playSong", async (message, queue, song) => {
        try{ playsongyes(message, queue, song);
        }catch (error){
            console.error
         }
    })
    .on("addSong", (message, queue, song) => {
        try{    return embedbuilder(client, message, "#000011", "***Şarkı listeye eklendi!***", `Şarkı: [\`${song.name}\`](${song.url})  -  \`${song.formattedDuration}\` \n\`\nTahmini süresi: ${queue.songs.length - 1} şarkı(lar) - \`${(Math.floor((queue.duration - song.duration) / 60 * 100) / 100).toString().replace(".", ":")}\`\nSıra süresi: \`${queue.formattedDuration}\``, song.thumbnail)
    }catch (error){
        console.error
     }
    })
    .on("playList", (message, queue, playlist, song) => {
        try{   playplaylistyes(message, queue, playlist, song);
    }catch (error){
        console.error
     }
    })
    .on("addList", (message, queue, playlist, song) => {
        try{    return embedbuilder(client, message, "#000011", "***Bir şarkı listesi eklendi!***", `Şarkı Listesi: [\`${playlist.name}\`](${playlist.url})  -  \`${playlist.songs.length} şarkılar\``, playlist.thumbnail)
    }catch (error){
        console.error
     }
    })
    .on("searchResult", (message, result) => {
        try{    let i = 0;
        return embedbuilder(client, message, "#000011", "", `***İstediğiniz şarkı numarasını seçin!***\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}\n*Bir sayı girin veya iptal etmek için 60 saniye bekleyin*`)
    }catch (error){
        console.error
     }
    })
    .on("searchCancel", (message) => {
        try {
            message.reactions.removeAll();
            message.react("❌")
        } catch (error) {
            console.error(error)
            
        }
        try{   return embedbuilder(client, message, "RED", `***Arama iptal edildi***`, "").then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
    }catch (error){
        console.error
     }
    })
    .on("error", (message, err) => {
        try {
            message.reactions.removeAll();
            message.react("❌")
        } catch (error) {
            console.error(error)    
        }
        
        try{   return embedbuilder(client, message, "RED", "***Bir hata ile karşılaşıldı:***", "```"+err+"```")
    }catch (error){
        console.error
     }
    })
    .on("finish", message => {
        try{ return embedbuilder(client, message, "RED", "***ŞARKI BİTTİ***", "Başka şarkı kalmadı").then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
    }catch (error){
        console.error
     }
    })
    .on("empty", message => {

        try{   return embedbuilder(client, message, "RED", "***Ses kanalı boş kaldığı için yakın zamanda ses kanalından çıkacağım!***").then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
    }catch (error){
        console.error
     }
    })
    .on("noRelated", message => {
        try{    return embedbuilder(client, message, "RED", "***Oynatmak için ilgili video bulunamıyor.Müziği kapattım.***").then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
    }catch (error){
        console.error
     }
    })
    .on("initQueue", queue => {
        try{   queue.autoplay = false;
        queue.volume = 150;
        queue.filter = filters[5];
    }catch (error){
        console.error
     }
    });

function embedbuilder(client, message, color, title, description, thumbnail) {
    try{   let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setFooter(client.user.username, client.user.displayAvatarURL());
    if (title) embed.setTitle(title);
    if (description) embed.setDescription(description);
    if (thumbnail) embed.setThumbnail(thumbnail)
    return message.channel.send(embed);
}catch (error){
    console.error
 }
}

async function playsongyes(message, queue, song) {
    try{  let embed1 = new Discord.MessageEmbed()

        .setColor("#000011")
        .setTitle("***Şu an Oynatılıyor***")
        .setDescription(`Şarkı: [\`${song.name}\`](${song.url})\n`)
        .addField("⏱ Süre:", ` \`${queue.formattedCurrentTime} / ${song.formattedDuration}\``, true)
        .addField("🌀 Kuyruk:", `\`${queue.songs.length} şarkı(lar) - ${queue.formattedDuration}\``, true)
        .addField("🔊 Ses:", `\`${queue.volume} %\``, true)
        .addField("♾ Loop:", `  \`${queue.repeatMode ? queue.repeatMode === 2 ? "✅ Liste" : "✅ Şarkı" : "❌"}\``, true)
        .addField("↪️ Autoplay:", `\`${queue.autoplay ? "✅" : "❌"}\``, true)
        .addField("❔ Filtre:", `\`${queue.filter || "❌"}\``, true)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(song.thumbnail)

    var playingMessage = await message.channel.send(embed1)

    try {
        await playingMessage.react("⏭");
        await playingMessage.react("⏹");
        await playingMessage.react("🔉");
        await playingMessage.react("🔊");
        await playingMessage.react("◀️");
        await playingMessage.react("▶️");
    }
    catch (error) {
        message.reply("Lütfen gerekli izinleri verin, reaksiyon eklemem gerekiyor!")
    }

    const filter = (reaction, user) =>
        ["⏭", "⏹", "🔉", "🔊", "◀️", "▶️"].includes(reaction.emoji.name) && user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000
    });
    collector.on("collect", async (reaction, user) => {
        if (!queue) return;
        const member = message.guild.member(user);
        if (member.voice.connection && member.voice.connection !== member.guild.me.voice.connection) return;

        switch (reaction.emoji.name) {
            case "⏭":
                distube.skip(message);
                embedbuilder(client, message, "#000011", "***GEÇİLDİ!***", `Şarkı geçildi!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                playingMessage.reactions.removeAll().catch(console.error);
                playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
                break;

            case "⏹":
                distube.stop(message);
                playingMessage.reactions.removeAll().catch(console.error);
                playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
                embedbuilder(client, message, "RED", "***KAPATILDI!***", `Şarkıyı kapattım!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                break;

            case "🔉":

                reaction.users.remove(user).catch(console.error);
                await distube.setVolume(message, Number(queue.volume) - 10);
                embedbuilder(client, message, "#000011", "***SES!***", `Ses düzeyi \`${queue.volume}\` seviyesine azaltıldı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                await playingMessage.edit(curembed(message)).catch(console.error);
                break;

            case "🔊":

                reaction.users.remove(user).catch(console.error);
                await distube.setVolume(message, Number(queue.volume) + 10);
                embedbuilder(client, message, "#000011", "***SES!***", `Ses düzeyi \`${queue.volume}\` seviyesine arttırıldı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                await playingMessage.edit(curembed(message)).catch(console.error);
                break;

            case "◀️":

                reaction.users.remove(user).catch(console.error);
                let seektime = queue.currentTime - 10000;
                if (seektime < 0) seektime = 0;
                await distube.seek(message, Number(seektime));
                playingMessage.edit(curembed(message)).catch(console.error);
                embedbuilder(client, message, "#000011", "***Aranıyor!***", `Şarkı \`10 saniye\` geri alındı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))

                break;

            case "▶️":
                reaction.users.remove(user).catch(console.error);
                let seektime2 = queue.currentTime + 10000;
                if (seektime2 >= queue.songs[0].duration * 1000) { seektime2 = queue.songs[0].duration * 1000 - 1; }
                await distube.seek(message, seektime2);
                playingMessage.edit(curembed(message)).catch(console.error);
                embedbuilder(client, message, "#000011", "***Aranıyor!***", `Şarkı \`10 saniye\` ileri alındı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                break;

            default:
                reaction.users.remove(user).catch(console.error);
                break;
        }
    });
    collector.on("end", () => {
        playingMessage.reactions.removeAll().catch(console.error);
        playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
    })
}catch (error){
    console.error
 }
}

async function playplaylistyes(message, queue, playlist, song) {
    try {
        var playingMessage = await embedbuilder(client, message, "#000011", "***Şarkı Listesi oynatılıyor***", `Şarkı Listesi: [\`${playlist.name}\`](${playlist.url})  -  \`${playlist.songs.length} songs\` \n\nRequested by: ${song.user}\n\nVolume: \`${queue.volume} %\`\nLoop: \`${queue.repeatMode ? "On" : "Kapalı"}\`\nAutoplay: \`${queue.autoplay ? "On" : "Kapalı"}\`\nFilter: \`${queue.filter || "❌"}\``, playlist.thumbnail)
        await playingMessage.react("⏭");
        await playingMessage.react("⏹");
        await playingMessage.react("🔉");
        await playingMessage.react("🔊");
        await playingMessage.react("◀️");
        await playingMessage.react("▶️");
    }
    catch(error) {
        console.error(error);
    }
    try{ 
    const filter = (reaction, user) =>
        ["⏭", "⏹", "🔉", "🔊", "◀️", "▶️"].includes(reaction.emoji.name) && user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000
    });
    collector.on("collect", (reaction, user) => {
        if (!queue) return;
        const member = message.guild.member(user);
        if (member.voice.connection && member.voice.connection !== member.guild.me.voice.connection) return;

        switch (reaction.emoji.name) {

            case "⏭":
                reaction.users.remove(user).catch(console.error);
                embedbuilder(client, message, "#000011", "***GEÇİLDİ!***", `Şarkı geçildi!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                distube.skip(message);
                break;

            case "⏹":
                reaction.users.remove(user).catch(console.error);
                embedbuilder(client, message, "RED", "***KAPATILDI!***", `Şarkı kapatıldı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                distube.stop(message);
                break;

            case "🔉":
                reaction.users.remove(user).catch(console.error);
                distube.setVolume(message, Number(queue.volume) - 10);
                embedbuilder(client, message, "#000011", "***SES!***", `Ses düzeyi \`${queue.volume}\` seviyesine azaltıldı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                break;

            case "🔊":
                reaction.users.remove(user).catch(console.error);
                distube.setVolume(message, Number(queue.volume) + 10);
                embedbuilder(client, message, "#000011", "***SES!***", `Ses düzeyi \`${queue.volume}\` seviyesine arttırldı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                break;

            case "◀️":
                reaction.users.remove(user).catch(console.error);
                embedbuilder(client, message, "#000011", "***Aranıyor!***", `Şarkı \`10 saniye\` geri alındı`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                let seektime = queue.currentTime - 10000;
                if (seektime < 0) seektime = 0;
                distube.seek(message, Number(seektime));
                break;

            case "▶️":
                reaction.users.remove(user).catch(console.error);
                embedbuilder(client, message, "#000011", "***Aranıyor!***", `Şarkı \`10 saniye\` ileri alındı!`).then(msg => msg.delete({ timeout: 1500 }).catch(console.error))
                let seektime2 = queue.currentTime + 10000;
                if (seektime2 > queue.songs[0].duration) seektime2 = queue.songs[0].duration - 1;
                distube.seek(message, Number(seektime2));
                break;

            default:
                reaction.users.remove(user).catch(console.error);
                break;
        }
    });
    collector.on("end", () => {
        playingMessage.reactions.removeAll().catch(console.error);
        playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
    })
}catch (error){
    console.error
 }
}

function curembed(message) {
    if(!message.author){message.author=client.user}
    try{  let queue = distube.getQueue(message);
    let song = queue.songs[0]; 
    let embed = new Discord.MessageEmbed()
        .setColor("#000011")
        .setTitle("***Şu an Oynatılıyor***")
        .setDescription(`Şarkı: [\`${song.name}\`](${song.url})\n`)
        .addField("⏱ Duration:", `\`${queue.formattedCurrentTime} / ${song.formattedDuration}\``, true)
        .addField("🌀 Kuyruk:", `\`${queue.songs.length} şarkı(lar) - ${queue.formattedDuration}\``, true)
        .addField("🔊 Ses:", `\`${queue.volume} %\``, true)
        .addField("♾ Loop:", `\`${queue.repeatMode ? queue.repeatMode === 2 ? "✅ Liste" : "✅ Şarkı" : "❌"}\``, true)
        .addField("↪️ Autoplay:", `\`${queue.autoplay ? "✅" : "❌"}\``, true)
        .addField("❔ Filtre:", `\`${queue.filter || "❌"}\``, true)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(song.thumbnail)
    return embed;
}catch (error){
    console.error
 }
}

function QueueEmbed(queue) {
    try{   let embeds = [];
    let k = 10;
    for (let i = 0; i < queue.length; i += 10) {
        const current = queue.slice(i, k)
        let j = i;
        k += 10;
        const info = current.map((track) => `**${++j} -** [\`${track.name}\`](${track.url})`).join("\n")
        const embed = new Discord.MessageEmbed()
            .setTitle("***Çalma Listesi***")
            .setColor("#000011")
            .setDescription(`**Şu anki şarkı - [\`${queue[0].name}\`](${queue[0].url})**\n\n${info}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
        embeds.push(embed);
    }
    return embeds;
}catch (error){
    console.error
 }

}

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


/////////////////////////
//müzik komutları bitiş//
/////////////////////////

////////////////////////
//sohbet türü mesajlar//
////////////////////////

client.on("message",msg =>{
try{
    if(msg.channel.type === "dm") return;
    /*if (client.user.id.voice.channel){
      setTimeout(function(){
    let size=msg.member.voice.channel.members.size-1;
      msg.channel.send("sa");
      if(size==0){
        return msg.member.voice.channel.leave();
        }
      }, 3000);
    } */
  
    if (msg.content.startsWith('sa'||'selamunaleykum' || 'selamünaleyküm' || 'selamunaleyküm'|| 'selamünaleykum' || 'selam')){
      msg.channel.send("as hb");
    }
    if (msg.content.toLowerCase() === 'prefix') {
      msg.channel.send('Lordum\nBu sunucuda komut sistemim : '+prefix+' olarak programlanmıştır.\nDaha fazla bilgi veya komut sistemimi görmek için '+prefix+'yardım yazabilirsiniz.');
    }
  if (msg.content.toLowerCase() === 'merhaba'||msg.content.toLowerCase() === 'meraba'||msg.content.toLowerCase() === 'mrb') {
    msg.channel.send('Merhabana merhaba lan');
  }
  if (msg.content.startsWith("alo")||(msg.content.startsWith("Alo"))||(msg.content.startsWith("ALo"))||(msg.content.startsWith("ALO"))||(msg.content.startsWith("AlO"))||(msg.content.startsWith("aLo"))||(msg.content.startsWith("aLO"))||(msg.content.startsWith("alO"))) {
      msg.channel.send('Lan ne var ne amk ne alo ne alooo'); 
  }
  if (msg.content.toLowerCase() === prefix + "instagram"|| msg.content.toLowerCase() === prefix + "insta"||msg.content.toLowerCase() === prefix + "ig"){
    msg.react("✅");
    const embed12 = new Discord.MessageEmbed()
                .setColor('#000011')
                .setTitle("Sahibimin instagram hesabı!")
                .setURL("www.instagram.com/hakimm_.c")
            msg.channel.send(embed12)
  }
  //prefixli komutlar

  if (msg.content.toLowerCase() === prefix + "antiaging"||msg.content.toLowerCase() === prefix + "anti aging"||msg.content.toLowerCase() === prefix + "anti-aging"){
    const embed12 = new Discord.MessageEmbed()
                .setColor('#000011')
                .setImage('http://www.hazimgokcen.net/wp-content/uploads/2019/07/hazim-gokcen-yeni.jpg')
                .setTitle('***İşte antiaging üstadı!***')
            msg.channel.send(embed12).then(msg => {
                  msg.react("💯");
                })
  }
  if(msg.content.startsWith(prefix +"avatar")){
    var kisi = msg.mentions.users.first();
    if(!kisi){
    const embed12 = new Discord.MessageEmbed()
                .setColor('#000011')
                .setImage(msg.author.displayAvatarURL())
                .setDescription('**İşte avatarın!**')
            msg.channel.send(embed12)}
    else{
      const embed12 = new Discord.MessageEmbed()
                .setColor('#000011')
                .setImage(kisi.displayAvatarURL())
                .setDescription(`**İşte ${kisi}'nin avatarı!**`)
            msg.channel.send(embed12)
    }} 
}catch (error){
    console.error
 }
});
//prefixli komutlar bitiş

/*Oyun sekmesi başlangıç*/

const config = require('./ayarlar.json');
const SnakeGame = require('./oyunlar/snake-game.js');
const Connect4 = require('./oyunlar/connect4.js');
const Chess = require('./oyunlar/chess.js');
const express = require('express');
const { set } = require('mongoose');
const Client = new Discord.Client(["MANAGE_MESSAGES"]);

const snakeGame = new SnakeGame(Client);
const connect4 = new Connect4(Client);
const chess = new Chess(Client);

Client.on('message', msg => {
    if (msg.content.startsWith(prefix)) {
        if (msg.content.toLowerCase() === prefix+'yılan') {
            snakeGame.newGame(msg);
        }
        else if (msg.content.toLowerCase() === prefix+'connect4') {
            connect4.newGame(msg);
        }
        else if (msg.content.toLowerCase() === prefix+'satranç') {
            chess.newGame(msg);
        }
    }
});


const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('<script>window.close();</script>');
    
})
//oyun bitiş

client.login(ayarlar.token);



