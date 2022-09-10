let output = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    for (var item of data) {
      output += `<div class="card"> 
                  <div class="container">
                  <img class="profile" src="http://placeimg.com/640/480/people?${Math.random()}"/>
                    <h4><b>id: ${item.id} ${item.name}</b></h4> 
                    <p>phone: ${item.phone}</p> 
                  </div>
                </div>`;
    }

    document.getElementById("myPage").innerHTML = output;
  });

includeHTML();
