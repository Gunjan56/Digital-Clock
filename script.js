const box = document.querySelector(".box");
// let date = new Date();
// box.innerHTML = date.toLocaleTimeString(); no need to do this
// console.log(date);
// use setinterval
// now this function will be call every 1 second whic will update ui
// let see our console
// now just use dom
setInterval(() => {
  let date = new Date().toLocaleTimeString().toUpperCase();
  box.innerHTML = date;
}, 1000);
