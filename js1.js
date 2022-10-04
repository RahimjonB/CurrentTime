let h = document.querySelector(".hour");


let sec =0;

// console.log(date);
// console.log("День месяца", dt);
// console.log("День недели", day);
// console.log("Месяц", month+1);
// console.log("Год", year);
setInterval(()=>{
    let date = new Date();
let dt = date.getDate();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let seconds = date.getSeconds();
h.innerHTML= hour +" : "+ min+" : "+ seconds;

}, 1000)


