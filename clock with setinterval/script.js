/* started */
let $ = document;
function _log (value) {console.log(value)}
function _table (value) {console.table(value)}

// this show your local time to you
           
// let myTimer = setInterval(myFunction, 1000);
// function myFunction() {
//     var d = new Date();
//     $.getElementById("clockDisplay").innerHTML = d.toLocaleTimeString();
// }





// and this work by setInterval method

            /* 
            Digital clock in 12-hour and 24-hour formats. 
                    You can use any one you want
            */

// --> Digital clock in 12-hour formats. <--

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    
    if ( h == 0 ) {
        h = 12;
    }
    if ( h > 12 ) {
        h = h - 12;
        session = "PM"
    }

    h = ( h < 10 ) ? "0" + h : h;
    m = ( m < 10 ) ? "0" + m : m;
    s = ( s < 10 ) ? "0" + s : s;

    let time = h + " : " + m + " : " + s + " " + session;
    
    $.getElementById('clockDisplay').innerHTML = time;
    setInterval(showTime, 1000)
} 
showTime();


// --> Digital clock in 12-hour formats. <--


// const showTime24 = () => {
//   let date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();
  
//   if ( h == 0 ) {
//       h = 24;
//   }

//   h = ( h < 10 ) ? "0" + h : h;
//   m = ( m < 10 ) ? "0" + m : m;
//   s = ( s < 10 ) ? "0" + s : s;

//   let time = h + " : " + m + " : " + s + " ";
  
//   $.getElementById('clockDisplay').innerHTML = time;
//   setInterval(showTime24, 1000);
// } 


// showTime24();