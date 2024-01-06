const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {
    if (!client.config.app.ExtraMessages) return


    //const AyinakiDM = new EmbedBuilder()
    //    .addFields(
    //        {
    //          name: "Song Name",
    //          value: `${track}`,
    //          inline: false
    //        },
    //        {
    //          name: "Song URL",
    //          value: `${track.url}`,
    //          inline: false
    //        },
    //        {
    //          name: "Server Name",
    //          value: `${track.queue.guild.name}`,
    //          inline: true
    //        },
    //        {
    //          name: "Requested By",
    //          value: `${track.requestedBy}`,
    //          inline: true
    //        },
    //      )
    //    .setColor('Random')
    //    .setFooter({
    //      text: "❤️ Ayinaki",
    //      iconURL: track.queue.guild.iconURL(''),
    //    })
    //    .setTimestamp();


    const audioTrackAdd = new EmbedBuilder()
    .setAuthor({name: `Track ${track.title} added in the queue ✅`, iconURL: track.thumbnail})
    .setColor('Random')

queue.metadata.send({ embeds: [audioTrackAdd] })

//client.users.send('164062855115571200',({ embeds: [AyinakiDM] }))




}
