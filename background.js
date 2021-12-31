const button = document.querySelector("#button button");

button.addEventListener("click", function () {
    
    const randNum1 = Math.floor(Math.random() * 16777215).toString(16);
    const randNum2 = Math.floor(Math.random() * 16777215).toString(16);
    
    while (randNum1 === randNum2) {
        const randNum2 = Math.floor(Math.random() * 16777215).toString(16);
    }
    document.body.style.background = `linear-gradient(0deg, ${"#" + randNum1}, ${"#" + randNum2}`;
});