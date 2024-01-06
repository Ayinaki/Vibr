const { QueryType, useMainPlayer, useQueue } = require('discord-player');
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'play',
    description: "play a song!",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to play',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter, client }) {
        const player = useMainPlayer()

        const song = inter.options.getString('song');
        const soundcloudlink = song.includes("soundcloud")
        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });
        const NoResultsEmbed = new EmbedBuilder()
            .setAuthor({ name: `No results found... try again ? ❌`})
            .setColor('Random')

        const SoundcloudLinkTest = new EmbedBuilder()
            .setAuthor({ name: `Soundcloud links are currently broken! Try Youtube or Spotify! ❌`})
            .setColor('Random')

        if (soundcloudlink) return inter.editReply({ embeds: [SoundcloudLinkTest] });

        if (!res || !res.tracks.length) return inter.editReply({ embeds: [NoResultsEmbed] });

        const queue = await player.nodes.create(inter.guild, {
            metadata: inter.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            volume: client.config.opt.volume,
            leaveOnEmpty: client.config.opt.leaveOnEmpty,
            leaveOnEmptyCooldown: client.config.opt.leaveOnEmptyCooldown,
            leaveOnEnd: client.config.opt.leaveOnEnd,
            leaveOnEndCooldown: client.config.opt.leaveOnEndCooldown,
        });

        try {
            if (!queue.connection) await queue.connect(inter.member.voice.channel);
        } catch {
            await player.deleteQueue(inter.guildId);

            const NoVoiceEmbed = new EmbedBuilder()
                .setAuthor({ name: `I can't join the voice channel... try again ? ❌`})
                .setColor('Random')

            return inter.editReply({ embeds: [NoVoiceEmbed] });
        }

            const playEmbed = new EmbedBuilder()
                .setAuthor({ name: `Loading your ${res.playlist ? 'playlist' : 'track'} to the queue... ✅`})
                .setColor('Random')
                
            await inter.editReply({ embeds: [playEmbed] });


        res.playlist ? queue.addTrack(res.tracks) : queue.addTrack(res.tracks[0]);

        //Old Console Logging (Now uses DMs)
        //console.log(`   `);
        //console.log(`Song Name: ${res.tracks},\nSong url: ${song},\nServer Name: ${inter.guild.name},\nRequested By: ${inter.member.user.tag}.`);

        //DM Ayinaki For logging
        //client.users.send('164062855115571200', `Song Name: ${res.tracks},\nSong URL: ${song},\nServer Name: ${inter.guild.name},\nRequested By: ${inter.member.user.tag}.`);
        console.log("Soundcloud Error check 2")
        console.log(soundcloudbug)


        if (!queue.isPlaying()) await queue.node.play();
    },
};
