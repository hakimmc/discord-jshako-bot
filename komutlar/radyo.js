const Discord = require("discord.js");
const bot = new Discord.Client();
const ffmpeg = require("ffmpeg");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = {
    name: "radyo",
    aliases: ["radyo"],
    description: "radyo",
    usage: "radyo",
    ownerOnly: false,
    run: async (message,args,client) => {

        const kanal = require("./kanallar.json")
        var link=kanal.kanallar;

        const x = require("./kanalisim.json")
        var isim = x.kanalismi;



        let mesaj = args.slice(0).join(' ');
try {
    if (!message.guild.members.cache.get(message.author.id).voice.channel) return message.channel.send("Radyoyu kullanabilmek için ses kanalına katılın.");                       

if(!mesaj) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === "radyo-kanalları")){
            message.guild.channels.create("radyo-kanalları", {type:'text',}).then(msg =>{
            message.delete({ timeout: 1000*30 }).catch(console.error);
        const embed6 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo-Kanalları***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("**radyo-kanalları** kanalına radyo listesi eklenmiştir!")
            message.channel.send(embed6).then(msg => msg.delete({ timeout: 5000 }).catch(console.error))

        })}
          message.delete({ timeout: 1000*30 }).catch(console.error);
        const embed6 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo-Kanalları***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("**radyo-kanalları** kanalına radyo listesi eklenmiştir!")
            message.channel.send(embed6).then(msg => msg.delete({ timeout: 5000 }).catch(console.error))


        const embed4 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo Hata***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("**Lütfen radyoyu açmak için h-radyo [numara] şeklinde yazınız!**")
        const liste=require("./radyoembed.json");

            const embed5 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo Kanalları***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(liste.liste)

            const embed55 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo Kanalları***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(liste.liste2)

            const embed555 = new Discord.MessageEmbed()
            .setColor('#000011')
            .setTitle('***Radyo Kanalları***')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(liste.liste3)
  
            message.guild.channels.cache.find(channel => channel.name === "radyo-kanalları").send(embed4).then(msg => msg.delete({ timeout: 15000 }).catch(console.error))

            message.guild.channels.cache.find(channel => channel.name === "radyo-kanalları").send(embed5).then(msg => msg.delete({ timeout: 15000 }).catch(console.error))

            message.guild.channels.cache.find(channel => channel.name === "radyo-kanalları").send(embed55).then(msg => msg.delete({ timeout: 15000 }).catch(console.error))

            message.guild.channels.cache.find(channel => channel.name === "radyo-kanalları").send(embed555).then(msg => msg.delete({ timeout: 15000 }).catch(console.error))

}
                
                if (mesaj) {
                    message.delete({ timeout: 10000 }).catch(console.error);
                    if(mesaj === "stop")
                    {
                        return message.member.voice.channel.leave()
                    }
                    if(mesaj-1<mesaj && mesaj<mesaj+1){
                    message.member.voice.channel.join();
                    if(mesaj>186){message.channel.send("186 ile 1 arasında bir sayı girmediğiniz için 186. radyoyu açıyorum!").then(msg => msg.delete({ timeout: 1000*10 }).catch(console.error))
                                 mesaj=186};
                    if(mesaj<1){message.channel.send("186 ile 1 arasında bir sayı girmediğiniz için 1. radyoyu açıyorum!").then(msg => msg.delete({ timeout: 1000*10 }).catch(console.error))
                                 mesaj=1};
                    if (message.member.voice.channel.join()
                    .then(connection => {
                        connection.play(link[mesaj-1])

                            message.channel.send(new Discord.MessageEmbed()
                            .setThumbnail(`${client.user.displayAvatarURL()}`)
                            .setTitle("***Radyo***")
                            .setDescription(isim[mesaj-1]+"Oynatılıyor \n\n[<@"+message.author.id+">] tarafından açıldı.")
                            .setColor("#000011")).then(msg => msg.delete({ timeout: 15000 }).catch(console.error))

            //setTimeout(function(){message.member.voice.channel.leave()},1000*10);
     
                    }));
                }
                else{
                    message.channel.send(new Discord.MessageEmbed()
                            .setThumbnail(`${client.user.displayAvatarURL()}`)
                            .setTitle("***Radyo Hata***")
                            .setDescription(`**${message.content}** geçersiz bir kullanım şeklidir.Lütfen **h-radyo [numara]** şeklinde yazın.`)
                            .setColor("#000011")).then(msg => msg.delete({ timeout: 10000 }).catch(console.error))

                }
                  
                }
            }catch(error){

                let hata = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
                .setDescription("```"+error+"```")
                return message.channel.send(hata);
            } 
    }
}