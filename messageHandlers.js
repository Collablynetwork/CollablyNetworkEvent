const { projectTypes } = require('./config');
const { sendProjectTypeOptions } = require('./utils');
const userData = require('./userData');

function handleMessage(msg, bot) {
  const chatId = msg.chat.id;

  if (!userData[chatId]) {
    userData[chatId] = { stage: 'email' };
  }

  const stage = userData[chatId].stage;

  if (stage === 'email' && !msg.text.startsWith('/')) {
    userData[chatId].email = msg.text;
    userData[chatId].stage = 'projectName';
    bot.sendMessage(chatId, 'Please enter your project name:');
  } else if (stage === 'projectName') {
    userData[chatId].projectName = msg.text;
    userData[chatId].stage = 'twitterHandle';
    bot.sendMessage(chatId, 'Please enter your Project Twitter Handle:');
  } else if (stage === 'twitterHandle') {
    userData[chatId].twitterHandle = msg.text;
    userData[chatId].stage = 'telegramContactId';
    bot.sendMessage(chatId, 'Please provide your Telegram Contact ID:');
  } else if (stage === 'telegramContactId') {
    userData[chatId].telegramContactId = msg.text;
    userData[chatId].stage = 'projectType';
    setTimeout(() => sendProjectTypeOptions(chatId, bot), 10);
  }
}

module.exports = { handleMessage };
