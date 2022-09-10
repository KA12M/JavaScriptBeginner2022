function calBMI(weight, height) {
  let x = weight / (height / 100) ** 2;
  return x;
}

let formBMI = document.getElementById("formBMI");

formBMI.onsubmit = function (e) {
  e.preventDefault();
  let isConfirm = confirm("Are you sure?");
  if (isConfirm == true) {
    let w = formBMI["weight"].value;
    let h = formBMI["height"].value;
    let myBMI = calBMI(w, h);
    console.log(myBMI);

    document.getElementById("myPage").innerHTML = `<h1>BMI: ${myBMI}</h1>`;
  }
};

function openSideBar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSideBar() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}
