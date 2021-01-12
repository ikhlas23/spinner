// process.stdout.write('hello from spinner1.js... \rheyyy\n');
// \r brings it back to the same line 
// 
// console.log('hello from spinner1.js... \rheyyy\n');

// refactor so that we don';t have 
// create a for loop /
// create a time variable

let time = 100; 

const symbols = ['\r/   ','\r-   ','\r\\   ',]
const spinner = (arr) => { 
  let time = 100; 
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
    process.stdout.write(`${arr[i]}`) ; 
  }, time + i * 200);
  }
  setTimeout(() => {
   process.stdout.write('\n'); 
  }, 700);
}

spinner(symbols);
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, spinner());

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, spinner());

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, spinner());

// setTimeout(() => {
//   process.stdout.write('\n');  
// }, spinner());