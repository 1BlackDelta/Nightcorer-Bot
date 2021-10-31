module.exports = { 
    name: "leave",
    aliases: ["disconnect","dis"],
    cooldown: 4,
  
      execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply("Join my voice channel first.").catch(console.error); 
         if (!message.guild.me.voice.channel) return message.reply("I am not in a voice channel.").catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply("I am not in your voice channel.").catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.leave(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('Disconnected ✅').catch(console.error); 
             return 
            }
            channel.leave(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('Disconnected ✅').catch(console.error); } };