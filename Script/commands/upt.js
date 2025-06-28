const axios = require("axios");

module.exports.config = {
 name: "upt",
 version: "1.0.0",
 hasPermission: 0,
 credits: "Shaon Ahmed",
 description: "Create UptimeRobot monitor using API",
 commandCategory: "system",
 usages: "{p}upt [name] [url]",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
 if (args.length < 2) {
 return api.sendMessage("❌ Usage:\n/upt [name] [url]", event.threadID, event.messageID);
 }

 const name = args[0];
 const url = args[1];
 const interval = 300; // auto default 5 minutes

 if (!url.startsWith("http")) {
 return api.sendMessage("❌ Please provide a valid URL!", event.threadID, event.messageID);
 }

 try {
 const res = await axios.get("https://web-api-delta.vercel.app/upt", {
 params: { name, url, interval }
 });

 const result = res.data;

 if (result.error) {
 return api.sendMessage(`⚠️ Error: ${result.error}`, event.threadID, event.messageID);
 }

 const monitor = result.data;
 const msg = `✅ Monitor Created!\n──────────────\n🆔 ID: ${monitor.id}\n📛 Name: ${monitor.name}\n🔗 URL: ${monitor.url}\n⏱️ Interval: ${monitor.interval / 60} mins\n📶 Status: ${monitor.status == 1 ? "Active ✅" : "Inactive ❌"}`;

 return api.sendMessage(msg, event.threadID, event.messageID);
 } catch (e) {
 return api.sendMessage(`🚫 API request failed!\n${e.message}`, event.threadID, event.messageID);
 }
};
