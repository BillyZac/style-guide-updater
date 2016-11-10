const { exec } = require('child_process')
const fs = require('fs')
const styles_repo_info = require('./styles_repo_info.json')

module.exports = commitInfo => {
  const { authorName, timestamp } = commitInfo
  styles_repo_info.authorName = authorName
  styles_repo_info.timestamp = timestamp

  fs.writeFileSync('./styles_repo_info.json', JSON.stringify(styles_repo_info))

  exec(`./refresh-style-guide.sh}`, (error, stdout, stderr) => {
    if (error) {
      console.log('=== EXEC ERROR ===');
      console.error(error);
      return;
    }
    console.log('=== STDOUT ===');
    console.log(stdout);
    console.log('=== STDERR ===');
    console.log(stderr);
  });
}
