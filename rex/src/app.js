import "dotenv/config";
import express from "express";
import { interaction } from "./interaction.js";
import { VerifyDiscordRequest } from "./verify.js";

const app = express();
const PORT = process.env.REX_PORT || 3000;
app.use(
	express.json({ verify: VerifyDiscordRequest(process.env.REX_PUBLIC_KEY) })
);

app.post("/interactions", async function (req, res) {
	return interaction(req, res);
});

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
