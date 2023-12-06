module.exports = {
    app: {
        token: 'OTAzODA0MDM4MjUwOTA1NjIw.GchqXV.lPNk2mCRr90aNk88jcTzDs4MYqu09UbDDDYOJA',
        playing: 'Initialized️',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: false,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
