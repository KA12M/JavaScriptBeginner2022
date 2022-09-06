let showGrade = document.getElementById("showGrade");

let point = 81;
let grade;

if (point >= 80) {
  grade = "A";
} else if (point >= 70) {
  grade = "B";
} else if (point >= 60) {
  grade = "C";
} else if (point >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(grade);
showGrade.innerHTML = `<h1>grade: ${grade}</h1>`;

includeHTML();