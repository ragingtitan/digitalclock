function updateTime()
{
    const currentDate = new Date();
    let hour=currentDate.getHours();
    let minute=currentDate.getMinutes();
    let second=currentDate.getSeconds();
    let mhour=document.getElementById('one');
    mhour.innerHTML=hour;
    let mminute=document.getElementById('two');
    mminute.innerHTML=minute;
    let msecond=document.getElementById('three');
    msecond.innerHTML=second;
    
}
setInterval(updateTime, 1000);
/*function toggling(){
    let colon1=document.getElementById("toggle1");
    colon1.toggleAttribute("data-visible");
    let colon2=document.getElementById("toggle2");
    colon2.toggleAttribute("data-visible");
}
setInterval(toggling,1000);
*/
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    const isVisible = element.getAttribute("data-visible") === "true";
    element.setAttribute("data-visible", !isVisible);
  }
  
  // Toggle the first element
  setInterval(function () {
    toggleElementVisibility("toggle1");
  }, 1000);
  
  // Toggle the second element
  setInterval(function () {
    toggleElementVisibility("toggle2");
  }, 1000); // You can adjust the interval for each element to achieve desired effect
