const xpose = document.querySelector("#xpose-value")
const ypose = document.querySelector("#ypose-value")
window.addEventListener('mouseover',(event)=>{
    console.log(event);
    const xclient = event.clientX;
    const yclient = event.clientY;
    xpose.textContent= xclient;
    ypose.textContent= yclient;
});