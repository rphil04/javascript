require("dotenv").config(); //initialize dotenv
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const tracked_channels = [
  "953650208852937138", // user1
//   "842236321529346886", // user2
  "856200132934057067", // user3
//   "896989320857308842", // group1
//   "075363001895731453", // group2
//   "772844895730097616", // group3
//   "015443408469336859", // Announcements
];

const delays = {
  "953650208852937138":120000, // user1
//   "842236321529346886":, // user2
  "856200132934057067":10000, // user3
//   "896989320857308842":, // group1
//   "075363001895731453":, // group2
//   "772844895730097616":, // group3
//   "015443408469336859":, // Announcements
    "default": 1000 // default delay is one second
}

const output_channels = [
  "896989320857308842", // General
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
