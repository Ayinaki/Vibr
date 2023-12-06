module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\nlets play some music!`);
    client.user.setActivity(client.config.app.playing);   

function waitforme(ms) {

return new Promise( resolve => {

    setTimeout(()=> {resolve(``)} ,ms );

})

}

async function printy() {

//for(let i=0; i < 10 ; ++i) {
for (;;) {

    await waitforme(500);
    //console.log(i);
    //i++;
    const { ActivityType } = require('discord.js') ;
    client.user.setActivity("/help", {
     type: ActivityType.Streaming,
     url: "https://www.youtube.com/watch?v=Y0kdo9QWpKU&ab_channel=Foopi"
    });
    break

}}

setInterval(printy, 1800000);

};