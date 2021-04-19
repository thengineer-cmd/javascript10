
for(let i=0;i<20;i++){
    if((i%3==0) && (i%5==0)){
        console.log(i,"fizzBuzz");
    }
    else if(i%5==0){
        console.log(i,"buzz");
    }
    else if(i%3==0){
        console.log(i,"fizz");
    }
}