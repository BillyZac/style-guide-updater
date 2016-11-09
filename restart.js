const { exec } = require('child_process')

module.exports = commitInfo => {
  const { time, committer } = commitInfo
  exec(`./restart.sh ${time}, ${committer}`, (error, stdout, stderr) => {
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
