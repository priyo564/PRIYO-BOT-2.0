const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Priyo Bokasoda")==0 || event.body.indexOf("Priyo mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("Priyo nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Priyo re chudi")==0 || event.body.indexOf("priyo re chod")==0 || event.body.indexOf("Priyo Abal")==0 || event.body.indexOf("Priyo Boakachoda")==0 || event.body.indexOf("Priyo madarchod")==0 || event.body.indexOf("Priyo re chudi")==0 || event.body.indexOf("Priyo Bokachoda")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস PRIYO চু*দা বাদ দিছে🤣\nPRIYO এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
