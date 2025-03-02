// Code your solutions in this file

function writeCards(name,eventName){
    const message = [];
    for(let i = 0; i<name.length;i++){
        message.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }

    return message;
}

function countDown(name){
    for(let i = name; i >=0; i--){
        console.log(i);
    }
}