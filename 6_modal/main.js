const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
})

