const { exec } = require('child_process')
const fs = require('fs')
const styles_repo_info = require('./styles_repo_info.json')

module.exports = commitInfo => {
  const { time, committer } = commitInfo
  styles_repo_info.time = time
  styles_repo_info.committer = committer

  fs.writeFileSync('./styles_repo_info.json', JSON.stringify(styles_repo_info))

  exec(`./restart.sh ${JSON.stringify(styles_repo_info)}`, (error, stdout, stderr) => {
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
