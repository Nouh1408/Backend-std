//simple for loop

/* let arr=["Messi", "ronaldo","Salah"]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
} */

//forin
//fprin works with array and objects
/* const arr =[10,20,30,40,50] //with array
for(const i in arr){
    console.log(arr[i]);
} */
/* const user ={name:"Ahmed",age:21} //with object
for(const key in user){
    console.log(user[key]);
} */

//for of with array
/* const str = "basma";
for (const i of str) {
    console.log(i);
} */

/* var mostWordsFound = function(sentences) {
    let count =0
    for(let i=0;i<sentences.length;i++){
        if(sentences[i]===" " ||sentences[i]===`" "`){
            count++
        }
        console.log(count);
        
    }
};
mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
 */
var isPalindrome = function(x) {
    
    let digits = x.toString()
    let reverse = digits.split('').reverse().join('')

    

  return digits ===reverse
    


};
console.log(isPalindrome(121))



//--------------------Questions-------------------
//forin when working with array is it the same functions as dor loop
/**
 * 
 *  let arr=["Messi", "ronaldo","Salah"]
 * for(let i=0;i<arr.length;i++)
 * {console.log(arr[i]);
 *  
 * const arr =[10,20,30,40,50]
 * for(const i in arr){    
 * console.log(arr[i]); 
 * }  
 * 
 */
