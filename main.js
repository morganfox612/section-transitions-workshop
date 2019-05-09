let div1 = document.getElementById("div1")
window.addEventListener("scroll", function(){
  console.log(window.scrollY)
  if(window.scrollY > 0) {
  div1.classList.remove("hidden")
  div1.classList.add("show")
}
})


let div2 = document.getElementById("div2")
window.addEventListener("scroll", function(){
  console.log(window.scrollY)
  if(window.scrollY > 800) {
  div2.classList.remove("hidden")
  div2.classList.add("show")
}
})


let div3 = document.getElementById("div3")

window.addEventListener("scroll", function(){
  console.log(window.scrollY)
  if(window.scrollY > 1600) {
  div3.classList.remove("hidden")
  div3.classList.add("show")
}
})


let div4 = document.getElementById("div4")

window.addEventListener("scroll", function(){
  console.log(window.scrollY)
  if(window.scrollY > 2400) {
  div4.classList.remove("hidden")
  div4.classList.add("show")
}
})
