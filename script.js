document.querySelector('button').onclick = checkworld

function checkworld(){
let x = document.getElementById('firstvalue').value;
let y = document.getElementById('secondvalue').value;
let text = '';
let checkletter = 0;
let count = 0;
   for(let i = 0; i < x.length; i++){
      for(let k = 0; k < y.length; k++){
              if(x[i] == y[k]){
                 checkletter++;
                 count++;
                 text = text + x[i];
             } if (count == 1){
                 count = 0;
               x[i++];
             }
          } 
       }        
    if (checkletter == 0){
    console.log('different words');
 } else {
    console.log(text);
 } 
}
     checkworld()

//     for(let i = 0; i < x.length;){
//        for(let k = 0; k < y.length; k++){
//           if(x[i] == y[k]){
//              checkletter++;
//              text = text + x[i];
//              } 
//           }
//          x[i++]; 
//        } 
          
//     if (checkletter == 0){
//     console.log('different words');
//  } else {
// console.log(value);
//  } 

//     for(let i = 0; i < x.length; i++){
//        for(let k = 0; k < y.length; k++){
//           if(x[i] == y[k]){
//              checkletter++;
//              value = value + x[i];
//              } 
//           }
//           x[i++]; 
//        } 
      
//     if (checkletter == 0){
//     console.log('different words');
//  } else {
// console.log(value);
//  } 
// }
// checkworld()

  /*for(let i = 0; i < x.length; i++){
  for(let k = 0; k < y.length; k++){
    if(x[i] == y[k]){
       count++;
       checklettter++; 
    }
  }
   if(checklettter == 2){
    text = text + x[i];
    checklettter = 0;
   }
}
 
  if(count == 0){
 console.log('different words');
 } else {
    console.log(text);
 }
}

checkworld()*/

/* for(let i = 0; i < x.length; i++){
        for(let k = 0; k < y.length; k++){
            if(x[i] == y[k]){
               count++;
               checklettter = x[i];
             }      
          }
         } 
          for(let b=0; b<checklettter.length; b++){
             if(b[checklettter] != x[i]){
                text = text + x[i];
              }
        }
         if (count == 0){
           console.log('different words');
       } else {
        console.log(text);
       }
    }
checkworld()*/

// function factorial(num){
//    if(num < 0) 
//      return -1;
//     else if(num == 0)
//      return 1;
//     else 
//       return (num * factorial(num - 1));
   
// } 

// factorial(5)

// function factorial(num){
//   let result = num;
//   if (num == 0 || num == 1)
//      return 1;
//      while (num > 1) {
//       result *= num;
//      } 
//      return result;
// }

// factorial(5);

// function reverseString(str){
//    let newString = '';
//    for (let i = str.length - 1; i>0; i--){
//       newString+=i
//    }
//    return newString;
// }

// reverseString('hello');