// Sidebar Toggle Logic
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
