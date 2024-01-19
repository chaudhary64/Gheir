// For mb
let one = document.querySelector(".updatediv .one")
let mb = document.querySelector(".mb")
one.addEventListener("mouseenter",()=>{
    console.log("Enter")
    mb.style.right = 0
    mb.style.opacity = 1
})
one.addEventListener("mouseleave",()=>{
    console.log("Leave")
    mb.style.right = "25%"
    mb.style.opacity = 0
})
// For wf
let two = document.querySelector(".updatediv .two")
let wf = document.querySelector(".wf")
two.addEventListener("mouseenter",()=>{
    wf.style.right = 0
    wf.style.opacity = 1
})
two.addEventListener("mouseleave",()=>{
    wf.style.right = "25%"
    wf.style.opacity = 0
})
// For kg
let three = document.querySelector(".updatediv .three")
let kg = document.querySelector(".kg")
three.addEventListener("mouseenter",()=>{
    console.log("Enter")
    kg.style.right = 0
    kg.style.opacity = 1
})
three.addEventListener("mouseleave",()=>{
    console.log("Leave")
    kg.style.right = "25%"
    kg.style.opacity = 0
})