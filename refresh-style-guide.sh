echo "Refreshing style guide"

cd /var/www/style-guide
sudo git pull
sudo rm -rf node_modules/
sudo npm install
sudo npm run build
