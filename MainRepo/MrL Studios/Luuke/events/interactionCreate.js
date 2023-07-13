const { Events, Collection, Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.cooldown = new Collection()

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName)

        if (!command) {
            console.log(`Nenhum comando correspondente a ${interaction.commandName} foi encontrado.`)
            return;
        }
        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(`Erro ao executar ${interaction.commandName}`)
            console.error(error)
        }
    }
}
