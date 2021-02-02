(function () {
    const fac = new FastAverageColor();
    const i = document.querySelector('.image');
    const ic = document.querySelector('.image-container');

    const input = document.getElementsByTagName("input")[0];
    const h1 = document.getElementsByTagName("h1")[0];
    const label = document.getElementsByTagName("label")[0];


    function loadImage(value) {

        let img = document.createElement('img');
        img.addEventListener("load", (e) => {
            fac.getColorAsync(img, {algorithm: 'sqrt'})
            .then(color => {
                document.body.style.setProperty("--bg-color", color.rgba)
                //document.body.style.color = color.isDark ? '#fff' : 'rgba(12,12,12)';
                i.style.backgroundImage = `url(${img.src})`
                ic.style.backgroundImage = `url(${img.src})`;

            })
            .catch(e => {
                console.log(e);
            });
        })
        img.crossOrigin = "anonymous";
        img.src = `https://source.unsplash.com/collection/98653053?${Math.floor(Math.random() * 1000)}`;

        document.body.style.setProperty('--heading-wdth', value);
    }


    let dist = [];
    let d = 720-400;
    let angle = 0;
    let angleInc = Math.PI * 1 / d;
    let treshold = 5;
    for (let i = 0; i <= d; i++) {
    let p = 1 - Math.sin(angle);
    angle+=angleInc;
    let total = Math.floor(treshold * p);
    for (let j = 0; j < total; j++) {
        dist.push(i+400)   
    }
    }

    let w = 0;
    function update() {
        let d = 0;
        let index;
        let value;
        while (d < 10) {
            index = Math.floor(Math.random() * dist.length);
            value = dist[index];
            d = Math.abs(value - w);
        }
        w = value;
        document.body.style.setProperty('--heading-wdth-vmin', `${value / 10}vmin`);
        i.style.backgroundImage = "";
        ic.style.backgroundImage = "";
        loadImage(value);
    }

    update();

    document.body.addEventListener("click", (e) => {
    update();
    })

    input.addEventListener("input", (e) => {
       h1.classList.toggle("lh")
    });

    
    input.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    label.addEventListener("click", (e) => {
        e.stopPropagation();
    });
})()
