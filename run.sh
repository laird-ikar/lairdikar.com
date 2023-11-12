logfile=/home/pi/lairdikar.com.log
echo >> $logfile
date >> $logfile
pwd >> $logfile
if git pull | grep -q 'Already up to date.'; then
	echo "No changes." >> $logfile
else
	echo "Changes found." >> $logfile
	echo "Restarting..." >> $logfile
	docker compose -f /home/pi/Server/docker-compose.yml up --build -d
fi
echo "Done." >> $logfile
