echo
date >> .logs
if git pull | grep -q 'Already up to date.'; then
	echo "No changes." >> .logs
else
	echo "Changes found." >> .logs
	echo "Restarting..." >> .logs
	docker compose -f /home/pi/Server/docker-compose.yml up --build -d
fi
echo "Done." >> .logs
