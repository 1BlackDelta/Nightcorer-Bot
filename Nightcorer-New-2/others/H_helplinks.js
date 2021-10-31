const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "helplinks",
  aliases: ["hl"],
  cooldown: 3,
  execute(message) {
    message.react("✅");
    message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle("Links Commands")
    .setDescription("nc!invite | **Gives you the link where you can invite and upvote the bot**\nnc!support | **Gives you the invite link for the official discord support server**")
    .setFooter("Developed for you by: [BLK] BlackDelta#0725","https://cdn.discordapp.com/avatars/577839014103613471/a_48ac30936a777049811098df22c33a32.gif?size=256"));
  }
}