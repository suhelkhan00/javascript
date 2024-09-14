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


// **********to value from user *********
const prompt=require('prompt-sync')()
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

// let tri=prompt('print?:')
// for (let i=0; i<=5; i++) {
    
//     console.log(tri.repeat(i));
    
// }

let tri=prompt('print?:')
for (let i=0; i<=5; i++) {
    let s=' '
    console.log(s.repeat(s)+tri.repeat(i-s));
    
}