
document.getElementById("confirm").addEventListener("click", () => {
    document.getElementById("success-message").style.display = "flex"
    document.getElementById("blurred-background").style.display = "flex"
})

document.getElementById("x-btn").addEventListener("click", () => {
    document.getElementById("success-message").style.display = "none"
    document.getElementById("blurred-background").style.display = "none"
})


document.getElementById("map").addEventListener("click", () => {
    document.getElementById("blurred").style.display = "flex"
    document.getElementById("address").style.display = "flex"
    console.log("Work")
})

document.getElementById("mx-btn").addEventListener("click", () => {
    document.getElementById("blurred").style.display = "none"
    document.getElementById("address").style.display = "none"
})