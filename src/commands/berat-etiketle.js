const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("berat-etiketle")
    .setDescription("Beratı etiketlersiniz"),
    run: async (client, interaction) => {
      interaction.reply(`<@788149155197354005>, gay erenin seni çağırdı çabuk bakmalısın.`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };
