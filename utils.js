const axios = require('axios');
const { projectTypes, eventTypes, WEBHOOK_URL } = require('./config');
const userData = require('./userData');

function sendProjectTypeOptions(chatId, bot) {
  const options = projectTypes.map(type => ({
    text: userData[chatId].projectType && userData[chatId].projectType.includes(type) ? `✅ ${type}` : type,
    callback_data: `projectType_${type}`
  }));

  const keyboard = [];
  for (let i = 0; i < options.length; i += 3) {
    keyboard.push(options.slice(i, i + 3));
  }
  keyboard.push([{ text: '◀Submit▶', callback_data: 'submitProjectType' }]);

  bot.sendMessage(chatId, 'What is your project type? You can select multiple options.', {
    reply_markup: { inline_keyboard: keyboard },
  });
}

function sendPartnerProjectTypeOptions(chatId, bot) {
  const options = projectTypes.map(type => ({
    text: userData[chatId].partnerType && userData[chatId].partnerType.includes(type) ? `✅ ${type}` : type,
    callback_data: `partnerType_${type}`
  }));

  const keyboard = [];
  for (let i = 0; i < options.length; i += 3) {
    keyboard.push(options.slice(i, i + 3));
  }
  keyboard.push([{ text: '◀Submit▶', callback_data: 'submitPartnerType' }]);

  bot.sendMessage(chatId, 'What type of project would you like to partner with? You can select multiple options.', {
    reply_markup: { inline_keyboard: keyboard },
  });
}

function sendEventTypeOptions(chatId, bot) {
  const options = eventTypes.map(type => ({
    text: userData[chatId].eventType && userData[chatId].eventType.includes(type) ? `✅ ${type}` : type,
    callback_data: `eventType_${type}`
  }));

  const keyboard = [];
  for (let i = 0; i < options.length; i += 3) {
    keyboard.push(options.slice(i, i + 3));
  }
  keyboard.push([{ text: '◀Submit▶', callback_data: 'submitEventType' }]);

  bot.sendMessage(chatId, 'Which events are you going to attend? You can select multiple options.', {
    reply_markup: { inline_keyboard: keyboard },
  });
}

function updateSelection(chatId, type, selection) {
  if (!userData[chatId][type]) {
    userData[chatId][type] = [];
  }

  if (userData[chatId][type].includes(selection)) {
    userData[chatId][type] = userData[chatId][type].filter(item => item !== selection);
  } else {
    userData[chatId][type].push(selection);
    // Sort the selected items to maintain the order as in projectTypes
    userData[chatId][type].sort((a, b) => projectTypes.indexOf(a) - projectTypes.indexOf(b));
  }
}

function editMessage(chatId, messageId, text, type, bot) {
  const options = type === 'eventType' ? eventTypes : projectTypes;
  const optionButtons = options.map(option => ({
    text: userData[chatId][type] && userData[chatId][type].includes(option) ? `✅ ${option}` : option,
    callback_data: `${type}_${option}`
  }));

  const keyboard = [];
  for (let i = 0; i < optionButtons.length; i += 3) {
    keyboard.push(optionButtons.slice(i, i + 3));
  }
  keyboard.push([{ text: '◀Submit▶', callback_data: `submit${type.charAt(0).toUpperCase() + type.slice(1)}` }]);

  bot.editMessageText(text, {
    chat_id: chatId,
    message_id: messageId,
    reply_markup: { inline_keyboard: keyboard }
  });
}

function sendThankYouMessage(chatId, bot) {
bot.sendMessage(chatId, 'Thank you for submitting the form. Please join @collablynetworkevent group for events update.\n\nEvent details and potential partners will be shared during events based on your preferences.');
}

function sendToGoogleSheet(data) {
  axios.post(WEBHOOK_URL, data)
    .then(response => {
      console.log('Data sent to Google Sheet:', response.data);
    })
    .catch(error => {
      console.error('Error sending data to Google Sheet:', error);
    });
}

module.exports = {
  sendProjectTypeOptions,
  sendPartnerProjectTypeOptions,
  sendEventTypeOptions,
  updateSelection,
  editMessage,
  sendThankYouMessage,
  sendToGoogleSheet
};
