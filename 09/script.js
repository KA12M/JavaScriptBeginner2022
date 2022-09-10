let myArray = ["cat", "dog"];
myArray.push("bat");
myArray.push("rabbit");
myArray.push("parrot");
myArray.push("rat");

myArray[0] = "แมว";

let output = "";
// for (var i = 0; i < myArray.length; i++) {
//   output += `<h1>${myArray[i]}</h1>`;
// }

// for (var item of myArray) {
//   output += `<h1>${item}</h1>`;
// }

class Student { 
  constructor(id, name, email, phone, profile) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.profile = profile;
  }
}

let myStudents = [
  new Student(1, "Jorge", "Customer-focused@gmail.com", "230-708-1551", `http://placeimg.com/640/480/people?${Math.random()}`),
];
for (var i = 0; i < 10; i++) {
  myStudents.push(new Student(i, "john" + i, "john@gmail.com", "230-708-1551", `http://placeimg.com/640/480/people?${Math.random()}`));
}

for (var item of myStudents) {
  output += `<div class="card"> 
              <div class="container">
                  <img class="profile" src=${item.profile}/>
                  <h4><b>id: ${item.id} ${item.name}</b></h4> 
                <p>phone: ${item.phone}</p> 
              </div>
            </div>`;
}

document.getElementById("myPage").innerHTML = output;

console.log(myStudents);

includeHTML();
