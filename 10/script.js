let output = "";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    for (var item of data) {
      output += `<div class="card"> 
                  <div class="container">
                    <h4><b>id: ${item.id} ${item.name}</b></h4> 
                    <p>phone: ${item.phone}</p> 
                  </div>
                </div>`;
    }

    document.getElementById("myPage").innerHTML = output;
  });

includeHTML();
