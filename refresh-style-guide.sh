echo "Refreshing style guide"

cd /var/www/style-guide
git pull
npm install
npm update
npm run build
