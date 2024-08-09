var linebot = require('linebot');

require('dotenv').config();

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on('message', function (event) {
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    event.reply(replyMsg).then(function (data) {
    }).catch(function (error) {

    });
});

bot.get("/", (req, res) => {
    res.sendStatus(200);
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});