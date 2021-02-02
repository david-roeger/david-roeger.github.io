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
})()