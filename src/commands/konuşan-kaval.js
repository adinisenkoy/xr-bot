const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("konuşan-kaval")
    .setDescription("Türk Dil ve Edebiyatı Ders Kitabından Bir hikâyenin sesli anlatımını dinleyebilirsiniz."),
    run: async (client, interaction) => {
      interaction.reply(`Video: https://media.discordapp.net/attachments/1113926210251141140/1194002727651528855/InShot_20240108_222511711.mp4`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };
