require("dotenv").config(); //initialize dotenv
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const tracked_channels = [
  "852937138953650208", // Conqueror
//   "852934688422363216", // Kryptek
  "852934057620013067", // JB
//   "895730698932088842", // Demigods
//   "895730753630011453", // Heroes
//   "895730772844097616", // Ascending
//   "846933015443406859", // Announcements
];

const delays = {
  "852937138953650208":120000, // Conqueror
//   "852934688422363216":, // Kryptek
  "852934057620013067":10000, // JB
//   "895730698932088842":, // Demigods
//   "895730753630011453":, // Heroes
//   "895730772844097616":, // Ascending
//   "846933015443406859":, // Announcements
    "default": 1000 // default delay is one second
}

const output_channels = [
  "846739018228957224", // Trading Floor
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event Handlers
client.on("message", (msg) => {
  console.log(client);
  if (tracked_channels.includes(msg.channelId)) {
    for (const channel of output_channels) {
      setTimeout(function () {
        client.channels.cache
        .get(channel)
        .send("> " + msg.content + "\nfrom " + msg.member.displayName + " in <#" + msg.channelId + "> ");
      }, delays[msg.channelId] || delays["default"]);
    }
  }
});

// Login
client.login(process.env.CLIENT_TOKEN);