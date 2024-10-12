const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **Un giveaway a commencé** 🎉",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **Le giveway est terminé** 🎉",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `Réagissez avec 🎉 pour participer!`,
  winMessage: "Félicitation, {winners}! Vous avez gagner **{this.prize}**!",
  embedFooter: "{this.winnerCount} Gagnant(s)",
  noWinner: "Giveaway annulé, aucun participations valide.",
  hostedBy: "Créer par : {this.hostedBy}",
  winners: "gagnant(s)",
  endedAt: "Se termine dans"
}
