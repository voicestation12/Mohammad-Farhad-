module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "given prefix detail",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body } = event;

  if ((this.config.credits) != "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭") {
    return api.sendMessage("Again change credit to 𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", threadID, messageID);
  }

  function out(data) {
    api.sendMessage(data, threadID, messageID);
  }

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = [
    "mpre", "mprefix", "prefix", "dấu lệnh", "prefix của bot là gì",
    "daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead",
    "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot",
    "how use bot", "where are the bots", "bot not working", "bot is offline", 
    "prefx", "prfix", "prifx", "perfix", "bot not talking", "where is bot"
  ];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() || body === i || str === body) {
      const prefix = threadSetting.PREFIX || global.config.PREFIX;
      return out(
        `This Is My Prefix ⇉ [ ${prefix} ]\n\n` +
        `𝐎𝐖𝐍𝐄𝐑:- ☞ 𝐅𝐚𝐫𝐡𝐚𝐝 𝐔𝐝𝐝𝐢𝐧\n` +
        `𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐃:- https://www.facebook.com/100041336504284`
      );
    }
  });
};

module.exports.run = async ({ event, api }) => {
  return api.sendMessage("error", event.threadID);
};
