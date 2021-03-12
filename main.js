// worked with dash Taniciea & zyri

document.querySelector('button').addEventListener('click',flipCoin)

let result = document.querySelector('h2')
let heads = document.querySelector('.heads')
let tails = document.querySelector('.tails')
let headsScore = 0
let tailsScore = 0
 
function flipCoin(){

let flip = Math.floor(Math.random() * 2)+ 1
if(flip % 2 === 0 ){
    result.innerText = 'Heads'
    headsScore++
    heads.innerText = headsScore
}
else{ 
result.innerText = 'Tails'
tailsScore++
tails.innerText = tailsScore
}
}