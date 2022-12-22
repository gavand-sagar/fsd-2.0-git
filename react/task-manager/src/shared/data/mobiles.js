// function getMobiles() {
//   return [{ brand: "Xiome", model: "K40" }];
// }


function getMobiles() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([{ brand: "Xiome", model: "K40" }])
        },3000)
    })
}
  