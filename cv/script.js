function script() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.replace("dark", "light");
    } else {
        document.body.classList.replace("light", "dark");
    }
}