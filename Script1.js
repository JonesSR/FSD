TASK 3:

//1)ODD Numbers

i)Anonymous Function
var a = function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          }   }  }
console.log(a([1,2,3,5,6,8,9]));

ii)IIFE
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);









2) Convert all the strings to title caps in a string array
i)anonymous function
var foo = function (str) {
   str = str.toString().toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(foo(["jones"]));

ii)IIFE Function
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})
console.log(foo(["jones"]));





3) Sum of all numbers in an array
i)anonymous function
var sum=0;
var foo = function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(foo([1,2,3,4,5,6]));
ii)IIFE Function
var sum=0;
(foo = function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})
console.log(foo([1,2,3,4,5,6,7,8,9]))








4) Return all the prime numbers in an array

i)Anonymous function

let foo = function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
console.log(foo(20))







ii)IIFE Function

( foo = function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
})
console.log(foo(20))









5)Return all the palindromes in an array

i)Anonymous Function

var foo =function isPalindrome(arr,n)
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(foo([8,1,9],5))

ii)IIFE

(foo = function isPalindrome(arr,n)
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })
    console.log(foo([8,1,9],5))
6) Return median of two sorted arrays of the same size
i) Anonymous Function

let foo = function(arr1, arr2) {
   let s1= arr1.length
   let s2= arr2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return arr2[Math.floor(index/2)]
       }else{
           return  (arr2[Math.floor(index/2)-1] + arr2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           arr1.push(arr2[i])
       }
   arr1.sort((a,b)=>a-b)
   console.log(arr1)
   if(index%2==1){
       return arr1[Math.floor(index/2)]
   }else{
       return (arr1[Math.floor(index/2)-1] + arr1[Math.floor(index/2)])/2
   }
   
};
console.log(foo([1,2,3],[8,9,10]))




ii)IIFE

(foo = function(arr1, arr2) {
   let s1= arr1.length
   let s2= arr2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return arr2[Math.floor(index/2)]
       }else{
           return  (arr2[Math.floor(index/2)-1] + arr2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           arr1.push(arr2[i])
       }
   arr1.sort((a,b)=>a-b)
   console.log(arr1)
   if(index%2==1){
       return arr1[Math.floor(index/2)]
   }else{
       return (arr1[Math.floor(index/2)-1] + arr1[Math.floor(index/2)])/2
   }
   
   
});
console.log(foo([1,2,3],[8,9,10]))






7)Remove duplicates from an array

i)anonymous Function
var foo = function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 console.log(foo([1,1,2,3,4,5]));

ii)IIFE


(foo = function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 console.log(foo([1,1,2,3,4,5]));













8)Rotate an array by k times

var foo = function (a, n, k)
{
    k = k % n;
 for (let i = 0; i < n; i++) {
        if (i < k) {
console.log(a[n + i - k] + " ");
}
        else {
     console.log((a[i - k]) + " ");
        }}}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
console.log(foo([1,2,3,4,5],N,2))

II)IIFE
(foo = function (a, n, k)
{
    k = k % n;
 for (let i = 0; i < n; i++) {
        if (i < k) {
console.log(a[n + i - k] + " ");
}  else {
     console.log((a[i - k]) + " ");
        }}})
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
console.log(foo([1,2,3,4,5],N,2))
Arrow functions
1)
oddNumbers = (array) => {
                   for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                        }

2)
Arrow Function : titleCase = (str) => {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }

3)
sum = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                   }




4)
primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }

5)
isPalindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
