const { exec } = require('child_process')

module.exports = commitInfo => {
  console.log('==================');
  console.log('Got this commit:');
  console.log(commitInfo);
  console.log('==================');
  exec('./refresh-style-guide.sh', (error, stdout, stderr) => {
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
