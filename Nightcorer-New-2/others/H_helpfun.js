const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "helpfun",
  aliases: ["hf"],
  cooldown: 3,
  execute(message) {
    message.react("✅");
    message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle("Fun Commands")
    .setDescription("nc!embed [text] | **Sends a custom message as embed**\nnc!meme | **Gives you a random meme from the good old meme subreddits**\nnc!8Ball [question] | **Gives you a random answer to your questions (maybe it will change your life?)**")
    .setFooter("Developed for you by: [BLK] BlackDelta#0725","https://cdn.discordapp.com/avatars/577839014103613471/a_48ac30936a777049811098df22c33a32.gif?size=256"));
  }
}