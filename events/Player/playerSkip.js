const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {

    const playerSkip = new EmbedBuilder()
    .setAuthor({name: `Skipping **${track.title}** due to an issue! ❌`, iconURL: track.thumbnail})
    .setColor('Random')

queue.metadata.send({ embeds: [playerSkip] })


}
