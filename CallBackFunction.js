//  Learning the Callback function properly in js 


// function greet(name, callback){
//     console.log('Hi ' + '' + name);
//     callback()
// }

// function callme(){
//     console.log("This is the callback function");
// }

// greet('Peter' , callme)






// function welcome(){
//     console.log("Welcome to the programming")
// }

// function callName(name){
//     console.log('Hi ' + '' + name)
   
// }

// setTimeout( welcome,  3000);

// callName("Michel")



function doTask(name, callback){
  console.log(name)
    callback()
}

function work(){
    console.log("Done Task")
}

doTask('Ram' + ' Has ',work)


// Basic Concept cleared of Callback function 







