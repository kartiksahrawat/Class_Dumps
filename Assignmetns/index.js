// 3 October 2026 Functions start hue hai aaj and array  
//Example 1:-
// function cal(a, b, symbol){
//     if(symbol == "+"){
//         console.log(a+b);
//     }else if(symbol == "-"){
//         console.log(a-b);
//     }else if(symbol == "*"){
//         console.log(a*b);
//     }else if(symbol == "/"){
//         console.log(a/b);
//     }else{
//         console.log("Invalid Operator!");
//     }
// }
// cal(10, 5, "%")

//Example 2:- (iteration of array)
// function array(){
//     let arr = [10, 20, 30, 40, 50]
//     for(let i=0; i<arr.length; i++){
//         console.log(i, arr[i]);
//     }
// }
// array()

//Q1. WAF which takes an array and return the sum of all the elements inside the array.
// function arrSum(ans){
//     let sum = 0
//     for(let i=0; i<arrSum.length; i++){
//         sum += arrSum[i]
//         return sum
//     }
// }
// let ans = arrSum([10,20,30])
// console.log(ans);
// Correct Solution:-
// function arrSum(ans){
//     let sum = 0
//     for(let i=0; i<ans.length; i++){
//         sum += ans[i]
//     }
//     return sum
// }
// let ans = arrSum([10,20,30])
// console.log(ans);

//Q2. Find largest element of an array.
// function largestEle(arr){
//     let largest = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// let ans = largestEle([10, 30, 5, 200, 999])
// console.log(ans);

//Q3. Find Second largest element of an array.
// function secLargestEle(arr){
//     let largest = arr[0]
//     let secLargest = arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > largest){
//             secLargest = largest
//             largest = arr[i]
//         }
//     }
//     return secLargest
// }
// let ans = secLargestEle([10, 20, 100, 999, 5000, 5000])
// console.log(ans);
//time comp:- O(n)
//space comp:- O(1) kitni baar variable create hua

//Q4. WAF to reverse an array.
// function revArr(arr){
//     let revArray = []
//     for(let i=arr.length-1; i>=0; i--){
//         revArray[arr.length-1-i] = arr[i]
//     }
//     return revArray
// }
// console.log(revArr([10, 20, 100, 999, 5000, 5000]));

// but ab interviewer bole ki mujhe new array create nhi krni, So now we use TWO POINTER APPROACH!!
// function reverseTwoPointer(arr){
//     let start = 0
//     let end = arr.length-1
//     while(start < end){
//         [arr[start], arr[end]] = [arr[end], arr[start]]
//         start++
//         end--
//     }
//     return arr
// }
// console.log(reverseTwoPointer([10, 20, 100, 999, 5000, 5000]));

//Q5. Check whether an array is sorted in accending order or not.
// function arrSorting(arr){
//     let isSorted = true
//     for(let i=1; i<arr.length; i++){
        
//     }
// }


//SORTING-->
// a. Bubble Sort
// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-i; j++){//-i isiliye kiya kyuki last element 1st iteration me already sort ho gya h toh baar baar check krne ki need nhi hai
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([8,4,2,72,56,42]));

// b. Selection Sort:
// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let min = i
//         for(let j=i; j<arr.length; j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         if(min != i){
//             [arr[i], arr[min]] = [arr[min], arr[i]]
//         }
//     }
//     return arr
// }
// console.log(selectionSort([8,4,2,72,56,42]));

// c. Insertion Sort:
// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let key = arr[i]
//         let j = i-1

//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }
// console.log(insertionSort([8,4,2,72,56,42]));

// recurrsion factorial 
// function factorial(n){
//     if(n==1) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(20));

// d. Merge Sort:


//Destructuring:
// let arr =[10,20,30,40,50]
// let [a, b, ...c] = arr
// console.log(a,b,c);

//Objects:
// let obj = {
//     name : "Kartik",
//     goot : "Sahrawat",
//     caste : "Jaat",
//     age : 20,
//     matti : "Haryana"
// }
// Dot and Bracket Notation:
// for( i in obj){
//     console.log(i, obj[i]);
// } 
// Dot notation in iteration gives undefined

// Move all negative numbers to the beginning of the array.
// let arr1 = [10, 90, 50, -5, -7, 0, -20]
// function movezero(arr){
//     let i=0;
//     let k=0;
//     while(k<arr.length){
//         if(arr[k]<0){
//             [arr[i],arr[k]]=[arr[k],arr[i]]
//             i++
//         }
//         k++
//     }
//     return arr
// }
// console.log(movezero(arr1));

//reduce
// let x1 = [55, 44, 33, 22, 11]
// let x1Val = x1.reduce((acc, current, idx, arr) => acc+current)
// console.log(x1Val);


let arr = ["kartik", "vihana", "love"]

//Finding and Searching array methods:
// A. includes():- 
// let isExist = arr.includes("vihana")
// console.log(isExist);

//B. indexof:- elemnt jo dhoond rhehai uska index de deta hai
// let idx = arr.indexOf("vihana")
// console.log(idx);
// if index eixst nhi krta toh return -1
// if same value multiple times hui toh first iccurenc dega

//C. lastindexof:- last index deta hai
// let ans = arr.lastIndexOf("vihana")
// console.log(ans);

//D. find:- first iteration me jo condition satisy krega 
let num = [5, 12, 1, 21, 2, 4]    
// console.log(num.find(n => n < 21));

//E. findIndex():- -1 milta hai jab condition wala number usse nhi milta 
// console.log(num.findIndex(n => n > 21));

//F. findLast():- 
// console.log(num.findLast(n => n < 12));

