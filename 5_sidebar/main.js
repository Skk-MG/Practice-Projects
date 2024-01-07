const sidebar = document.querySelector("#sidebar");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
})

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
})
