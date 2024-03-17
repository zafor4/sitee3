let low = 0;
let high = 9;

const btn = document.querySelector('.btn');
let attempt = 0;
let randomNumber = generateRandomNumber();
console.log(randomNumber);

btn.addEventListener('click', () => {
    let inputfld = document.querySelector('.input');
    let input = parseInt(document.querySelector('.input').value); 
    attempt += 1;
    let res1 = document.querySelector('#res1');
    let res2 = document.querySelector('#res2');
    inputfld.value = ""; 

    if (attempt === 3) {
        if (input!=randomNumber){
        res1.textContent = "Attempt Finish. You Lost";
        attempt = 0;
        randomNumber = generateRandomNumber();
        console.log(randomNumber) 
        }
        else {
            res1.textContent = "You Won";
            attempt = 0;
            randomNumber = generateRandomNumber(); 
            console.log(randomNumber)
        }
    } else if (input === randomNumber) {
        res1.textContent = "You Won";
        attempt = 0;
        randomNumber = generateRandomNumber(); 
        console.log(randomNumber)
    } else if (input > randomNumber) {
        res1.textContent = "Enter smaller value";
    } else if (input < randomNumber) {
        res1.textContent = "Enter greater value";
    }
});

function generateRandomNumber() {
    return Math.floor(Math.random() * (high - low + 1)) + low; 
}


const reset=document.querySelector('#reset')
reset.addEventListener('click',()=>{
    document.querySelector('.input').value=""
    document.querySelector('#res1').textContent=""
    attempt = 0;
    randomNumber = generateRandomNumber(); 
    console.log(randomNumber)
})