// what we need to do is grab all of the colors in a constant so 
// then we need to select the span where the color text will apear the
// third we need to change the background color on every click click event 

const colors = ["#ffea08","#ea5e0f","#df001b","#df016c","#b20962","#7c2b87","#49328a","#006ab3","#02aee3","#02a39b","#22a12c","#b9ca00"]

const btn = document.getElementById("button_click");
let i = -1;

btn.addEventListener("click",function() {
    const colorIndex = getNumber();
    if(colorIndex<=11){
        document.body.style.backgroundColor = colors[colorIndex];
       
    }else{
        i=-1;
    }
  
})

function getNumber() {
    i++;  
    return i; 
}

