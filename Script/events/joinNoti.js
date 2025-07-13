module.exports.config = {
  name: "joinnoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "nazrul",
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];

  const path = join(__dirname, "Nazrul", "font");
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
};

module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;

  // If bot is added
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`${global.config.BOTNAME || " "}`, threadID, api.getCurrentUserID());
    const fs = require("fs");

    return api.sendMessage(
      "চ্ঁলে্ঁ এ্ঁসে্ঁছি্ঁ —͟͟͞͞𝒗𝒐𝒊𝒄𝒆 𝒔𝒕𝒂𝒕𝒊𝒐𝒏-𝐁𝐎𝐓  এঁখঁনঁ তোঁমাঁদেঁরঁ সাঁথেঁ আঁড্ডাঁ দিঁবঁ..! ",
      threadID,
      () => api.sendMessage({
        body: `╔════•| ✿ |•════╗
আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ
╚════•| ✿ |•════╝
________________________
𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗
𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐬𝐡𝐚 𝐀𝐥𝐥𝐚𝐡 🌺❤️-!!

𝐓𝐨 𝐯𝐢𝐞𝐰 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬:
${global.config.PREFIX}Help
${global.config.PREFIX}Info
${global.config.PREFIX}Admin

★ অভিযোগ বা হেল্পের জন্য এডমিন F͜͡o͜͡r͜͡h͜͡a͜͡d͜͡   U͜͡d͜͡d͜͡i͜͡n͜͡ কে নক করতে পারেন ★
𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫:  https://m.me/ji.la.pi.6
𝐈𝐦𝐨 / 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 018*******04

⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ —͟͟͞𝒗𝒐𝒊𝒄𝒆 𝒔𝒕𝒂𝒕𝒊𝒐𝒏 -𝐁𝐎𝐓`,
        attachment: fs.createReadStream(__dirname + "/Nazrul/join.jpeg")
      }, threadID)
    );
  } else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      const path = join(__dirname, "Nazrul", "font");
      const pathGif = join(path, `${threadID}.gif`);

      if (!existsSync(path)) mkdirSync(path, { recursive: true });

      let mentions = [], nameArray = [], memLength = [], i = 0;
      for (let p of event.logMessageData.addedParticipants) {
        nameArray.push(p.fullName);
        mentions.push({ tag: p.fullName, id: p.userFbId });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      let msg = threadData.customJoin || 
`╔════•| ✿ |•════╗
আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ
╚════•| ✿ |•════╝
আপনাকে আমাদের গুরুপে স্বাগতম 🫶
আশা করি আপনি ভালো আছেন সুস্থ আছেন 

সবার সাথে সুন্দর করে কথা বলবেন আড্ডা দিবেন নিজের পরিচয় দিবেন তার পরে বাকিরা তাদের পরিচয় দিবে 

ধন্যবাদ আপনাকে💝🥀

{name}

আপনি এই গ্রুপের {soThanhVien} নম্বর মেম্বার

{threadName}

এডিমন প্যানেলের পক্ষ থেকে আপনাকে স্বাগতম 
🥰🥀 ᏔᎬᏞᏟϴᎷᎬ 🥀🥰 
┌────♣─────┐
—͟͟͞͞𝐕𝐨𝐢𝐜𝐞 𝐒͙𝐭𝐚𝐭𝐢𝐨𝐧 𝐁𝐎𝐓
└────♣─────┘

⋆✦⎯⎯⎯⎯⎯⎯⎯⎯✦⋆
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➢ 𝐅𝐚𝐫𝐡𝐚𝐝 𝐔𝐝𝐝𝐢𝐧`;

      msg = msg
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'You all' : 'Friend')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName);

      const randomFiles = readdirSync(path);
      let formPush;

      if (existsSync(pathGif)) {
        formPush = { body: msg, attachment: createReadStream(pathGif), mentions };
      } else if (randomFiles.length !== 0) {
        const randomFile = join(path, randomFiles[Math.floor(Math.random() * randomFiles.length)]);
        formPush = { body: msg, attachment: createReadStream(randomFile), mentions };
      } else {
        formPush = { body: msg, mentions };
      }

      return api.sendMessage(formPush, threadID);
    } catch (e) {
      return console.log("Join message error:", e);
    }
  }
};
