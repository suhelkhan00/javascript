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
// const prompt=require('prompt-sync')()

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

// BigInt
// .toFixed
// .toPrecision
// .parseFloat
// .parseInt

// let num=34
// console.log(isNaN(num))
// const newnum=num.toString()
// console.log(typeof(newnum))

// let n=25633265732842656256534432675428898907
// only contain 15 values but by using bigint we can get >15 digi values
// let n2=BigInt(25633265732842656256534432675428898907)
// console.log(n2)

// let n=45.564009
// let newn=n.toFixed(2) //.tofixed: how many digit you want after decimal(.) 
// console.log(n)
// console.log(newn)

// let num= n.toPrecision(5)// .toprecision: how many to digit you want to  show
// console.log(num)

// *******js dates ****************

// new Date ()
// const date=new Date()
// console.log(date)
// console.log(typeof(date))
// console.log(date.toDateString())//current date with day(waar eg mon tue)
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())//   formate date/month/year
// console.log(date.toTimeString())
// console.log(date.toUTCString())

// particular current time ya date (get)
// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getTime())//millisesecond of all time of 1jan 1970 to current

// console.log(date.getMilliseconds())

//to set date of user to print
// date.setDate(1)
// date.setMonth(10)
// date.setFullYear(2012)
// console.log(date)

//***********js math methods*****************/

// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.round(33.52))//round figure
// console.log(Math.floor(35.78))
// console.log(Math.ceil(35.78))
// console.log(Math.trunc(28.67))//only int part

//**************scope***********************
//range to access (kisi chij ka daira)
// 3 type scope   
// 1. BLOCK/LOCAL*imp
// {} only work in this curly bracket(block)
// let , const =block / local variable 
// example:
// {
//    let a=5
//     console.log(a)//access
// }
// console.log(a)//not access

// 2.GLOBAL*imp
// var=> GLOBALvariabal
// {
//     var a=5
//      console.log(a)//access
//  }
//  console.log(a)// access

// 3.FUNCTION


//*****************hoisting*****************\
// hoisting=>kisi chij top pr shift krna 
// (hoisting) js ka bydefault nature hota h jo kuch func ya variable bnate h vo bydefault hoist(top pr jana)


//***************clouser********************
// closer=> inner function apne outer function se value ko access kr skte h 
// jitne bhi child function h vo apne parent function ki value ko access kr skte h 

// function outer(){
//     let a = 'suhel'
//     function inner() {
//         let b='khan'
//       console.log(a)  
//       console.log(b)
//     }
//     inner()
// }
// outer()


// ****************object*******************

// object:store multiple value
// {}obj define 
// 1st method 
// const stu={
//     name:"suhel",
//     roll_no:202,
//     class:12,
//     DOB:7
// }
  
// console.log(stu);
//to fetch particular item
// 1st method 
// console.log(stu.name)
// console.log(stu.DOB)
// console.log(stu.class)
// console.log(stu.roll_no)


// console.log('***************************************')
// 2nd method


// console.log(stu['name'])
// console.log(stu['DOB'])
// console.log(stu['class'])
// console.log(stu['roll_no'])

// {}Obj define
// 2nd method

// const stu={}
// stu.name='suhel';
// stu.rollno=48

// console.log(stu)
// console.log(stu['name'])

// *****************************************

// iife ----- immediate invoked function expression
// (function add() {
//     console.log("suhel")
// })()


// loop for string and array

// const array=[1,2,3,4,5]
// for (let i = 0; i<array.length; i++) {
//     console.log(array[i])
    
// }

// const str='jhashjaguegbrjcberugjhgfjshgfh'
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]) 
    
// }

// while loop
// let i=0
// while (i<=10) {
//     console.log(i)
//     i++
// }

//do while loop
let j=0
do {
    console.log(j)
    j++
}
while (j<=10)