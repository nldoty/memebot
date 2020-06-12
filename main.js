
const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
// Configure logger settings
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
        message.channel.send('_bruh_');
    }
});

bot.on('message', (message) => {
    if (message.content.includes('69')) {
        message.react('🇳');
        message.react('🇮');
        message.react('🇨');
        message.react('🇪');
    }
});

bot.on('message', (message) => {
    if (message.content.toLowerCase().includes('mario')) {
        message.react('696169726971478107');
    }
});

bot.login(auth.token);