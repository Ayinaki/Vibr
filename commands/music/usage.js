const { EmbedBuilder } = require('discord.js');
var os = require('os');

  module.exports = {
    name: 'usage',
    description: "check bot usages",
    voiceChannel: true,

    async execute({ inter, client, message }) {
        const totalram = ((os.totalmem() / 10**6 + " ").split('.')[0]);
        const freeram = ((os.freemem() / 10**6 + " ").split('.')[0]);
        const usedram = (((os.totalmem() - os.freemem()) / 10**6 + " ").split('.')[0]);
        const prctfreeram = (((os.freemem() * 100) / os.totalmem + " ").split('.')[0]);
        

        const AyinakiDMTracks = new EmbedBuilder()
            .addFields(
                {
                  name: "Memory (RAM)",
                  value: `Total Memory: ${totalram}MB\nUsed Memory: ${usedram}MB\nFree Memory: ${freeram}MB\nPercentage Of Free Memory: ${prctfreeram}%`,
                  inline: false
                },
              )
            .setColor('Random')
            .setFooter({
                  text: "❤️ Ayinaki",
                })
            .setTimestamp();
            client.users.send('164062855115571200',({ embeds: [AyinakiDMTracks] }));
    },
};

