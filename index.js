


document.getElementById("map").addEventListener("click", () => {
    document.getElementById("blurred-background").style.display = "flex"
    document.getElementById("address-info").style.display = "flex"
    console.log("Work")
})

document.getElementById("mx-btn").addEventListener("click", () => {
    document.getElementById("blurred-background").style.display = "none"
    document.getElementById("address-info").style.display = "none"
})