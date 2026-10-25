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
console.log(productPrice([ {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 10.48,
        "rating": 2.56,
        "stock": 99,
        "tags": [
            "beauty",
            "mascara"
        ],
        "brand": "Essence",
        "sku": "BEA-ESS-ESS-001",
        "weight": 4,
        "dimensions": {
            "width": 15.14,
            "height": 13.08,
            "depth": 22.99
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 3-5 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 3,
                "comment": "Would not recommend!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Eleanor Collins",
                "reviewerEmail": "eleanor.collins@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Very satisfied!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Lucas Gordon",
                "reviewerEmail": "lucas.gordon@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Eleanor Collins",
                "reviewerEmail": "eleanor.collins@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "meta": {
            "createdAt": "2025-10-09T14:47:01.588Z",
            "updatedAt": "2026-05-23T11:27:41.868Z",
            "barcode": "5784719087687",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category": "beauty",
        "price": 19.99,
        "discountPercentage": 18.19,
        "rating": 2.86,
        "stock": 34,
        "tags": [
            "beauty",
            "eyeshadow"
        ],
        "brand": "Glamour Beauty",
        "sku": "BEA-GLA-EYE-002",
        "weight": 9,
        "dimensions": {
            "width": 9.26,
            "height": 22.47,
            "depth": 27.67
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Savannah Gomez",
                "reviewerEmail": "savannah.gomez@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Awesome product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Christian Perez",
                "reviewerEmail": "christian.perez@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Poor quality!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Nicholas Bailey",
                "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 20,
        "meta": {
            "createdAt": "2024-12-03T11:29:45.706Z",
            "updatedAt": "2025-08-24T16:52:47.806Z",
            "barcode": "9170275171413",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
        "id": 3,
        "title": "Powder Canister",
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "category": "beauty",
        "price": 14.99,
        "discountPercentage": 9.84,
        "rating": 4.64,
        "stock": 89,
        "tags": [
            "beauty",
            "face powder"
        ],
        "brand": "Velvet Touch",
        "sku": "BEA-VEL-POW-003",
        "weight": 8,
        "dimensions": {
            "width": 29.27,
            "height": 27.93,
            "depth": 20.59
        },
        "warrantyInformation": "3 months warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Would buy again!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Alexander Jones",
                "reviewerEmail": "alexander.jones@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Elijah Cruz",
                "reviewerEmail": "elijah.cruz@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Very dissatisfied!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Avery Perez",
                "reviewerEmail": "avery.perez@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 22,
        "meta": {
            "createdAt": "2025-01-08T18:30:12.844Z",
            "updatedAt": "2025-11-26T14:49:26.980Z",
            "barcode": "8418883906837",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    },
    {
        "id": 4,
        "title": "Red Lipstick",
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "category": "beauty",
        "price": 12.99,
        "discountPercentage": 12.16,
        "rating": 4.36,
        "stock": 91,
        "tags": [
            "beauty",
            "lipstick"
        ],
        "brand": "Chic Cosmetics",
        "sku": "BEA-CHI-LIP-004",
        "weight": 1,
        "dimensions": {
            "width": 18.11,
            "height": 28.38,
            "depth": 22.17
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Liam Garcia",
                "reviewerEmail": "liam.garcia@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Ruby Andrews",
                "reviewerEmail": "ruby.andrews@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Would buy again!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 40,
        "meta": {
            "createdAt": "2025-11-22T23:28:00.911Z",
            "updatedAt": "2026-01-26T01:31:40.721Z",
            "barcode": "9467746727219",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
    },
    {
        "id": 5,
        "title": "Red Nail Polish",
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "category": "beauty",
        "price": 8.99,
        "discountPercentage": 11.44,
        "rating": 4.32,
        "stock": 79,
        "tags": [
            "beauty",
            "nail polish"
        ],
        "brand": "Nail Couture",
        "sku": "BEA-NAI-NAI-005",
        "weight": 8,
        "dimensions": {
            "width": 21.63,
            "height": 16.48,
            "depth": 29.84
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 2,
                "comment": "Poor quality!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Benjamin Wilson",
                "reviewerEmail": "benjamin.wilson@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Liam Smith",
                "reviewerEmail": "liam.smith@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Very unhappy with my purchase!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 22,
        "meta": {
            "createdAt": "2025-10-03T07:39:53.470Z",
            "updatedAt": "2026-04-24T00:21:44.635Z",
            "barcode": "4063010628104",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
    },
    {
        "id": 6,
        "title": "Calvin Klein CK One",
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "category": "fragrances",
        "price": 49.99,
        "discountPercentage": 1.89,
        "rating": 4.37,
        "stock": 29,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Calvin Klein",
        "sku": "FRA-CAL-CAL-006",
        "weight": 7,
        "dimensions": {
            "width": 29.36,
            "height": 27.76,
            "depth": 20.72
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 2,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Layla Young",
                "reviewerEmail": "layla.young@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Fast shipping!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Daniel Cook",
                "reviewerEmail": "daniel.cook@x.dummyjson.com"
            },
            {
                "rating": 3,
                "comment": "Not as described!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Jacob Cooper",
                "reviewerEmail": "jacob.cooper@x.dummyjson.com"
            }
        ],
        "returnPolicy": "90 days return policy",
        "minimumOrderQuantity": 9,
        "meta": {
            "createdAt": "2025-02-27T22:08:36.617Z",
            "updatedAt": "2025-10-23T02:22:36.410Z",
            "barcode": "2451534060749",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
    },
    {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "category": "fragrances",
        "price": 129.99,
        "discountPercentage": 16.51,
        "rating": 4.26,
        "stock": 58,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Chanel",
        "sku": "FRA-CHA-CHA-007",
        "weight": 7,
        "dimensions": {
            "width": 24.5,
            "height": 25.7,
            "depth": 25.98
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Ruby Andrews",
                "reviewerEmail": "ruby.andrews@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Awesome product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Leah Henderson",
                "reviewerEmail": "leah.henderson@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Very happy with my purchase!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Xavier Wright",
                "reviewerEmail": "xavier.wright@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2025-04-13T12:15:53.051Z",
            "updatedAt": "2025-12-23T23:46:02.892Z",
            "barcode": "4091737746820",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
    },
    {
        "id": 8,
        "title": "Dior J'adore",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "category": "fragrances",
        "price": 89.99,
        "discountPercentage": 14.72,
        "rating": 3.8,
        "stock": 98,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Dior",
        "sku": "FRA-DIO-DIO-008",
        "weight": 4,
        "dimensions": {
            "width": 27.67,
            "height": 28.28,
            "depth": 11.83
        },
        "warrantyInformation": "1 week warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "Great value for money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Nicholas Bailey",
                "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Great value for money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Penelope Harper",
                "reviewerEmail": "penelope.harper@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Emma Miller",
                "reviewerEmail": "emma.miller@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 10,
        "meta": {
            "createdAt": "2025-11-22T12:24:29.033Z",
            "updatedAt": "2026-05-11T22:03:20.337Z",
            "barcode": "1445086097250",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
    },
    {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "category": "fragrances",
        "price": 69.99,
        "discountPercentage": 0.62,
        "rating": 3.96,
        "stock": 4,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Dolce & Gabbana",
        "sku": "FRA-DOL-DOL-009",
        "weight": 6,
        "dimensions": {
            "width": 27.28,
            "height": 29.88,
            "depth": 18.3
        },
        "warrantyInformation": "3 year warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Would buy again!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Mateo Bennett",
                "reviewerEmail": "mateo.bennett@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly recommended!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Nolan Gonzalez",
                "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Very happy with my purchase!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Aurora Lawson",
                "reviewerEmail": "aurora.lawson@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 2,
        "meta": {
            "createdAt": "2024-11-19T07:56:01.798Z",
            "updatedAt": "2025-02-01T07:08:45.512Z",
            "barcode": "3023868210708",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"
    },
    {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "category": "fragrances",
        "price": 79.99,
        "discountPercentage": 14.39,
        "rating": 2.74,
        "stock": 91,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Gucci",
        "sku": "FRA-GUC-GUC-010",
        "weight": 7,
        "dimensions": {
            "width": 20.92,
            "height": 21.68,
            "depth": 11.2
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships overnight",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 1,
                "comment": "Very dissatisfied!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Cameron Perez",
                "reviewerEmail": "cameron.perez@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Very happy with my purchase!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Daniel Cook",
                "reviewerEmail": "daniel.cook@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Addison Wright",
                "reviewerEmail": "addison.wright@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 2,
        "meta": {
            "createdAt": "2026-07-19T20:10:42.419Z",
            "updatedAt": "2026-07-27T15:21:17.071Z",
            "barcode": "3170832177880",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
    },
    {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        "category": "furniture",
        "price": 1899.99,
        "discountPercentage": 8.57,
        "rating": 4.77,
        "stock": 88,
        "tags": [
            "furniture",
            "beds"
        ],
        "brand": "Annibale Colombo",
        "sku": "FUR-ANN-ANN-011",
        "weight": 10,
        "dimensions": {
            "width": 28.16,
            "height": 25.36,
            "depth": 17.28
        },
        "warrantyInformation": "1 year warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 2,
                "comment": "Would not recommend!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Christopher West",
                "reviewerEmail": "christopher.west@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Vivian Carter",
                "reviewerEmail": "vivian.carter@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Poor quality!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Mason Wright",
                "reviewerEmail": "mason.wright@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 1,
        "meta": {
            "createdAt": "2026-05-31T06:08:47.181Z",
            "updatedAt": "2026-06-02T19:49:21.474Z",
            "barcode": "3610757456581",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
            "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
            "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
    }]));









