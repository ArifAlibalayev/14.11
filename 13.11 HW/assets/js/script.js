const menubtn = document.querySelector('.menu')
const wrap = document.querySelector(".navwrap")

menubtn.addEventListener("click", function() {
    wrap.classList.toggle("active")
    console.log("salam");
})