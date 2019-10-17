let buttons = document.querySelectorAll(".btn");

document.body.addEventListener('keydown', () => {
    buttons.forEach((element)=> {
        element.style.backgroundColor = "black";
    })
});

document.body.addEventListener('keyup', (event) => {
    buttons.forEach((element) => {
        if (element.innerText === event.key.toUpperCase()) {
            element.style.backgroundColor = "blue";
        }
    });
});
