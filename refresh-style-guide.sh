echo "Refreshing style guide"

cd /var/www/style-guide
git pull
rm -rf node_modules/
npm install
npm run build
