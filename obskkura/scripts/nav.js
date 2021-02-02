(function () {

    const images = [...document.getElementsByTagName("img")];
    images.forEach(image => {
        console.log(image.complete)
        if(image.complete) {
            image.classList.remove("lazy");
        } else {
            image.addEventListener("load",(e) => {
                image.classList.remove("lazy");
            })
        }
    });

    window.addEventListener("resize", (e) => {
        resize()
    })

    function resize() {
        images.forEach(image => {
            const parent = image.parentElement;
            const parentHeight = parent.offsetHeight;
            const windowHeight = window.innerHeight;
            if(windowHeight > window.innerWidth) {
                parent.style.setProperty("margin-top", `${(windowHeight - parentHeight) / 2}px`);
            } else {
                parent.style.setProperty("margin-top", "0px");
            }
        });
    }

    resize();
})()