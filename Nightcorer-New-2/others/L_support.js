const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  aliases: ["sup", "server", "wtfishappeningplshelpme"],
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Join our server!")
      .setDescription("Having problems using the bot? Ask for help on the official Discord Server!")
      .setColor("#F0EAD6")
      .setAuthor('Nightcorer Server','https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif')
      .addField(`Invite:`, 'https://discord.gg/THh9pmKhMf', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};