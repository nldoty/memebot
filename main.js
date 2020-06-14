const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
const helpers = require('./helpers');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (message) => {
    if (message.content.toLowerCase() === 'bruh') {
        message.react('720857029723291748');
        message.channel.send('_bruh_');
    }
});

bot.on('message', (message) => {
    let content = helpers.strip(message.content);
    if (content.includes('69')) {
        message.react('🇳');
        message.react('🇮');
        message.react('🇨');
        message.react('🇪');
    }
});

bot.on('message', (message) => {
    let content = helpers.strip(message.content);
    if (content.toLowerCase().includes('mario')) {
        message.react('696169726971478107');
    }
});

bot.login(auth.token);