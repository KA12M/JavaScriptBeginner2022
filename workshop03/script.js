function openSideBar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSideBar() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}

class User {
  constructor(id, name, email, phone, profile) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.profile = profile;
  }
}

let MyUsers = [];

for (let i = 0; i<10; i++) {
  MyUsers.push(new User(i, "John"+i, i*100 + "John@gmail.com", "234-234234-4", "http://placeimg.com/640/480/people?"+i));
};

let output = "";

for (let item of MyUsers) {
  output += `<div class="card">
  <div class="container">
      <img src="${item.profile}" alt="" class="profile">
      <h4>id: ${item.id} name: ${item.name}</h4>
      <p>phone: ${item.phone}</p>
      <p>email: ${item.email}</p>
  </div>
</div>`;
};

document.getElementById("myPage").innerHTML = output;

console.log(MyUsers);
