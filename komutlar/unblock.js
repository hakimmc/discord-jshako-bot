const Discord = require('discord.js');
const qdb = require('croxydb');
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

module.exports = {
    name: "unblock",
    aliases: ["unblock"],
    description: "",
    usage: "unblock",
    ownerOnly: false,
    run: async (message,args,client) => {   

        try{

    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<@"+message.author.id+'> Bunun için gerekli yetkin yok');
    //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed1);
        
var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
if (!muterole2) {
    try {
   
     muterole2 = await message.guild.roles.create({ 
            data: {
                name: "Muted",
                color: "#1800FF",
                permissions: []
              },
            reason: 'Mute Rolü!' 
            })

        qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);

        message.guild.channels.cache.forEach(async (channel) => {
            await channel.createOverwrite(muterole2, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  CONNECT: false
              });
          });

} catch (err) {
    console.log(err);
}

};

var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!kisi) return message.reply("Susturması açılacak bir kullanıcı belirtiniz!");

 if(!kisi.roles.cache.find(r => r.id === muterole2.id)) return message.reply("Kişi Daha Önceden Susturulmamış!")

 
var reason = args.slice(1).join(" ")

if(reason){
    await kisi.roles.remove(muterole2.id);
    message.channel.send(`${kisi} Susturulması açıldı!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);
} else {
    await kisi.roles.remove(muterole2.id);
    message.channel.send(`${kisi} Susturulması Açıldı!\nYetkili: **${message.author}**`);
};

}catch(error){

    let hata = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
    .setDescription("```"+error+"```")
    return message.channel.send(hata);
}

}}