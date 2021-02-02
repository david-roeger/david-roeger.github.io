(function() {
    const container = [...document.getElementsByClassName("center")]
    const white = [...document.getElementsByClassName("center2")]; 

    let total = 0; 
    let max = 75;

    let dist = [];
    let d = 720-400;
    let angle = 0;
    let angleInc = Math.PI * 1 / d;
    let treshold = 10;
    for (let i = 0; i <= d; i++) {
      let p = 1 - Math.sin(angle);
      angle+=angleInc;
      let total = Math.floor(treshold * p);
      for (let j = 5; j < total; j++) {
        dist.push(i+400)   
      }
    }

    white.forEach(text => {
        const word = text.textContent;
        if(word) {
            text.textContent = "";
            const heading = createHeading(word);
            text.appendChild(heading)
        }
    });

    function createHeading(word) {
        const heading = document.createElement("h1");
        const re = /[a-zA-Z]/g;
        glyphs = word.match(re)
        heading.style.setProperty("--text-color",  `hsla(${Math.random() * 360}, 100%, 50%, 1)`)
        glyphs.forEach(glyph => {
            const span = document.createElement("span");
            span.textContent = glyph;
            const index = Math.floor(Math.random() * dist.length);
            const value = dist[index];
            const spanWidth = value;
            span.style.setProperty('--text-wdth', spanWidth);
            heading.appendChild(span);
          });
        return heading
    }

    document.body.addEventListener("mousemove", (e) => {
        move(e.pageX)
    })

    document.body.addEventListener("touchmove", (e) => {
        console.log(e);
        move(e.touches[0].clientX)
    })

    function move(x) {
        const oldTotal = total;
        const mapped = map(x, 0, window.innerWidth, -5, 5); 
        const remapped = 1/(1+Math.pow(Math.E, -mapped));
        total = Math.floor(remapped * max);
        let difference = total - oldTotal;
        if(difference > 0) {
            container.forEach(c => {
                const word = c.getAttribute("text");
                if(word) {
                    for (let i = 0; i < difference; i++) {
                        const heading = createHeading(word);
                        c.appendChild(heading)
                    }
                }
            });
        } else {
            container.forEach(c => {
                difference = Math.abs(difference);
                for (let i = 0; i < difference; i++) {
                    c.removeChild(c.children[0]);
                }
            });
        }
    }

    document.body.addEventListener("click", (e) => {
        white.forEach(text => {
            const word = text.textContent;
            if(word) {
                text.textContent = "";
                const heading = createHeading(word);
                text.appendChild(heading)
            }
        });
    });

    window.addEventListener("resize", (e) => {
        total = 1;
        container.forEach(c => {
            c.innerHTML = "";
            const word = c.getAttribute("text");
            if(word) {
                const heading = createHeading(word);
                c.appendChild(heading)
            }
        });
    })

    function map(value, valueMin, valueMax, targetMin, targetMax) {
        return targetMin + (((value - valueMin) * (targetMax - targetMin)) / (valueMax - valueMin));
    }
})()
