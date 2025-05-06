fetch('https://api.github.com/users/suwaan2')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("E: ", error)
})