const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const m = await message.channel.send("Please wait...");
        let embed = new Discord.MessageEmbed()
        
            .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
            .addField("💓 API", `**${Math.floor(client.ws.ping)}ms**`)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp();
            return m.edit(`🏓 Poong!`, embed)
}
