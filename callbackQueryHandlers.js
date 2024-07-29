const { projectTypes, eventTypes } = require('./config');
const { updateSelection, editMessage, sendPartnerProjectTypeOptions, sendEventTypeOptions, sendThankYouMessage, sendToGoogleSheet } = require('./utils');
const userData = require('./userData');

function handleCallbackQuery(callbackQuery, bot) {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;

  if (!userData[chatId]) {
    userData[chatId] = {};
  }

  if (callbackQuery.data.startsWith('projectType_')) {
    const projectType = callbackQuery.data.split('_')[1];
    updateSelection(chatId, 'projectType', projectType);
    editMessage(chatId, msg.message_id, 'What is your project type? You can select multiple options.', 'projectType', bot);
  } else if (callbackQuery.data === 'submitProjectType') {
    bot.sendMessage(chatId, `Selected project types: ${userData[chatId].projectType.join(', ')}`);
    userData[chatId].stage = 'partnerProjectType';
    setTimeout(() => sendPartnerProjectTypeOptions(chatId, bot), 500);
  } else if (callbackQuery.data.startsWith('partnerType_')) {
    const partnerType = callbackQuery.data.split('_')[1];
    updateSelection(chatId, 'partnerType', partnerType);
    editMessage(chatId, msg.message_id, 'What type of project would you like to partner with? You can select multiple options.', 'partnerType', bot);
  } else if (callbackQuery.data === 'submitPartnerType') {
    bot.sendMessage(chatId, `Selected partner project types: ${userData[chatId].partnerType.join(', ')}`);
    userData[chatId].stage = 'eventType';
    setTimeout(() => sendEventTypeOptions(chatId, bot), 500);
  } else if (callbackQuery.data.startsWith('eventType_')) {
    const eventType = callbackQuery.data.split('_')[1];
    updateSelection(chatId, 'eventType', eventType);
    editMessage(chatId, msg.message_id, 'Which events are you going to attend? You can select multiple options.', 'eventType', bot);
  } else if (callbackQuery.data === 'submitEventType') {
    bot.sendMessage(chatId, `Selected events: ${userData[chatId].eventType.join(', ')}`);
    setTimeout(() => sendThankYouMessage(chatId, bot), 500);

    // Prepare data to send to Google Sheets
    const data = {
      email: userData[chatId].email,
      projectName: userData[chatId].projectName,
      twitterHandle: userData[chatId].twitterHandle,
      telegramContactId: userData[chatId].telegramContactId,
      ...projectTypes.reduce((acc, type, index) => {
        acc[`projectType${index + 1}`] = userData[chatId].projectType[index] || '';
        return acc;
      }, {}),
      ...projectTypes.reduce((acc, type, index) => {
        acc[`partnerType${index + 1}`] = userData[chatId].partnerType[index] || '';
        return acc;
      }, {}),
      ...eventTypes.reduce((acc, type, index) => {
        acc[`eventType${index + 1}`] = userData[chatId].eventType[index] || '';
        return acc;
      }, {})
    };
    sendToGoogleSheet(data);
  }
}

module.exports = { handleCallbackQuery };
