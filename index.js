const TelegramBot = require('node-telegram-bot-api');
const { handleMessage } = require('./messageHandlers');
const { handleCallbackQuery } = require('./callbackQueryHandlers');
const { BOT_API_KEY } = require('./config');
const userData = require('./userData');

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

// Bot initialization
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  userData[chatId] = { stage: 'email' };
  bot.sendMessage(chatId, 'Please enter your Email ID:');
});

bot.on('message', (msg) => handleMessage(msg, bot));
bot.on('callback_query', (callbackQuery) => handleCallbackQuery(callbackQuery, bot));
bot.on('polling_error', (error) => {
  console.error('Polling error:', error.code, error.message);
});
