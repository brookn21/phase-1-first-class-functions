function receivesAFunction(num){
    let value = ""
    if (num > 0){
        value = "positive"
    }
    else{
        value = "negative"
    }
    return function(){
        console.log(`My number is ${value} `)
    }
}