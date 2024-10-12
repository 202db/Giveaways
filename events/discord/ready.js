const register = require('../../utils/slashsync');
const { ActivityType } = require('discord.js');

module.exports = async (client) => {
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: '1'
  })), {
    debug: true
  });
  // Enregistrez les commandes slash - (Si vous faites partie de ces personnes qui lisent les codes, je suggère fortement d'ignorer cela car je suis très mauvais dans ce que je fais, merci)
  console.log(`[ / | Slash Command ] - ✅ Toutes les slashs commandes on été chargé!`)
  let invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`;
  console.log(`[STATUS] ${client.user.tag} est maintenant en ligne!\n[INFO] Créer par 202.sql https://twitch.tv/atsukofn [Lien du bot] ${invite}`);
  client.user.setPresence({
  activities: [{ name: `discord.gg/WzQGA8A5`, type: ActivityType.Streaming }],
  status: 'dnd',
});

};
