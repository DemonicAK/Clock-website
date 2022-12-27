

let a;
let date;
let timee;



const option={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

setInterval(() => {

 a=new Date();
          
timee= a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
date= a.toLocaleDateString(undefined, option);


document.getElementById("time").innerHTML = timee +"<br>on  " + date;
}, 1000);