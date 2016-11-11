echo "Refreshing style guide"

cd /var/www/style-guide
sudo git pull
sudo npm install
sudo npm update
sudo npm run build
