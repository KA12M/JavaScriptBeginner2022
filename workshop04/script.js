function openSideBar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSideBar() {
  document.getElementById("mySidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}

let output = "";

async function GetData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let MyUsers = await response.json();
  console.log(MyUsers); 

  for (let item of MyUsers) {
    item.profile = "http://placeimg.com/640/480/people?" + Math.random();
    
    output += `<div class="card">
    <div class="container">
        <img src="${item.profile}" alt="" class="profile">
        <h4>id: ${item.id} name: ${item.name}</h4>
        <p>phone: ${item.phone}</p>
        <p>email: ${item.email}</p>
      </div>
    </div>`;
  }

  document.getElementById("myPage").innerHTML = output;
} 


 
