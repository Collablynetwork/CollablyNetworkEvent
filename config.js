const BOT_API_KEY = '6335353291:AAHwopmee3eshn3CC5rCk5QpQvz7HMyVXgk';
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz8AStDePUMEBT2k5aq1QqRaSqS3_OV36mfpYogX1L2-O0Hjqn-l6EVTLkUgXG6RJsJbw/exec';

const projectTypes = [
  'CEX', 'Venture Capital', 'Market Maker', 'Launchpad', 'DEX', 'DeFi', 'BRC20',
  'NFT', 'SocialFi', 'Gaming', 'Metaverse', 'Wallet', 'Security Audit', 'DePIN',
  'RWA', 'AI', 'TON', 'Meme', 'Layer 0','Layer 1', 'Layer 2(s)', 'Layer 3', 'Angel Investor', 'OTC', 'Liquidity Provider', 'Dapp', 'Infrastructure', 
  'PaymentGateway', 'Quest Platform', 'Development', 'Design', 'Press Release', 'Marketing Firm', 'Consulting', 'Incubator', 'KOLs', 'Youtuber', 'Instagram Influencer', 'Twitter Influencer',  
  
];

const eventTypes = ['Token2049', 'Tobi&Brent', 'DeGen Summit', 'MaalChain', 'L3 & ZK Night', 'The Scaling AI Summit', 'Multichain Day', 'Borderless Summit', 'Meet your Meme', 'Aptos After Dark', 'DePIN Day', 'MEMECON', 'Devcon Thailand', 'IBW India', 'De.Fi World2024', 'None of the above'];

module.exports = { BOT_API_KEY, WEBHOOK_URL, projectTypes, eventTypes };
