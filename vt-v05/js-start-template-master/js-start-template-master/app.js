// Den här raden skriver till konsollen i webbläsaren. Konsollen syns om man öppnar Developer Tools.
console.log("Hello world!")

// Den här raden använder objektet document, som webbläsaren skapat för att vi ska
// kunna manipulera DOMen. Vi använder document för att hämta en referens till logotypen i sidan och spara den i ev variabel.
var logo = document.getElementById("js-logo")

console.log("logo-objektet:", logo)


/* 
  Nu kan vi använda referensen till objektet/elementet i variabeln
  för att ändra objektet i webbläsaren.
*/

// Vi kan ändra style direkt på objektet/elementet.
logo.style.borderRadius = "10px"

// Vi kan t.ex. lägga till en funktion som körs när användaren
// klickar på objektet. En så kallad event-lyssnare.
logo.onclick = function (e) {

  // Man kan toggla en css-klass på ett objekt.
  logo.classList.toggle("big-logo")

  // Man kan hämta andra objekt/element ur DOMen och manipulera även dem.
  // Här togglar vi en css-klass på bodyn.
  document.body.classList.toggle("pitch-black")
}