//Här är en array med objekt.
//Arrayen representerar en varukorg på en shoppingsajt.
//Varje objekt i arrayen representerar en produkt.
const cart = [
  // hak-parentes för att definiera en array
  {
    productId: 1,
    productImage: "images/product_xlarge_jordans.jpg",
    name: "Jordan Brand Jordan 5 Retro",
    price: 2249,
    quantity: 1,
  }, // ett komma mellan varje produkt eftersom det är en array.
  {
    productId: 2,
    productImage: "images/product_xlarge_asics.jpg",
    name: "ASICS SportStyle Gel-Venture 6",
    price: 899,
    quantity: 1,
  },
  {
    productId: 3,
    productImage: "images/product_xlarge_socks.jpg",
    name: "Sport Socks",
    price: 149,
    quantity: 2,
  },
]

// Här hämtas en referens till <div id="shopping-cart-container">
// och läggs i variabeln shoppingCartContainer
let shoppingCartContainer = document.getElementById("shopping-cart-container")

/* 
  Här är en loop som går igenom alla produkter i arrayen cart.
  Modifiera koden i den anonyma funktionen för att lösa uppgifterna.
*/

for (let index = 0; index < cart.length; index++) {
  const product = cart[index]
  // Här är en rad som skriver ut produktens namn i konsollen.
  // Öppna konsollen i webbläsaren (med t.ex. Shift + CTRL + J) för att se utskrifterna.
  console.log(product.name)

  // Så här kan man skriva ut en produkts namn i div:en.
  // Det fungerar dock inte som tänkt. Det är bara sista produktens namn som syns i sidan...
  // Det måste du fixa!
  shoppingCartContainer.innerText = product.name
}
