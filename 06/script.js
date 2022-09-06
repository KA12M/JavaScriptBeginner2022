function calBMI(weight, height) {
  let cal = weight / (height / 100) ** 2;
  return cal;
}

// let x = calBMI(50, 175);

let output = "";

function showOutput(value) {
  output += `<h1>${value}</h1>`;

  if (value >= 30) output += `<h1>อ้วนมาก</h1>`;
  else if (value >= 25) output += `<h1>อ้วน</h1>`;
  else if (value >= 18.6) output += `<h1>น้ำหนักปกติ</h1>`;
  else if (value <= 18.5) output += `<h1>ผอมเกินไป</h1>`;

  document.getElementById("myPage").innerHTML = output;
}

let formBMI = document.getElementById("formBMI");
formBMI.onsubmit = function (e) {
  e.preventDefault(); 
  let weight = formBMI.elements['weight'].value;
  let height = formBMI.elements['height'].value;
  let x = calBMI(weight, height); 
  showOutput(x);
};

includeHTML();
