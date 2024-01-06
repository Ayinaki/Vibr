const { Playlist } = require('discord-player');
const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {
    if (!client.config.app.ExtraMessages) return

    //console.log(track.playlist)

    //const AyinakiDM = new EmbedBuilder()
    //    .addFields(
    //        //{
    //        //  name: "Song Name",
    //        //  value: `${track}`,
    //        //  inline: false
    //        //},
    //        {
    //          name: "Song URL",
    //          value: `${Playlist.url}`,
    //          inline: false
    //        },
    //        //{
    //        //  name: "Server Name",
    //        //  value: `${track.queue.guild.name}`,
    //        //  inline: true
    //        //},
    //        //{
    //        //  name: "Requested By",
    //        //  value: `${track.requestedBy}`,
    //        //  inline: true
    //        //},
    //      )
    //    .setColor('Random')
    //    //.setFooter({
    //    //  text: "❤️ Ayinaki",
    //    //  iconURL: track.queue.guild.iconURL(''),
    //    //})
    //    .setTimestamp();

    const audioTracksAdd = new EmbedBuilder()
    .setAuthor({name: `All the songs in playlist added into the queue ✅`})
    .setColor('Random')

queue.metadata.send({ embeds: [audioTracksAdd] })

//client.users.send('164062855115571200',({ embeds: [AyinakiDM] }))



}
