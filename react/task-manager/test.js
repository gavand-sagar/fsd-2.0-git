// console.log("Start....");

// function logSagarAfterThreeSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Sagar");
//       resolve("Gavand");
//     }, 3000);
//   });
// }

// logSagarAfterThreeSeconds()
// .then((res)=>{

// })
// .catch((donkey)=>{

// })


// logSagarAfterThreeSeconds()
// .then(()=>{

// })
// .catch(()=>{

// })



// // function doSomething(resolve){
// //     setTimeout(() => {
// //         console.log("Sagar");
// //         resolve();
// //     }, 3000);
// // }

// // doSomething(()=>{
// //     console.log('this code will get executed after 3000 millis')
// // })

// async function main() {
// //   logSagarAfterThreeSeconds().then(()=>{
// //     console.log("This is end here")
// //     logSagarAfterThreeSeconds().then(()=>{
// //         console.log("This is one more end here")        
// //     })
// //   });


//     let result = await logSagarAfterThreeSeconds();
//     console.log(result)




// }

// main();





// // function getName(){
// //     setTimeout(()=>{
// //         return "Sagar"
// //     },3000);
// // }


// // let a = getName();

// // a ?





fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response)
})
.catch(()=>{

})


// let a = setInterval(()=>{
//     console.log("Sagar")
// },1000)

// clearInterval(a)




let t = setTimeout(()=>{
    console.log("Sagar")
},10000)

// clearTimeout(t)



