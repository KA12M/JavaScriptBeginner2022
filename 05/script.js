let num = 10;
let output = "";

// for loop
// for (let i = 0; i < num; i++) {
//   output += `<h1 class="text">loop count: ${i}</h1>`;
// }

// let i = 0;
// while (i < num) {
//   output += `<h1 class="text">loop count: ${i}</h1>`;
//   i++;
// }

let i = 0;
do  {
  output += `<h1 class="text">loop count: ${i}</h1>`; 
  i++;
}
while (i < num);


document.getElementById("myPage").innerHTML = output;

includeHTML();
