number = [1,2,3,33,4,0];
var max = number[0];
var min = number[0];
var sum = 0;
//print max
function printMax(){
 for(let i =0;i<number.length;i++){
     if(number[i]>max){
         max = number[i];
     }

 }
 console.log(`max = ${max}`)
}

//print min
function printMin(){
for(let i =0;i<number.length;i++){
    if(number[i]<min){
        min = number[i];
    }

 }
console.log(`min = ${min}`);
}

//print sum of all element
function printSum(){
    for(let i =0;i<number.length;i++){
       sum += number[i]; 
    }
    console.log("sum of all element = "+ sum);
}
//search the value 0 
function search(num){
    for(let i=0; i<number.length;i++){
        if(number[i]==num){
            console.log("the index of "+ num +" is = "+i);
        }
    }
}


//calling functions
printMax();
printMin();
printSum();
search(0);


