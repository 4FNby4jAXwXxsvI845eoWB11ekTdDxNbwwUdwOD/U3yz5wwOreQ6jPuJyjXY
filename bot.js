const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`...`);  
});

client.on('ready', async() => {
var server = "514822456998101002"; //
var channel = "514822457706807312";//
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein**')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTE1MDc1Mjg4MDcwMzU2OTkz.Dtf1dQ.qQ_UUej9Zxthh-Djr8t4PVlitc0");