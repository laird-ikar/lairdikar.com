const command_types = {
	CHAT_INPUT: 1,
	USER: 2,
	MESSAGE: 3,
};

const command_list = {
	test: {
		name: "test",
		description: "Test command",
		type: command_types.CHAT_INPUT,
		effect: () => {},
	},
};
const commands = Object.values(command_list).map((command) => {
	return {
		name: command.name,
		description: command.description,
		options: command.options,
		type: command.type,
	};
});

export { command_list };
export default commands;
