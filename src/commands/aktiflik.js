const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aktiflik")
    .setDescription("bot aktif olur inş"),
    run: async (client, interaction) => {
      interaction.reply(`inş olmuştur aktif`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };
