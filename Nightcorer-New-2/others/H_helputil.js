const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "helputility",
  aliases: ["hu"],
  cooldown: 3,
  execute(message) {
    message.react("✅");
    message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle("Utility Commands")
    .setDescription("nc!help | **Gives the starting help page**\nnc!prefix [new prefix] | **Changes the bots prefix for the server**\nnc!ping | **Gives you the current bot latency**\nnc!kick [@User] | **Kicks a user, if the permissions are enough to do so**\nnc!ban [@User] | **Perm bans a user, if the permissions are enough to do so**\nnc!uptime | **Tells you how much time the bot was online since the last reboot/crash**")
    .setFooter("Developed for you by: [BLK] BlackDelta#0725","https://cdn.discordapp.com/avatars/577839014103613471/a_48ac30936a777049811098df22c33a32.gif?size=256"));
  }
}