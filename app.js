require('dotenv').config();

const express = require('express');
const linebot = require('linebot');

const app = express();

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on('message', function (event) {
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    event.reply(replyMsg).then(function (data) {
        console.log("event",event)
        console.log("data",data)
    }).catch(function (error) {
        console.log("error",error)
    });
});

app.get("/", (req, res) => {
    res.sendStatus(200);
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});

app.listen(3001, () => {
    console.log(`listening on ${3001}`);
})