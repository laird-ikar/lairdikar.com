cd /home/laird_ikar/lairdikar.com
logfile=/home/laird_ikar/lairdikar.com.log
echo >> $logfile
date >> $logfile
pwd >> $logfile
if git pull --recurse-submodules | grep -q 'Already up to date.' && docker ps | grep -q 'nginx' ;  then
	echo "No changes." >> $logfile
else
	echo "Changes found." >> $logfile
	echo "Restarting..." >> $logfile
	docker compose -f /home/laird_ikar/lairdikar.com/docker-compose.yml up --build -d
fi
echo "Done." >> $logfile
