let output = "";

class Student {
  constructor(firstName, lastName, birthday, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.age = age;
  }

  addYearAge(){
    this.age += " ปี";
  }

  showData() {
    output += `<h1>${this.firstName}</h1>`;
    output += `<h1>${this.lastName}</h1>`;
    output += `<h1>${this.age}</h1>`;
  }
}

let stu01 = new Student("Cat", "meow", 2545-01-01, 10);
let stu02 = new Student("Chicken", "jib", 2549-01-01, 2);
stu01.addYearAge();
stu01.showData();

document.getElementById("myPage").innerHTML = output;

includeHTML();
