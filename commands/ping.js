exports.run = async (client, message, args) => {
  
const eM = await message.channel.send("Please wait...");
        let embed = new Discord.MessageEmbed()
        
            .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
            .addField("💓 API", `**${Math.floor(client.ws.ping)}ms**`)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp();
            return eM.edit(`🏓 Poong!`, embed);
             } catch (error) {
      return 
               message.channel.send(`Error: ${error.message}`);
    }
  }

