import { InteractionResponseType, InteractionType } from "discord-interactions";
import { command_list } from "./commands.js";

export const interaction = (req, res) => {
	const { type, data } = req.body;

	console.log("Interaction received:", req.type, req.body);
	if (type === InteractionType.PING) {
		return res.json({ type: InteractionResponseType.PONG });
	}

	if (type === InteractionType.APPLICATION_COMMAND) {
		const { command_name } = data;
		const command = command_list[command_name];
		if (command) {
			return command(req, res);
		} else {
			return res.send("Unknown command");
		}
	}

	return res.send("Unknown interaction");
};
