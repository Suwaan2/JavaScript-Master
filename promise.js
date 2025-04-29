// Learning About the promises in the javaScript 

// const promise = new Promise((resolve, reject)=>{
//  setTimeout(() => {
//     resolve(console.log("Message Accepted"))
//  }, 2000);
    
// })
// promise.then(()=>{
//     return 1;
// }
// )

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });
  

// Test Case 

const work = new Promise((reslove, reject)=>{
  let workCommend;
  setTimeout(() => {
    // reslove("Working commmended")
    workCommend = false;

    if (workCommend) {
      reslove(console.log("Work Commened"))
    } else {
      reject("Work Failed")
    }
  }, 2000);
})

work.then(()=>{
  console.log("Work Completed")
}).catch(()=>{
  console.log("Work Failed")
})


// Bonus Challenge 
// Create a chain of 3 promises that depends upon each others

// const newPromise = new Promise((resolve, reject)=>{
  
//   resolve("Resolved")
  

//   setTimeout(() => {
    
//     if(resolve){
//       const promise1 = new Promise((resolve, reject)=>{
//         resolve("Resolved 1")
//       })
//     }
//   }, 2000);
// })

// Promise chaining means chaining using the .then function not chaingig the acutual promise created nested chaining loop 


new Promise((reslove, reject)=>{
  setTimeout(() => {
    reslove(1)
  }, 1000);
}).then((result)=>{
  console.log(result)
  return result * 2
}).then((result)=>{
  console.log(result)
  return result * 4
}).then((result)=>{
  console.log(result)
  return result * 6
})


  