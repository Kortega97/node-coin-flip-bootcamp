document.querySelector('button').addEventListener('click',flipCoin)

let result = document.querySelector('h2')

function flipCoin(){
let flip = Math.floor(Math.random() * 2)+ 1
if(flip % 2 === 0 ){
    result.innerText = 'Heads'
}
else{ result.innerText = 'Tails'}
}