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

const prompt = 'Welcome to Holberton School, what is your name?';
console.log(prompt);
process.stdin.once('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
})
// readline.question(prompt, (name) => {
//   // console.log(`Your name is: ${name}\r`);
//   readline.write(`Your name is: ${name}\r`)
//   process.stdout.write(`Your name is: ${name}\r`);
//   readline.close();
// });

process.on('SIGINT', () => {
  console.log('\rThis important software is now closing');
  process.exit();
});
