const BOT_API_KEY = '7484367576:AAE5abSAv0kPlpLZX3FeO6ZmcTDAz3lBhqI';
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz8AStDePUMEBT2k5aq1QqRaSqS3_OV36mfpYogX1L2-O0Hjqn-l6EVTLkUgXG6RJsJbw/exec';

const projectTypes = [
  'CEX', 'Venture Capital', 'Market Maker', 'Launchpad', 'DEX', 'DeFi', 'Dapp',
  'NFT', 'DAO', 'Gaming', 'Metaverse', 'Wallet', 'Security Audit', 'DePIN',
  'RWA', 'AI', 'TON', 'Meme'
];

const eventTypes = ['Token2049', 'Tobi', 'Degan Summit', 'None of the above'];

module.exports = { BOT_API_KEY, WEBHOOK_URL, projectTypes, eventTypes };
