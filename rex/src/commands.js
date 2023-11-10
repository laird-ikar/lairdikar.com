import "dotenv/config";
import axios from "axios";

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

axios
	.post(
		`https://discord.com/api/v10/applications/${process.env.REX_APP_ID}/commands`,
		commands,
		{
			headers: {
				Authorization: `Bot ${process.env.REX_BOT_TOKEN}`,
			},
		}
	)
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => {
		console.error(err);
	});

export { command_list };
