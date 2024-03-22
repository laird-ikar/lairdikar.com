cd /home/laird_ikar/lairdikar.com
logfile=/home/laird_ikar/lairdikar.com.log
echo >> $logfile
date >> $logfile
pwd >> $logfile
if git pull --recurse-submodules | grep -q 'Already up to date.' && docker ps | grep -q 'nginx' && [[ $(git submodule update --remote) ]];  then
	echo "No changes." >> $logfile
else
	echo "Changes found." >> $logfile
	echo "Restarting..." >> $logfile
	docker compose -f /home/laird_ikar/lairdikar.com/docker-compose.yml up --build -d
	git add -u && git commit -m "automatic update" && git push
fi
echo "Done." >> $logfile
