if git pull | grep -q 'Already up to date.'; then
	echo "No changes."
else
	echo "Changes found."
	echo "Restarting..."
	docker compose -f /home/pi/Server/docker-compose.yml up --build -d
fi
echo "Done."
