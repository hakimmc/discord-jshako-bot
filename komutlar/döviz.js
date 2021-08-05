const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = TCMB_Doviz;
const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

module.exports = {
    name: "döviz",
    aliases: ["döviz"],
    description: "",
    usage: "döviz",
    ownerOnly: false,
    run: async (message,args,client) => {

       try{
    if(!args[0]) {
        let embed = new Discord.MessageEmbed();
        embed.setDescription("Hatalı giriş yapıldı! | Örnek Kullanım = "+ ayarlar.prefix + `döviz USD \n Kur Birim Kodları: \n \`\`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\``);
        embed.setColor("RED");
        message.channel.send({embed: embed});
    }else{
    if (args[0] === "usd" || args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`${res.isim} Güncel Kur Analizi`);
        embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
        embed.setColor("#000011");
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu`,res.kod,true);
        message.channel.send({embed: embed});
    }
   else if(args[0] === "EUR" || args[0] === "eur"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "aud" || args[0] === "AUD"){
const res = await Doviz.getKur("AUD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "dkk" || args[0] === "DKK"){
const res = await Doviz.getKur("DKK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "gbp" || args[0] === "GBP"){
const res = await Doviz.getKur("GBP");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "chf" || args[0] === "CHF"){
const res = await Doviz.getKur("CHF");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "sek" || args[0] === "SEK"){
const res = await Doviz.getKur("SEK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "cad" || args[0] === "CAD"){
const res = await Doviz.getKur("CAD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "kwd" || args[0] === "KWD"){
const res = await Doviz.getKur("KWD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "nok" || args[0] === "NOK"){
const res = await Doviz.getKur("NOK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "jpy" || args[0] === "JPY"){
const res = await Doviz.getKur("JPY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "sar" || args[0] === "SAR"){
const res = await Doviz.getKur("SAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "bgn" || args[0] === "BGN"){
const res = await Doviz.getKur("BGN");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "ron" || args[0] === "RON"){
const res = await Doviz.getKur("RON");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "rub" || args[0] === "RUB"){
const res = await Doviz.getKur("RUB");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "irr" || args[0] === "IRR"){
const res = await Doviz.getKur("IRR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "cny" || args[0] === "CNY"){
const res = await Doviz.getKur("CNY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "pkr" || args[0] === "PKR"){
const res = await Doviz.getKur("PKR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else if(args[0] === "qar" || args[0] === "QAR"){
const res = await Doviz.getKur("QAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`)
embed.setDescription(`Bilgiler Merkez Bankası (TCMB) üzerinden alınmaktadır. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("#000011")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   else {

let embed = new Discord.MessageEmbed()
embed.setDescription(`Hatalı birim kodu kullanıldı. Kur Birim Kodları: \n \`\`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\``);
embed.setColor("RED");
message.channel.send({embed: embed});
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
