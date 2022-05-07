let img = document.getElementById("img");
const diceRollButton = document.getElementById("diceRoll");




diceRollButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
        case 1:
            img.style.backgroundImage = "url('1.png')";
            break;

        case 2:
            img.style.backgroundImage = "url('2.png')";
            break;

        case 3:
            img.style.backgroundImage = "url('3.png')";
            break;

        case 4:
            img.style.backgroundImage = "url('4.png')";
            break;

        case 5:
            img.style.backgroundImage = "url('5.png')";
            break;

        case 6:
            img.style.backgroundImage = "url('6.png')";
            break;


        default:
            alert("We Faced Some Problem");
            break;
    }


});
