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

const work = new Promise((reslove, reject) => {
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

work.then(() => {
  console.log("Work Completed")
}).catch(() => {
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


new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove(1)
  }, 1000);
}).then((result) => {
  console.log(result)
  return result * 2
}).then((result) => {
  console.log(result)
  return result * 4
}).then((result) => {
  console.log(result)
  return result * 6
})





const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "suan", email: "suan@gmail.com" })
  }, 1000);
})

promise3.then((result) => {
  console.log(result)
})


const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: 'suan', password: "231231" })
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000);
})
//Promise chanining use in database 
promise4.then((user) => {
  console.log(user)
  return user.username
}).then((username) => {
  console.log(username)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log("The promise have been resolved or rejected")
})




const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: 'suankc', password: 'suan123' })
    } else {
      reject("Error: Promise5 went wrong")
    }
  }, 1000);
})

// promise5.then(()=>{})
// using Async and await to handle the promise 

async function consumePromise5() {
  try {
    const response = await promise5
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromise5()



// some real world examples 

// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }

// }

// getUsers()



// const getallUser = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     const response = fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data)
//   }, 2000);
// })


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})
