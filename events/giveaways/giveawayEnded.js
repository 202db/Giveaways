const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.EmbedBuilder()
          .setTitle(`🎁 Let's goo!`)
          .setColor("#2F3136")
          .setDescription(`Salut ${member.user}\nJ'ai entendu dire que tu as gagné **[[Le Giveaway]](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Bien jouer tu a gagner : **${giveaway.prize}!**\nEnvoyez un message direct au créateur du giveaway pour réclamer votre récompense!!`)
          .setTimestamp()
          .setFooter({
            text: `${member.user.username}`, 
            iconURL: member.user.displayAvatarURL()
           })
        ]
      }).catch(e => {})
    });

  }
}
