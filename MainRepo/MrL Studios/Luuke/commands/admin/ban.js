const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bane o usuario selecionado.')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Membro para banir.')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Rasão pelo banimento.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
    async execute(interaction) {
        const target = interaction.options.getUser('target')
        const rasao = interaction.options.getString('reason') ?? 'Rasão não informada.'

        await interaction.reply(`Banindo: ${target} Motivo: ${rasao}`)
        await interaction.guild.members.ban(target)
    }
}