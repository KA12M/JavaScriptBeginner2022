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
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

let myStudents = [
  {
    id: 5,
    name: "bigtee",
    email: "bigtee@gmail.com",
    phone: "123",
  },
];
myStudents.push(new Student(1, "john", "john@gmail.com", "095959595"));
myStudents.push(new Student(2, "beaver", "beaver@gmail.com", "095959595"));
myStudents.push(new Student(3, "moss", "moss@gmail.com", "095959595"));
myStudents.push(new Student(4, "arm", "arm@gmail.com", "095959595"));

for (var item of myStudents) {
  output += `<div class="card"> 
              <div class="container">
                <h4><b>id: ${item.id} ${item.name}</b></h4> 
                <p>phone: ${item.phone}</p> 
              </div>
            </div>`;
}

document.getElementById("myPage").innerHTML = output;

console.log(myStudents);

includeHTML();
