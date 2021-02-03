(function() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    let glyph = urlParams.get('glyph');
    glyph = glyph ? glyph.charCodeAt(0) : 65;
    console.log(glyph);

    let autoplayValue = urlParams.get('auto');
    autoplayValue = autoplayValue === "false" ? false : true;
    console.log(autoplayValue);


    const text = document.getElementsByTagName("h1")[0];
    const input = document.getElementsByTagName("input")[0];
    const label = document.getElementsByTagName("label")[0];

    codeArray = []
    for (let i = 65; i <= 90; i++) {
        codeArray.push(i);
    }
    codeArray.push(196)
    codeArray.push(214);
    codeArray.push(220);
    console.log(codeArray)
    let index = codeArray.indexOf(glyph);
    console.log(index, glyph)

    let autoplay = autoplayValue;
    input.checked = autoplay;

    text.children[0].addEventListener("animationend", (e) => {
        if(autoplay){
            updateIndex(true);
        }
        text.children[0].classList.toggle("forwards");
        text.children[0].classList.toggle("backwards");

        text.children[1].classList.toggle("forwards");
        text.children[1].classList.toggle("backwards");
    });

    function updateIndex(add) {
        if(add) {
            index++;
            index = index % codeArray.length;
                       
        } else  {
            index--;
            index = index < 0 ? codeArray.length -1 : index;
        }

        let value = codeArray[index];

        text.children[0].textContent = String.fromCharCode(value);
        text.children[1].textContent = String.fromCharCode(value);
    }

    text.children[0].textContent = String.fromCharCode(codeArray[index]);
    text.children[1].textContent = String.fromCharCode(codeArray[index]);
    text.children[0].classList.add("forwards")
    text.children[1].classList.add("backwards")

    document.body.addEventListener("click", (e) => {
        if(!autoplay){
            if(e.pageX > window.innerWidth / 2) {
                updateIndex(true)
            } else {
                updateIndex();
            }
        }
    });

    input.addEventListener("input", (e) => {
        console.log("hallo");
        autoplay = !autoplay;
    });

    input.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    label.addEventListener("click", (e) => {
        e.stopPropagation();
    });

})();