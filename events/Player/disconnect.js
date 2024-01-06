const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `Disconnected from the voice channel, clearing the queue! ❌`})
    .setColor('Random')

queue.metadata.send({ embeds: [Disconnect] })
}
