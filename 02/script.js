const animal = document.getElementById("animal");

let animalName = "beaver";

// Output with innerHTML
// animal.innerHTML = `<h1 class="text">${name}</h1>`;

// Output with innerText
// animal.innerText = `<h1 class="text">${name}</h1>`;

function onAlert() {
  alert(animalName + Date());
}

function onConfirm() {
  let isConfirm = confirm("Is beaver?");
  if (isConfirm) {
    animal.innerHTML = `<h1 class="text">${animalName}</h1>`;
    console.log(animalName);
  } else {
    animal.innerHTML = `<h1 class="text">dog</h1>`;
    console.log("dog");
  }
}

includeHTML();
