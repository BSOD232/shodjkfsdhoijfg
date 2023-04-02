let glass = document.createElement("div")
function change(x) {
    const check = document.querySelector(".change")
    x.classList.toggle("change");
    if (check) {
        glass.remove()
    }
    else {
        glass.style.position = "absolute"
        glass.style.zIndex = "1"
        glass.style.height = "100%"
        glass.style.width = "100%"
        glass.style.backdropFilter = "blur(8px)"
        document.body.appendChild(glass)
    }

}