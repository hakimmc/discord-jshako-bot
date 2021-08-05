const figlet=require('figlet');
module.exports = {
    name: "ascii",
    aliases: ["ascii"],
    description: "şekilli yazı yazar",
    usage: "ascii",
    ownerOnly: false,
    async run (message,args,client){

        try{

    if(!args[0]) return message.channel.send("Lütfen çıktısını almak istediğiniz yazıyı girin.");

    msg = args.join(" ");

    figlet.text(msg,function(err,data){
        if(err){
            console.log("Bir şeyler ters gitti.");
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send("Lütfen en fazla 2000 karakter içeren bir yazı giriniz.");

        message.channel.send('```'+ data +'```')
    })

    }catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }

    }}