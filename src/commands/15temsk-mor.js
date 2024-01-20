const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("15temsk-mor")
    .setDescription("İstanbul 15 Temmuz Şehitler Köprüsü'nün LED aydınlatmalı Mor Hali."),
    run: async (client, interaction) => {
      interaction.reply(`Resim: https://namazvakitleri.live/resimler/istanbul/15temsk-mor.png`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };
