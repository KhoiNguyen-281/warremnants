
document.getElementById("confirm").addEventListener("click", () => {
    document.getElementById("success-message").style.display = "flex"
    document.getElementById("blurred-background").style.display = "flex"
})

document.getElementById("x-btn").addEventListener("click", () => {
    document.getElementById("success-message").style.display = "none"
    document.getElementById("blurred-background").style.display = "none"
})
