const BOT_API_KEY = '6335353291:AAHwopmee3eshn3CC5rCk5QpQvz7HMyVXgk';
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz8AStDePUMEBT2k5aq1QqRaSqS3_OV36mfpYogX1L2-O0Hjqn-l6EVTLkUgXG6RJsJbw/exec';

const projectTypes = [
  'CEX', 'Venture Capital', 'Market Maker', 'Launchpad', 'DEX', 'DeFi', 'BRC20',
  'NFT', 'SocialFi', 'Gaming', 'Metaverse', 'Wallet', 'Security Audit', 'DePIN',
  'RWA', 'AI', 'TON', 'Meme', 'Layer 0','Layer 1', 'Layer 2(s)', 'Layer 3', 'Angel Investor', 'OTC', 'Liquidity Provider', 'Dapp', 'Infrastructure', 
  'PaymentGateway', 'Quest Platform', 'Development', 'Design', 'Consulting', 'Incubator', 'KOLs', 'Press Release', 'Marketing Firm',
  
];

const eventTypes = ['Token2049', 'Tobi&Brent', 'DeGen Summit', 'MaalChain', 'None of the above'];

module.exports = { BOT_API_KEY, WEBHOOK_URL, projectTypes, eventTypes };
