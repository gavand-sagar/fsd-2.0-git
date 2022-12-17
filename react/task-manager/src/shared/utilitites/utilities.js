// function commonFetch(url) {
//   return fetch(url).then((res) => res.json());
// }

function commonFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        resolve(res.json());
      })
      .catch((err) => {
        reject("a custom error");
      });
  });
}


// setTimeout(()=>{
// //
// },3000)

// debugger
// console.log("B")




commonFetch(url).then().catch()


// commonFetch().then().catch(err=>{

// })