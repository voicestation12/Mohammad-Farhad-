const axios = require("axios");

module.exports.config = {
 name: "nagadf",
 version: "1.0",
 hasPermssion: 0,
 credits: "ULLASH",
 description: "Create a fake Nagad screenshot",
 usePrefix: true,
 prefix: true,
 commandCategory: "Fun",
 usages: "<number> - <transaction ID> - <amount> - <charge>",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
 const input = args.join(" ");
 if (!input.includes("-")) {
 return api.sendMessage(
 `❌| Wrong format!\nUse: ${global.config.PREFIX}nagadf 019xxxxxxxx - TXN12345 - 5000 - 10`,
 event.threadID,
 event.messageID
 );
 }

 const [numberRaw, transactionRaw, amountRaw, chargeRaw] = input.split("-");
 const number = numberRaw.trim();
 const transaction = transactionRaw.trim();
 const amount = chargeRaw ? amountRaw.trim() : "0";
 const charge = chargeRaw ? chargeRaw.trim() : "0";
 const total = (parseFloat(amount) + parseFloat(charge)).toFixed(2);

 const url = `https://masterapi.site/api/nagadf.php?number=${encodeURIComponent(number)}&transaction=${encodeURIComponent(transaction)}&amount=${encodeURIComponent(amount)}&charge=${encodeURIComponent(charge)}&total=${encodeURIComponent(total)}`;

 api.sendMessage(
 `📤 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗻𝗴 𝗳𝗮𝗸𝗲 𝗡𝗮𝗴𝗮𝗱 𝘀𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁... 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 🕐`,
 event.threadID,
 (err, info) =>
 setTimeout(() => {
 api.unsendMessage(info.messageID);
 }, 4000)
 );

 try {
 const response = await axios.get(url, { responseType: "stream" });
 const attachment = response.data;

 api.sendMessage(
 {
 body: `━━━━━━━━━━━━━━━━━━━━━━━
📸 𝗙𝗮𝗸𝗲 𝗡𝗔𝗚𝗔𝗗 𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗 ✅
━━━━━━━━━━━━━━━━━━━━━━━

📱 𝗠𝗼𝗯𝗶𝗹𝗲 𝗡𝘂𝗺𝗯𝗲𝗿 : ${number}
🧾 𝗧𝗿𝗮𝗻𝘀𝗮𝗰𝘁𝗶𝗼𝗻 𝗜𝗗 : ${transaction}
💵 𝗔𝗺𝗼𝘂𝗻𝘁 : ৳${amount}
💸 𝗖𝗵𝗮𝗿𝗴𝗲 : ৳${charge}
💰 𝗧𝗼𝘁𝗮𝗹 : ৳${total}

📤 𝗬𝗼𝘂𝗿 𝗳𝗮𝗸𝗲 𝗡𝗮𝗴𝗮𝗱 𝗿𝗲𝗰𝗲𝗶𝗽𝘁 𝗶𝘀 𝗿𝗲𝗮𝗱𝘆!

━━━━━━━━━━━━━━━━━━━━━━━
🛠 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆: —͟͟͞͞𝐕𝐨𝐢𝐜𝐞 𝐒𝐭𝐚𝐭𝐢𝐨𝐧 𝐁𝐨𝐭
━━━━━━━━━━━━━━━━━━━━━━━`,
 attachment,
 },
 event.threadID,
 event.messageID
 );
 } catch (err) {
 console.error(err);
 api.sendMessage(
 "❌ An error occurred while generating the screenshot.",
 event.threadID,
 event.messageID
 );
 }
};
