const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Fornece informaçoes sobre o usuario.'),
    async execute(interaction) {
        await interaction.reply(`Esse comando foi iniciado pelo ${interaction.user.username}, Ele entrou em ${interaction.member.joinedAt}`)
    },
}