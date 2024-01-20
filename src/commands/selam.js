const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("selam")
    .setDescription("yardım komutu"),
    run: async (client, interaction) => {
      interaction.reply(`Selam kanka, sana nasıl yardımcı olabilirim? yardıma ihtiyacın varsa slash komutlarında bir sürü komut var, ona bak. **__orda sana yardımcı olma garantim %100 😀__**`)
      // komuta seçenekler eklemek istersen guide: https://discordjs.guide/interactions/slash-commands.html#options
    }
 };
