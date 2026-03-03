// for(let i = 0; i<20; i++){
// if(i % 2 === 1){

//     console.log("ODD Number",i);

// }
    
// }

// for(let i = 1; i<20; i++){

//     if(i%2!==0){
//           console.log("ODD Number",i);
//     }
// }

// // Give Me The List Numbers Between 1 to 30 Divisble by 5 or 3

// for(let i=0;i<=30;i++){

//     if(i % 5 === 0 || i % 3 === 0){

//         console.log(i);
//     }
// }

// // Both Using && Operator I Need to Divide By 3 and Also 5

// for(let i=0;i<=100;i++){

//     if(i%3===0 && i%5===0){

//         console.log(i);
//     }
// }


// // Give Me The Sum Of The Number Which is Divided By 3 and 5

// let calculate = 0;

// for(i=1;i<=100;i++){
//     if(i%3===0||i%5===0){

//         console.log(i)
//         calculate = calculate+i;
        

//     }
// }

// console.log("Total Sum of The Number",calculate);

let sum = 0;

for(i=0;i<=100;i++){

    if(i%3===0||i%5===0){
        console.log(i);
        sum = sum+i;
    }
}
console.log("Total Sum of The Number",sum);