//G. findLastIndex():-
// console.log(num.findLastIndex(n => n > 15));

//H. some():- ky koi ek elemetn iss array ka is condition ko match kr rha hai yaa nhi 
// console.log(num.some(n => n < 1));

//I. every():- sari conditions satisy krta ho tabhi true
// console.log(num.every(n => n < 40));


// Transforming, Filtering and Calculating
//a. map():- 3 parameters (val, idx, arr)
// console.log(num.map((val, idx, arr) => val*3));

// Q1. uppercase krna hai
// let upperArr = arr.map(word => word.toUpperCase())
// console.log(upperArr);

//b. filter():- ek conditon ke hissab se new array deta hai old array ko ungli nhi krta 
// let ansArr = num.filter(n => n>5)
// console.log(ansArr);


// Q2. even no
// let even = num.filter(n => n%2==0)
// console.log(even);

// c. flat():-
let matX = [[1,2,3], [4,5,6]]
// for(let i in matX){
//     for(let j in matX[i]){
//         console.log(matX[i][j]);
//     }
// }
// console.log(matX.flat()); //depth jayda hai let say x hai depth then arr.flat(x)

// d. flatmap
// let res = matX.flatMap(n=>n).map(n=>n*2).filter(n=>n>8) //this is known as METHOD CHAINING
// console.log(res);

//Sorting and Reversing...
// a. sort():-
// let sort = num.sort((a,b) => b-a)
// console.log(sort);

// b. reverse():-
// let rev = num.reverse()
// console.log(rev);
//modify the org arr

//c. toReversed():-
// console.log(num.toReversed());
//noo change in org arrr

//conversion of string to array and vice versa:-

// a. join():-
// let str = arr.join(" ")
// console.log(str);
// console.log(arr.toString())

// b. split():-string ko array me convert krta hai
// let str = "kartik-vihana"
// console.log(str.split(","));

//fillings and copying~~~~~~~~~~~~~~~~~~~~~~~~~~doubt
let num2 = Array(5).fill(10,2,3)
// console.log(num2);

// Splice and slice
// a. slice():- portion deta hai 
let arr2 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr2.slice(0, 4))
// console.log(arr2.slice(-3));
// console.log(arr2);

// b. splice():- original array me changes and ye sab kr dega remove, replace and return the deleted elements
// console.log(arr2.splice(2,2,300));
// console.log(arr2.splice(2,2,300,400));
// console.log(arr2);

// ==============================================================
// let arr3 = [1,2,3,4,5,6]
// let arr4 = [100,200,300,400,500,600]
// let concat = arr3.push(arr4)
// console.log(concat);
// ==============================================================

// Q1. even element only
let evenEle = (arr)=>arr.filter(n=>n%2==0) 
// console.log(evenEle([1,2,3,4,5,6,7,8]))

// Q2. from 10 to 70 array hai extract the middle 3 elements without changing the org  array...
let middleEle = (arr)=> arr.slice(2,5)
// console.log(middleEle([10, 20, 30, 40, 50, 60, 70]));

// Q3. create an random array of 6 elements check each element is + or not
let check = (arr) => arr.every (n => n>0)
// console.log(check([1,2,3,4,5,6,7,-8]));

// Q4. random array find first ele > 100
let greater = (arr) => arr.find(n => n>100)
// console.log(greater([1,2,3,4,5,6,7,200]));

// Q5. from array find indexes of all number divisible by 3
let indexEle = (arr) => arr.map((n,i) => n%3==0? i:-1).filter(i => i!=-1)
// console.log(indexEle([1,2,3,4,5,6,9,12,11]));


// Q6. filter the odd ele and then add them 
let oddSum = (arr) => arr.filter(n=> n%2!==0).reduce((i,a) => i+a, 0)
// console.log(oddSum([1,2,3,4,5,6,9,12,11]));

// Q7. get sq of all even no
let evenSquare = (arr) => arr.filter(n => n%2==0).map(n => n**2)
// console.log(evenSquare([1,2,3,4,5,6,9,12,11]));

// Q8. summ of all no greater than 10
let greaterSum = (arr) => arr.filter(n=> n >10).map((n => n))
// console.log(greaterSum([1,2,3,4,5,6,9,12,11]));

// Q9. 
let passMarks = (arr) => arr.filter(n => n.marks>40).map(n => n.name)
// console.log(passMarks([{name: "kartik", marks: 99},{name: "vihana", marks: 98}, {name: "xyz", marks: 19} ]));

// Q10. find product that are less than 20
let productPrice = (arr) => arr.sort((a,b) => b.discountPercentage-a.discountPercentage).map(n => {return {title:n.title, id:n.id}})
console.log(productPrice([{
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    stock: 34,
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 20
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    stock: 89,
    warrantyInformation: "3 months warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 22
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 40
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    price: 8.99,
    discountPercentage: 11.44,
    rating: 4.32,
    stock: 79,
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 22
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 1.89,
    rating: 4.37,
    stock: 29,
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 9
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 16.51,
    rating: 4.26,
    stock: 58,
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 1
  },
  {
    id: 8,
    title: "Dior J'adore",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 14.72,
    rating: 3.8,
    stock: 98,
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 10
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 0.62,
    rating: 3.96,
    stock: 4,
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 2
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    category: "fragrances",
    price: 79.99,
    discountPercentage: 14.39,
    rating: 2.74,
    stock: 91,
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 2
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 8.57,
    rating: 4.77,
    stock: 88,
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    returnPolicy: "No return policy",
    minimumOrderQuantity: 1
  }
]));









