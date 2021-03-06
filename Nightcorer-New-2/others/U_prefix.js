const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

const db = require('quick.db');


module.exports = {
  name: `prefix`,
  aliases: ["setprefix"],
  cooldown: 3,
 async execute(message, args, client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = PREFIX;

    //react with approve emoji
    message.react("β");

    if(!args[0]) return message.channel.send(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(`Current Prefix: \`${prefix}\``)
    .setFooter('Provide a new prefix')
    );
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(`π« You don\'t have permission for this Command!`)
    );

    if(args[1]) return message.channel.send(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(`'βThe prefix can\'t have two spaces'`));

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(`β Successfully set new prefix as **\`${args[0]}\`**`))
  }
}