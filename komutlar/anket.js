const figlet=require('figlet');
const Discord = require("discord.js");
const { boolean } = require('mathjs');

module.exports = {
    name: "anket",
    aliases: ["anket","anket-süreli"],
    description: "",
    usage: "anket",
    ownerOnly: false,
    async run (message,args,client){

    try{

    time="Süresiz Anket";  

    var k;

    emojiArray = [
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣",
        "5️⃣",
        "6️⃣",
        "7️⃣",
        "8️⃣",
        "9️⃣"
      ];
        
    if(!args[0]) return message.channel.send("Lütfen anket sorusu yazınız.");
    if(!args[1]) return message.channel.send("Lütfen kaç adet cevap olacağını yazınız.");
    if(!(args[1]-1<args[1]<args[1]+1)) return message.channel.send("Lütfen kaç adet olacağı kısmına bir sayı giriniz");
    if(args[1]>9) return message.channel.send("Lütfen 9 veya 9'dan az cevap yazınız.");

    
    for(k=1;k<=args[1];k++){
        if(!args[k+1]) return message.channel.send("Lütfen girdiğiniz adet kadar şık yazınız.");
        
    }

    //if(!args[args[1]+2]) return message.channel.send("Lütfen süre belirtiniz. (dakika cinsinden)");
    
    var description;

    if(args[2] && !args[3]){
        description = emojiArray[0]+"-"+args[2]
    }
    if(args[3] && !args[4]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]
    }
    if(args[4] && !args[5]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]
    }
    if(args[5] && !args[6]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]
    }
    if(args[6] && !args[7]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]+"\n"+emojiArray[4]+"-"+args[6]
    }
    if(args[7] && !args[8]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]+"\n"+emojiArray[4]+"-"+args[6]+"\n"+emojiArray[5]+"-"+args[7]
    }
    if(args[8] && !args[9]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]+"\n"+emojiArray[4]+"-"+args[6]+"\n"+emojiArray[5]+"-"+args[7]+"\n"+emojiArray[6]+"-"+args[8]
    }
    if(args[9] && !args[10]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]+"\n"+emojiArray[4]+"-"+args[6]+"\n"+emojiArray[5]+"-"+args[7]+"\n"+emojiArray[6]+"-"+args[8]+"\n"+emojiArray[7]+"-"+args[9]
    }
    if(args[10]){
        description = emojiArray[0]+"-"+args[2]+"\n"+emojiArray[1]+"-"+args[3]+"\n"+emojiArray[2]+"-"+args[4]+"\n"+emojiArray[3]+"-"+args[5]+"\n"+emojiArray[4]+"-"+args[6]+"\n"+emojiArray[5]+"-"+args[7]+"\n"+emojiArray[6]+"-"+args[8]+"\n"+emojiArray[7]+"-"+args[9]+"\n"+emojiArray[8]+"-"+args[10]
    }


    message.channel.send("@everyone");

    message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("***"+args[0]+"***")
    .setDescription(description+"\n\n"+time))

    .then(msg=>{
        for(var i=0;i<args[1];i++){
            msg.react(emojiArray[i]);
        }})

    


    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }

    }}