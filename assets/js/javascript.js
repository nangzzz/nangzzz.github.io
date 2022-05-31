const text = document.querySelector (".sec-info")
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "web developer"
    }, 0);
    setTimeout(() => {
        text.textContent = "progammer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "college"
    }, 8000);
}

textLoad ();
setInterval(textLoad, 12000)