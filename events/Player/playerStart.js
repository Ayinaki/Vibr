const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
module.exports = (queue, track) => {

    if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Started playing ${track.title} in ${queue.channel.name} 🎧`, iconURL: track.thumbnail})
    .setColor('Random')

    const back = new ButtonBuilder()
    .setLabel('Back')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Resume & Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const lyrics = new ButtonBuilder()
    .setLabel('lyrics')
    .setCustomId(JSON.stringify({ffb: 'lyrics'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, lyrics, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })

    //const AyinakiDMTrack = new EmbedBuilder()
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
    //          value: `${queue.guild.name}`,
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
    //      iconURL: queue.guild.iconURL(''),
    //    })
    //    .setTimestamp();
//
    //    const AyinakiDMTracks = new EmbedBuilder()
    //    .addFields(
    //        {
    //          name: "Playlist Name",
    //          value: `${track.playlist.title}`,
    //          inline: false
    //        },
    //        {
    //          name: "Playlist URL",
    //          value: `${track.playlist.url}`,
    //          inline: false
    //        },
    //        {
    //            name: "Server Name",
    //            value: `${queue.guild.name}`,
    //            inline: true
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
    //      iconURL: queue.guild.iconURL(''),
    //    })
    //    .setTimestamp();

        if (track.playlist) {
            const AyinakiDMTracks = new EmbedBuilder()
            .addFields(
                {
                  name: "Playlist Name",
                  value: `${track.playlist.title}`,
                  inline: false
                },
                {
                  name: "Playlist URL",
                  value: `${track.playlist.url}`,
                  inline: false
                },
                {
                    name: "Server Name",
                    value: `${queue.guild.name}`,
                    inline: true
                },
                {
                  name: "Requested By",
                  value: `${track.requestedBy}`,
                  inline: true
                },
              )
            .setColor('Random')
            .setFooter({
              text: "❤️ Ayinaki",
              iconURL: queue.guild.iconURL(''),
            })
            .setTimestamp();
            client.users.send('164062855115571200',({ embeds: [AyinakiDMTracks] }));
        } else {
            const AyinakiDMTrack = new EmbedBuilder()
            .addFields(
                {
                  name: "Song Name",
                  value: `${track}`,
                  inline: false
                },
                {
                  name: "Song URL",
                  value: `${track.url}`,
                  inline: false
                },
                {
                  name: "Server Name",
                  value: `${queue.guild.name}`,
                  inline: true
                },
                {
                  name: "Requested By",
                  value: `${track.requestedBy}`,
                  inline: true
                },
              )
            .setColor('Random')
            .setFooter({
              text: "❤️ Ayinaki",
              iconURL: queue.guild.iconURL(''),
            })
            .setTimestamp();
            client.users.send('164062855115571200',({ embeds: [AyinakiDMTrack] }));
        }

}
