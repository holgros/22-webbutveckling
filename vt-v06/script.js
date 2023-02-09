window.onload = () => {
    addEventListener("mousemove", (event) => {
        console.log(
          `Musen är nu på koordinaterna (${event.clientX},${event.clientY})`
        );
        var w = window.innerWidth;
        var h = window.innerHeight;
        var colourCode1 = Math.floor(255*event.clientX/w);
        var colourCode2 = Math.floor(255*event.clientY/h);
        document.body.style.backgroundColor = `rgb(${colourCode1},${colourCode2},255)`;
        document.getElementById("text").innerText = `Colour: ${colourCode1}, ${colourCode2}, 255`;
    });
};