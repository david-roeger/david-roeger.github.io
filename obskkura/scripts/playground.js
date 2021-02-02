(function () {

  Math.randomGaussian = function(mean, standardDeviation) {

      mean = defaultTo(mean, 0.0);
      standardDeviation = defaultTo(standardDeviation, 1.0);

      if (Math.randomGaussian.nextGaussian !== undefined) {
          var nextGaussian = Math.randomGaussian.nextGaussian;
          delete Math.randomGaussian.nextGaussian;
          return (nextGaussian * standardDeviation) + mean;
      } else {
          var v1, v2, s, multiplier;
          do {
              v1 = 2 * Math.random() - 1; // between -1 and 1
              v2 = 2 * Math.random() - 1; // between -1 and 1
              s = v1 * v1 + v2 * v2;
          } while (s >= 1 || s == 0);
          multiplier = Math.sqrt(-2 * Math.log(s) / s);
          Math.randomGaussian.nextGaussian = v2 * multiplier;
          return (v1 * multiplier * standardDeviation) + mean;
      }
  };
  function defaultTo(value, defaultValue) {
      return isNaN(value) ? defaultValue : value;
  }

  const root = document.documentElement;
  const headingWidth = document.getElementById("headingWidth");
  const fontSize = document.getElementById("fontSize");
  const fontSizeContainer = document.getElementsByClassName("fontSize")[0];
  const ligatures = document.getElementById("ligatures");

  const hideWhiteSpace = document.getElementById("whiteSpace");
  let chars = document.getElementsByClassName("chars")[0];
  chars = [...chars.children];

  const hideKern = document.getElementById("hideKern");

  const random = document.getElementById("randomize");
  const text = document.getElementsByClassName("text")[0];

  const label = document.querySelectorAll("label");

  const kern = document.getElementById("kern");

  let v = 24;
  fontSize.addEventListener("blur", (e) => {
    let val = e.target.value;
    v = val;
    val = val.match(/\d/g);
    if (val) {
      val = val.join("");
      fontSize.value = val;
    } else {
      val = 24;
      fontSize.value = 24;
      fontSizeContainer.classList.add("error");
    }
    //console.log(val);
    root.style.setProperty("font-size", val + "px");
  });

  fontSize.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
      fontSize.blur();
    }
  })

  fontSize.addEventListener("focus", (e) => {
    fontSize.value = v;
    fontSizeContainer.classList.remove("error");
  });

  headingWidth.addEventListener("input", (e) => {
    const val = constrain(e.target.valueAsNumber, 400, 720);
    root.style.setProperty("--heading-wdth", val);
    label[0].textContent = `Width: ${val}`;
  });

  ligatures.addEventListener("input", (e) => {
    const val = e.target.checked;
    //console.log(val);
    val
      ? root.style.setProperty(
          "font-variant-ligatures",
          "discretionary-ligatures"
        )
      : root.style.setProperty(
          "font-variant-ligatures",
          "no-discretionary-ligatures"
        );
  });

  hideKern.addEventListener("input", (e) => {
    kern.classList.toggle("hide");
  });

  hideWhiteSpace.addEventListener("input", (e) => {
    chars.forEach((char) => {
      if (char.tagName === "SPAN") char.classList.toggle("w");
    });
  });

  random.addEventListener("input", (e) => {
    const val = e.target.checked;
    if (val) {
      randomize();
    } else {
      unrandomize();
    }
  });

  let dist = [];
  let d = 720-400;
  let angle = 0;
  let angleInc = Math.PI * 1 / d;
  let treshold = 10;
  for (let i = 0; i <= d; i++) {
    let p = 1 - Math.sin(angle);
    angle+=angleInc;
    let total = Math.floor(treshold * p);
    for (let j = 0; j < total; j++) {
      dist.push(i+400)   
    }
  }


  function randomize() {
    text.contentEditable = "false";
      const textDivArray = [...text.children];
      for (let i = text.children.length -1; i >= 0; i--) {
        text.removeChild(text.children[i])
      }
      if(text.textContent) {
        const firstElement = document.createElement('DIV');
        firstElement.textContent = text.textContent;
        textDivArray.unshift(firstElement);
        text.innerHTML = '';
      }


      const textGlyphArray = [];
      textDivArray.forEach(div => {
        const t = div.textContent;
        textGlyphArray.push(div.textContent.split(""));
      });
      
      textGlyphArray.forEach((child, i) => {
        textDivArray[i].innerHTML = "";
        child.forEach(glyph => {
            const span = document.createElement("span");
            span.textContent = glyph;
            const index = Math.floor(Math.random() * dist.length);
            const value = dist[index];
            const spanWidth = value;
            span.style.setProperty('--text-wdth', spanWidth);
            //console.log(spanWidth)
            textDivArray[i].appendChild(span);
          });
      });
      textDivArray.forEach(div => {
        if(div.textContent === "") {
          div.innerHTML = "</br>"
        }
        text.appendChild(div);
      });
  }

  function unrandomize() {
    text.contentEditable = "true";

      const textDivArray = [...text.children];
      for (let i = text.children.length -1; i > 0; i--) {
        text.removeChild(text.children[i])
      }

      const textGlyphArray = [];
      textDivArray.forEach(div => {
        div.innerHTML = div.textContent ? div.textContent : div.innerHTML;
      });
      
      textDivArray.forEach(div => {
        text.appendChild(div);
      });
  }

  randomize();

  function constrain(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  
  function map(value, valueMin, valueMax, targetMin, targetMax) {
    return targetMin + (((value - valueMin) * (targetMax - targetMin)) / (valueMax - valueMin));
  }

  let result = "";
  let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < c.length; i++) {
    const c1 = c[i];

    for (let j = 0; j < c.length; j++) {
      const c2 = c[j];
      let d = document.createElement("div");
      let s1 = document.createElement("span");
      let s2 = document.createElement("span");
      s2.classList.add("expanded");

      s1.textContent = `${c1 + c2 + c2 + c1}`;
      s2.textContent = `${c1 + c2 + c2 + c1}`;

      d.appendChild(s1);
      d.appendChild(s2);
      kern.appendChild(d);
    }
  }
})();
