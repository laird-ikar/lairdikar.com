echo >> /var/log/lairdikar.com.log
date >> /var/log/lairdikar.com.log
pwd >> /var/log/lairdikar.com.log
if git pull | grep -q 'Already up to date.'; then
	echo "No changes." >> /var/log/lairdikar.com.log
else
	echo "Changes found." >> /var/log/lairdikar.com.log
	echo "Restarting..." >> /var/log/lairdikar.com.log
	docker compose -f /home/pi/Server/docker-compose.yml up --build -d
fi
echo "Done." >> /var/log/lairdikar.com.log
