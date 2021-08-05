// -Bot giriş kısmı- 
const chalk = new require("chalk");
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix
module.exports = (client) => {

var oynuyor=[
    "Visual Studio Code ",
    `${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} kullanıcı`,
    "komut liste --> "+prefix+"yardım "
]
var etkinlik=[
    "PLAYING",
    "LISTENING",
    "LISTENING",
    "STREAMING"
]

var yayıncı =[
  "adal",
  "wtcn",
  "elraenn",
  "kendinemuzisyen",
  "mericcanyetik" 
]

var mesaj = chalk.green.bold(`JsHako sunucuya giriş yaptı ve artık komutlar için aktif!`);

   setInterval(function() {
    var random = Math.floor(Math.random()*(4));
    var randomyay = Math.floor(Math.random()*(5));

    if(random===3){
        return client.user.setActivity(yayıncı[randomyay], { type: etkinlik[random],url:"https://www.twitch.tv/"+yayıncı[randomyay]})
    }

   
   client.user.setActivity(oynuyor[random], { type: etkinlik[random] });}, 5*1000);

    console.log(mesaj)
}

