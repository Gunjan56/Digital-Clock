const box = document.querySelector(".box");
// let date = new Date();
// box.innerHTML = date.toLocaleTimeString(); no need to do this
// console.log(date);

// script is running only one time
// date is not updating becoz this script runs only once

// use setinterval
// now this function will be call every 1 second whic will update ui
// let see our console
// now just use dom
setInterval(() => {
  let date = new Date().toLocaleTimeString();
  box.innerHTML = date;
}, 1000);

// code to push kr do abhi be txt file hai branch mein
// hua?no


// check type of date
// arey tumse he bol rha hu 
// jab locale string phele se he string hai why are you using upper case and to string

// git setup?
//not done do help

// easy peasy lemon 

