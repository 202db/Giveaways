const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member) {
    return member.send({
      embeds: [new Discord.EmbedBuilder()
        .setTimestamp()
        .setTitle('❓ Attendez, venez-vous de supprimer une réaction à un giveaway ?')
        .setColor("#2F3136")
        .setDescription(
          `Votre participation pour [Ce Giveaway](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) was recorded but you un-reacted, since you don't need **${giveaway.prize}** I would have to choose someone else 😭`
        )
        .setFooter({ text: "Vous pensez que c'était une erreur ? Allez réagir encore !" })
      ]
    }).catch(e => {})

  }
}
