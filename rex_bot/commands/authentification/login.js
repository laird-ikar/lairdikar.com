const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("login")
		.setDescription(
			"Allow you to log into R.E.X. with your 42intra account."
		),
	async execute(interaction) {
		const userID = interaction.user.id;
		const content = `You are logged in as ${userID}.`;
		await interaction.reply({
			content: content,
			ephemeral: true,
		});
	},
};
