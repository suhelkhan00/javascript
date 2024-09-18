// ********variables*********
// let finame ="suhel"
// console.log(finame)
// const lname='khan'
// console.log(lname)
// const fname=`suhel
// khan`
// console.log(fname)

// *********function*****************
// function funcname(){
//     console.log('good boy')
// }
// funcname()

// function add(a,b,c,d){
//     console.log(a+b+c+d)
    
// }
// add(2,9,4,8)

// function mul(a,b,c,d){
//     console.log(a*b*c*d)
    
// }
// mul(2,9,4,8)

// *********arrow function*****************
// const func=()=>{
//     console.log("Arrow Function")
// }
// func()

// const func=(a,b,c)=>{
//     console.log(a-b-c)
// }
// func(5,2,9)

// const func=(a,b,c)=>{
//     console.log(a/b/c)
// }
// func(5,2,9)

// *************** to check typeof length trim touppercase tolowercase ***************
// let str='the quick brown fox jumps over the lazy dog'
// console.log(str.length)
// console.log(str.indexOf())
// console.log(str)
// console.log(typeof(str))

// let index=str.indexOf()
// console.log(index)

// let upper=str.toUpperCase()
// console.log(upper)

// let low=str.toLowerCase()
// console.log(low)

// let str='  the quick brown fox jumps over the lazy dog         '
// console.log(str)

// let trim =str.trim()
// console.log(trim)

// let trim =str.trimStart()
// console.log(trim)

// let trim =str.trimEnd()
// console.log(trim)


// true false
// let str='asd  fgh jkl ds df sd e ew e4w er'
// var include=str.includes('g')
// console.log(include)

// var include=str.includes('c')
// console.log(include)

// split
// let split=str.split('')
// console.log(split)

// let split=str.split(' ')
// console.log(split)

// add 1 0r more strings together

// let str1=' sd f g h jg '
// let str2=' jdsf dfs fg.'
// let str3='w q er t ehyt'
//  let concat=str1.concat(str2,str3)
//  console.log(concat)

// **********to value from user *********
const prompt=require('prompt-sync')()

// const fname =prompt('enter your full name:')
   
// console.log(fname)


// ******************conditional sentence*************
// let age=prompt('what is your age:')
//     if (age<=17) {
//         console.log("minor") 
//     } else {
//         if(age<=35) {
//              {
//                 console.log("adult") 
//             }
//         }
//         else{
            
//                 console.log("old") 
            
//         }
//     }

// let marks=prompt('enter marks:')
// if(marks<100 && marks>=90){
//     console.log('10 cgpa')
// }
// else if(marks<90 && marks>=80){
//     console.log('9 cgpa')
// }
// else if(marks<80 && marks>=70){
//     console.log('8 cgpa')
// }
// else if(marks<70 && marks>=60){
//     console.log('7 cgpa')
// }
// else if(marks<60 && marks>=50){
//     console.log('6 cgpa')
// }
// else if(marks<50 && marks>=40){
//     console.log('5 cgpa')
// }
// else{
//     console.log('FAIL')
// }


// let tri=prompt('print?:')
// for (let i=0; i<=5; i++) {
    
//     console.log(tri.repeat(i));
    
// }




// ******************basic calculator*************
// const num1=parseFloat(prompt('enter number 1:'))
// const operator=prompt('Entet operator(+,-,*,/):')
// const num2=parseFloat(prompt('enter number 2:'))

// let result='';

// if(operator=='+'){
//     result=num1+num2;
// }
//  else if(operator=='-'){
//    result=num1-num2;
// }
// else if(operator=='*'){
//     result=num1*num2;
// }
// else if(operator=='/'){
//     result=num1/num2;
// }
// else {

//     console.log('Wrong input')
// }
// console.log(result)
// console.log(num1 +" "+operator+" "+ num2+" "+ "=" +" "+result)
// console.log(`${num1} ${operator} ${num2} = ${result}`)

// let animalHeight = prompt("Enter the Height either lessthan 1 or greaterthan 1 (<=1 or >1):")

// if (animalHeight<=1) {
//     console.log("animal is short")
//     let squeak=prompt("can / can not squeak: yes(y)/ no(n)-")
//     if (squeak=="y") {
//         console.log("might be a squirrel")
//     }else {
//     console.log("might be rat")
//     }
// }
// else {
//     console.log('animal is tall')

//     let neck=prompt('enter animal neck is: short /tall-')
    
    
//     if (neck=='tall'){
       
//         console.log('might be a giraffe')
//      }

// else{
//     let nose = prompt('now tell animals nose :small/big- ')
//     if(nose=='big'){
//         console.log('might be an elephant')
//     }else{
//         let live =prompt('where dooes it live:land/water-')
//         if(live=="land"){
//             console.log("might be a rihno")
//         }else{
//             console.log("might be a hippo")
//         }
//     }
// }
// }


//    **********array************
// let array=[4,8,5,2,78,6,4,3,8,9,0,8,6] //sort only same numeric values(single/double/tripal/..... digit value)
// array.sort()
// console.log(array)
// let arr=["parkash",'yesh','samrej','Aman','rahul',"baron"] //sort alphabetic values efficiently
// arr.sort()
// console.log(arr)

// let array1=[43,84,55,26,78,67,48,32,833,90,1,81,60] //sort only single values
// array1.sort()
// console.log(array1)

// let narr=array.concat(array1,arr)
// console.log(narr)

// let arrjoin=narr.join('/')
// console.log(arrjoin)

// let arrs=narr.toString()

// console.log(arrs)
// ********************loop***************

// for loop

// for(let i=1;i<=6;i++)//for(start;range;increment)
// {
//     console.log("suhel")
    
// }

// for(let i=2;i<=20;i=i+2){
//     console.log(i)
    
// }
// for(let i=5;i<=50;i=i+5){
//     console.log(i)
    
// }

// const n=parseInt(prompt('enter the number which you want to print:'))

// for(let i=1;i<=10;i++){
//     let table=i*n;
//     console.log(table)
    
// }

// const t=parseInt(prompt('enter table to print:'))
// for (let i=1;i<=10;i++){
//     let tbl=i*t
//     console.log(tbl)
// }

// ******************Array methods****************
// for each**************
// task perfom on origional array -- block scope--never return value
// let arr=[1,2,3,4,5]
//  arr.forEach((value)=>{// call back func :in running func we run  other func
//   console.log(value)
//  })
// console.log('--------------------------------------')
//  arr.forEach((value,index)=>{
//     console.log(value,index)
//  })
 
//  .map*************************
// map create new array and send array values to new array
// let arraymap=[1,2,3,4,5,6,7]
// arraymap.map((value)=>{
//     console.log(value)
// })
// console.log('--------------------------------------')
// // let arrmap=[1,2,3,4,5,6,7]
// arraymap.map((value,index)=>{
//     console.log(value,index)
// })
// console.log('--------------------------------------')
// // let arrmap=[1,2,3,4,5,6,7]
// const array=arraymap.map((value)=>{
// return value
    
// })

// console.log(array)

// filter***********************
// filter is only return those values you need (filterout)

// let arr=[1,2,3,3,3,4,5,5,5,7,8,6,6,8,4,4,]

// const array=arr.filter((value)=>{
//     return value==4
   
// })

// console.log(array)
// console.log('-----------------------------------------------------------------')
// // reduce***********************
// const arrreduce=arr.reduce((prev,current)=>{
//     return prev + current

//     // return prev - current

//     // return prev * current

//     // return prev / current
// })
// console.log(arrreduce)

// **************number datatype************
let num=23
console.log(isNaN(num))
