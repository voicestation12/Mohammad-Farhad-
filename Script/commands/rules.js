module.exports.config = {
    name: "rules",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Islamick Cyber Chat",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`💗 Asslamuwalaikum 💗
--🤙Your group rules
1. এডমিনের কথা শুনতে হবে ✅
2. কারো ইনবক্সে মেসেজ দিয়ে বিরক্ত করা যাবে না।
3. এই গ্রুপের কোন মেম্বারকে অন্য গ্রুপে এড দেওয়া যাবে না।
4. ১৮+ কোন পিক, ভিডিও বা কোন কথা বলা যাবে না। ( Only members)
5. কোনো গ্রুপের লিংক দেওয়া যাবে না।
6. নামাজের সময় গ্রুপ অফ রাখবেন
7. এডমিন ছাড়া কেউ everyone দিবেন না।
8. আমাদের পেইজ Farhad vai2.0 টি ফলো দিয়ে পাশেই থাকেন
9. ▢ ⏤͟͟͞͞𝘼𝙙𝙙𝙖 𝙂𝙘 ▢ 𝒗𝒐𝒊𝒄𝒆 𝒔𝒕𝒂𝒕𝒊𝒐𝒏▢-!!✨🧡`);
   var ZiaRein = [
"https://i.imgur.com/g47qNDT.jpeg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
