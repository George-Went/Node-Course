// --------------
// Loops
// --------------


// for statments 
// Repeats unitl a specific condition is false
console.log('For Loop')
for (let step = 1; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(step);
}


// do ... while staements 
// Repeats until a specific condition is false 
// statement is executed before codition is checked 
console.log('Do .. while Loop')
let i = 0;
do {
  i += 1;           // += means is incremental on its previous value 
  console.log(i);
} while (i < 5);


// while statement 
// executes a condition as long as the condition evaluates to true 
console.log('While Loop')
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log('n: ' + n ,' x: ' + x)
}

