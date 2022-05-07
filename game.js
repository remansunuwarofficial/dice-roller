
let canvas  = document.createElement('canvas');
canvas.id = 'dice';

canvas.className = 'dicesection';

const diceappsection = document.getElementsByClassName('diceappsection')[0];
canvas.style.width = '256px';
canvas.style.height = '256px';
canvas.style.backgroundImage = 'url(Main.png)';
canvas.style.backgroundSize = 'cover';
canvas.style.border = '2px solid black';
canvas.style.padding = '20px';
canvas.style.borderRadius = '30px'
diceappsection.appendChild(canvas);

const container = document.getElementsByClassName('container')[0];


const rolldicebtn = document.getElementById('rolldice');

rolldicebtn.addEventListener('click', () => {
    let randomnumber = Math.floor(Math.random() * 6) + 1;

    switch(randomnumber){
        case 1:
            canvas.style.backgroundImage = 'url(1.png)';
        break;

        case 2:
            canvas.style.backgroundImage = 'url(2.png)';
        break;


        case 3:
            canvas.style.backgroundImage = 'url(3.png)';
        break;


        case 4:
            canvas.style.backgroundImage = 'url(4.png)';
        break;

        case 5:
            canvas.style.backgroundImage = 'url(5.png)';
        break;

        case 6:
            canvas.style.backgroundImage = 'url(6.png)';
        break;

        case 7:
            canvas.style.backgroundImage = 'url(7.png)';
        break;
        
        default:
            return false;
    }

});