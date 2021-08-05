const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: "meme",
    aliases: ["meme"],
    description: "",
    usage: "meme",
    ownerOnly: false,
    run: async (message,args,client) => {
		try{
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`***${memeTitle}***`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('#000011');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			message.channel.send(embed);
		})
		.catch(console.error);
	}catch(error){

        let hata = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("***BİR HATA İLE KARŞILAŞILDI***")
        .setDescription("```"+error+"```")
        return message.channel.send(hata);
    }
}}
