let btn = document.getElementById("myButton")
btn.onclick = function (event) {
  console.log("Klickade på knappen.")
}

btn = document.getElementById("myButton2")
btn.addEventListener("click", function (event) {
    console.log("Klickade på knappen.")
    console.log(event);
  })
  

window.addEventListener("keypress", function(event) {
    console.log("Tangent nedtryckt", event.key)
})

// Hämta referens till alla element med en klass.
// getElementsByClassName() returnerar en collection att loopa över.
let buttons = document.getElementsByClassName("buy")

// Loopa igenom alla knappar.
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  // Lägg till eventlyssnare på knappen.
  button.addEventListener("click", function (event) {
    console.log("En köpknapp klickades.")
  })
}

  