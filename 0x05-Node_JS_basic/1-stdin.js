const process = require('node:process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  process.stdin.setRawMode(false);
} else {
  process.on('beforeExit', () => {
    console.log('This important software is now closing');
    process.exit();
  });
}

const prompt = 'Welcome to Holberton School, what is your name?\n';
readline.question(prompt, (name) => {
  console.log(`Your name is: ${name}`);
  readline.close();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
