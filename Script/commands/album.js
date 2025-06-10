module.exports.config = {
  'name': "album",
  'version': "1.0.0",
  'hasPermission': 0x0,
  'credits': "Shaon × ULLASH",
  'description': "Send a random sad video",
  'commandCategory': "media",
  'usages': '',
  'cooldowns': 0x5
};
module.exports.run = async function ({
  event: _0x4754c9,
  api: _0x3c14ee,
  args: _0x3bd865
}) {
  if (!_0x3bd865[0]) {
    return _0x3c14ee.sendMessage("╭─── 🎥 *𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾* 🎥 ───╮\n\n🔹 1️⃣  𝙸𝚜𝚕𝚊𝚖𝚒𝚌 𝚅𝚒𝚍𝚎𝚘\n🔹 2️⃣  𝙰𝚗𝚒𝚖𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 3️⃣  𝚂𝚑𝚊𝚒𝚛𝚒 𝚅𝚒𝚍𝚎𝚘\n🔹 4️⃣  𝚂𝚑𝚘𝚛𝚝 𝚅𝚒𝚍𝚎𝚘\n🔹 5️⃣  𝚂𝚊𝚍 𝚅𝚒𝚍𝚎𝚘\n🔹 6️⃣  𝚂𝚝𝚊𝚝𝚞𝚜 𝚅𝚒𝚍𝚎𝚘\n🔹 7️⃣  𝙵𝚘𝚘𝚝𝚋𝚊𝚕𝚕 𝚅𝚒𝚍𝚎𝚘\n🔹 8️⃣  𝙵𝚞𝚗𝚗𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 9️⃣  𝙻𝚘𝚟𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 🔟  𝙲𝙿𝙻 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣1️⃣  𝙱𝚊𝚋𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣2️⃣  𝙵𝚛𝚎𝚎 𝙵𝚒𝚛𝚎 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣3️⃣  𝙻𝚘𝚏𝚒 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣4️⃣  𝙷𝚊𝚙𝚙𝚢 𝚅𝚒𝚍𝚎𝚘\n🔹 1️⃣5️⃣  𝙷𝚞𝚖𝚊𝚢𝚞𝚗 𝚂𝚒𝚛 𝚅𝚒𝚍𝚎𝚘\n\n🔥 *𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾𝚂 Ban * \n\n Notes:- সাময়িক বিনোদনের জন্য,আমরা নিজেকে কত নিকৃষ্ট বানিয়ে পেলতেছি \n\n💠 —͟͟͞͞𝐕𝐨𝐢𝐜𝐞 𝐒𝐭𝐚𝐭𝐢𝐨𝐧 𝐁𝐨𝐭\n\n━━━━━━━━━━━━━━━━━━━━━\n\nTell me how many video numbers you want to see by replaying this message", _0x4754c9.threadID, (_0x2656b0, _0x44cb65) => {
      global.client.handleReply.push({
        'name': this.config.name,
        'messageID': _0x44cb65.messageID,
        'author': _0x4754c9.senderID,
        'type': "create"
      });
    }, _0x4754c9.messageID);
  }
};
module.exports.handleReply = async ({
  api: _0x266770,
  event: _0x569407,
  client: _0x5efa37,
  handleReply: _0x5c2591,
  Currencies: _0x246a16,
  Users: _0x5bb35e,
  Threads: _0x5c4ea5
}) => {
  var {
    p: _0x146c43,
    h: _0x31189b
  } = await linkanh(_0x569407.body);
  if ("create" === _0x5c2591.type) {
    const _0x48adce = await _0x146c43.get(_0x31189b);
    const _0x1f8534 = _0x48adce.data.data;
    const _0x3bd73c = _0x48adce.data.shaon;
    const _0x364bfd = _0x48adce.data.count;
    let _0x665b2b = (await _0x146c43.get(_0x1f8534, {
      'responseType': "stream"
    })).data;
    return _0x266770.sendMessage({
      'body': '🟡' + _0x3bd73c + "\n𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:" + _0x364bfd + "\n𝙰 𝙿 𝙸  ™📛",
      'attachment': _0x665b2b
    }, _0x569407.threadID, _0x569407.messageID);
  }
};
async function linkanh(_0xeb54a8) {
  const _0x5be36a = require("axios");
  const _0x13c1a5 = await _0x5be36a.get("https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json");
  const _0x2f5b77 = _0x13c1a5.data.api;
  const _0x7acf9a = {
    '1': "/video/islam",
    '2': "/video/anime",
    '3': "/video/shairi",
    '4': "/video/short",
    '5': "/video/sad",
    '6': "/video/status",
    '7': "/video/football",
    '8': "/video/funny",
    '9': "/video/love",
    '10': "/video/cpl",
    '11': "/video/baby",
    '12': "/video/kosto",
    '13': "/video/lofi",
    '14': "/video/happy",
    '15': "/video/humaiyun"
  };
  const _0x16a896 = '' + _0x2f5b77 + _0x7acf9a[_0xeb54a8];
  return {
    'p': _0x5be36a,
    'h': _0x16a896
  };
}
