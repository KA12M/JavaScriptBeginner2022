let product = {
  name: "Coffee1",
  price: 199,
  stock: 10,
  category: {
    id: 2,
    name: "black coffee",
  },
};

product.description = "Coffee feel good!";

product.price = 89;

console.log(product.name);
console.log(product.price);
console.log(product.description);
console.log(product);

// output to html page
let output = "";

output += `<h1 class="text">${product.name}</h1>`;
output += `<h1 class="text">${product.price}</h1>`;
output += `<h1 class="text">${product.stock}</h1>`;
output += `<h1 class="text">${product.category.name}</h1>`;

document.getElementById("myPage").innerHTML = output; 

includeHTML();
