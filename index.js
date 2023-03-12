// Code your solutions in this file
const array = [];

function writeCards(names, event){
    for(let i=0;i<names.length;i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        array.push(message);    
    }
    return array;
}

function countDown(){
    let num = 10;
    while(num >= 0){
        
        console.log(num);
        num--;
    }
}