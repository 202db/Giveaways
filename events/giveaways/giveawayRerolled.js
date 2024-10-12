const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.EmbedBuilder()
          .setTitle(`🎁 Let's goo! Nous avons un nouveau gagnant`)
          .setColor("#2F3136")
          .setDescription(`Salut ${member.user}\nJ'ai entendu dire que l'hôte qui avait relancé un giveaway et que vous aviez gagné **[[Ce Giveaway]](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Bien jouer vous avez gagnez : **${giveaway.prize}!**\nEnvoyez un DM au créateur du giveaway pour réclamer votre récompense!!`)
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
