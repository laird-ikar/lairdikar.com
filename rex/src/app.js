import "dotenv/config";
import express from "express";
import { interaction } from "./interaction.js";
import { VerifyDiscordRequest } from "./utils.js";

const app = express();
const PORT = process.env.REX_PORT || 80;
app.use(
	express.json({ verify: VerifyDiscordRequest(process.env.REX_PUBLIC_KEY) })
);

app.get("/", (req, res) => {
	res.send("rex is online");
});

app.post("/interactions", (req, res) => {
	res.send("Some data");
	// return interaction(req, res);
});

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
