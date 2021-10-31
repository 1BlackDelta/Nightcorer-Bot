const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 5,
  execute(message) {
    message.react("✅");
    message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle("Nightcorer's Help Page")
    .setDescription("Use:\n\n- nc!helpmusic  => **For music commands**\n- nc!helplinks => **For commands which will give you invites/links**\n- nc!helputility => **For settings and utility commands**\n- nc!helpfun => **For fun commands**")
    .setFooter("Developed for you by: [BLK] BlackDelta#0725","https://cdn.discordapp.com/avatars/577839014103613471/a_48ac30936a777049811098df22c33a32.gif?size=256"));
  }
}