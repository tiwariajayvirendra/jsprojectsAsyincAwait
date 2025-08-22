const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const timer = document.getElementById('timer')

let minute = 25;
let second = 0;
let timerId = NaN;

console.log(timer,"timer")
start.addEventListener('click', ()=>{
    
    timerId=setInterval(() => {
        
    if(second === 0 ){
        second = 59;
       if(minute !== 0){
            minute --;
        } 

       }else{
        second--;
       }
        timer.textContent = `${minute}: ${second}`;
    }, 1000);

})
stop.addEventListener('click',()=>{
    clearInterval(timerId)
})
reset.addEventListener('click',()=>{
    minute= 25;
    second= 0;
    timer.innerHTML= `${minute}:0${second}`
})
/// Stopwatch is now Ready you can youse it for your test works for proficiency in coding .