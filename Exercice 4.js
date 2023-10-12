/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*4️⃣ EXERCICE 04 4️⃣*/

// ⛔️ Remember that you must use the global object "Math".

function square(num) {
    // Returns the value of "num" squared (Renvoie la valeur de "num" au carré).
    // YOur code:
    let squared = num ^ 2 //num * num; 
    return squared;
 }
    alert( Math.pow(3, 2));

   // alert(square(5))


 
   function raiseToCube(num) {
    // Returns the value of "num" cubed.
    // Your code:
    let cube = num ^ 3 //num * num *num;
    return cube;
 }
 alert( Math.pow(3, 3));
 // alert(raiseToCube(2))


 function raise(num, exponent) {
    // Returns the value of "num" raised to the exponent "exponent".
    // Your code:.
    let raise = num ^ x;
    return raise;
}
alert( Math.pow(10, 4) );
 
function roundNumber(num) {

    alert(Math.round(20.60));
    // console.log(Math.round(0.9));
}    
  roundNumber()
 
 
 
 function randomnumber(min , max) {
    // Generate a random number between 0 and 10 and return it.
    // Your code :
    return Math.floor(Math.random() * (max - min + 1) + min);
}
alert(randomnumber(0, 10));
 