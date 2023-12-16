import "dotenv/config";
import fetch from "node-fetch";
import { verifyKey } from "discord-interactions";

export function VerifyDiscordRequest(clientKey) {
	return function (req, res, buf, encoding) {
		console.log(req.data);
		const signature = req.get("X-Signature-Ed25519");
		const timestamp = req.get("X-Signature-Timestamp");

		const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
		if (!isValidRequest) {
			res.status(401).send("Bad request signature");
			throw new Error("Bad request signature");
		}
	};
}
