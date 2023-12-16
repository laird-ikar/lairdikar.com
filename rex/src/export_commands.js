import "dotenv/config";
import axios from "axios";
import commands from "./commands";

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
