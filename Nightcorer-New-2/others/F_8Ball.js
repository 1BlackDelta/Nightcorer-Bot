const Discord = require('discord.js')

module.exports = {
  name: '8ball',
  aliases: ["8b"],
  cooldown: 2,
  async execute(message, args) {
    if(!args[0]) return message.reply('Ask a question before sending the command.')
    const replies = ["Yes","No","Absolutely","Hell nah","Why would you even ask me that, of course!","Are you joking? Absolutely No!","Yea probably...","I dont think so...","That's a good question, but I dont know how to answer it...","Maybe..?","Probably no...","Think about it, maybe you'll get the answer yourself","Ask someone else, Im tired right now =w="];

    const result = Math.floor((Math.random() * replies.length));
    const question = args.slice().join(" ");

    const ballembed = new Discord.MessageEmbed()
    .setColor("#F0EAD6")
    .addField("Question", question)
    .addField("Answer", replies[result])

    message.channel.send(ballembed)
  }
}
