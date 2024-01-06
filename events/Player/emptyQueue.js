const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `No more songs in the queue! ❌`})
    .setColor('Random')

    queue.metadata.send({ embeds: [emptyQueue] })
}
