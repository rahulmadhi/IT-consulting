let pop = document.querySelector(".pop-up")
let services =  document.getElementById("services")

services.addEventListener("mouseover" , ()=>{
    pop.style.display="block"
})

services.addEventListener("mouseout" , ()=>{
    pop.style.display="none"
})

