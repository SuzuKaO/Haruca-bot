const TelegramBot = require('node-telegram-bot-api');

//https://api.telegram.org/bot1228851710:AAFWDS14GSttAM6s3VF_uiBFFKV0TMgltJg/getUpdates?timeout=60

const token = '1228851710:AAFWDS14GSttAM6s3VF_uiBFFKV0TMgltJg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/,msg =>{
   bot.sendMessage(msg.chat.id,'AHA');
});

