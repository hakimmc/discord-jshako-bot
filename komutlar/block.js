const Discord = require('discord.js');
const qdb = require('croxydb');
const ms = require("ms");
const ayarlar = require('../ayarlar.json');

module.exports = {
    name: "block",
    aliases: ["block"],
    description: "",
    usage: "block",
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
if (!kisi) return message.reply("Susturmam için bir kullanıcı belirtiniz!");

var time = args[1];
var reason = args.slice(7).join(" ")

if (!time) {
    if(reason){
        await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **SINIRSIZ** şekilde susturuldu!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);
    } else {
        await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **SINIRSIZ** şekilde susturuldu!\nYetkili: **${message.author}**`);
    };

} else {
    
    if(reason){
        await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **${time}** süresince susturuldu!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);
       
       
           setTimeout(function() {
            if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                kisi.roles.remove(muterole2.id)
              message.channel.send(`${kisi} susturulma süresi dolduğu için susturulması kaldırılmıştır.`)
            }
           }, ms(time));

    } else {
        await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **${time}** süresince şekilde susturuldu!\nYetkili: **${message.author}**`);

        setTimeout(function() {
            if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                kisi.roles.remove(muterole2.id)
              message.channel.send(`${kisi} susturulma süresi dolduğu için susturulması kaldırılmıştır.`)
            }
           }, ms(time));
    }
};

        }catch(error){

            let hata = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
            .setDescription("```"+error+"```")
            return message.channel.send(hata);
        }
}}