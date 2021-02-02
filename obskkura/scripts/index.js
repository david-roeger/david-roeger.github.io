(function () {
  const body = document.querySelector("body");

  let imageCounter = 0;

  const portrait = new Image();
  portrait.addEventListener("load", (e) => {
    body.style.setProperty("--portrait-bg", `url(${portrait.src})`);
    imageCounter++;
    if (imageCounter == 2) {
      body.style.setProperty("--before-bg", "rgb(12, 12, 12);");
      body.style.setProperty("--before-opacity", "0.4");
      frame = requestAnimationFrame(update);
    }
  });
  portrait.src = "https://source.unsplash.com/6c43FgRt0Dw";

  const landscape = new Image();
  landscape.addEventListener("load", (e) => {
    body.style.setProperty("--landscape-bg", `url(${landscape.src})`);
    imageCounter++;
    if (imageCounter == 2) {
      body.style.setProperty("--before-bg", "black");
      body.style.setProperty("--before-opacity", "0.4");
      frame = requestAnimationFrame(update);
    }
  });
  landscape.src = "https://source.unsplash.com/8xd8LoQJyFk";

  const h1 = document.querySelector("h1");
  const spans = [...h1.children];

  const oval = document.querySelector(".center");

  let mode = 0;
  spans.pop();
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    span.style.setProperty(
      "transform",
      `rotate(${(360 / spans.length) * i}deg)`
    );
  }

  let current = 0;
  let frameCount = 0;
  let duration = 45;
  let delay = 0;

  let disableAnimation = false;

  let random = true;
  let frame;

  function update() {
    frameCount++;
    if (!disableAnimation) {
      if (frameCount >= delay) {
        if (frameCount % duration === 0) {
          spans[current].classList.remove("active");
          if (random) {
            let oldCurrent = current;
            while (current === oldCurrent) {
              current = Math.floor(Math.random() * spans.length);
            }
          } else {
            current++;
            current = current % spans.length;
          }
          spans[current].classList.add("active");
        }
      }
    }

    frame = requestAnimationFrame(update);
  }

  /* update with delay
  let add = true;
  function update() {
    frameCount++;
    if (!disableAnimation) {
      if (frameCount >= delay) {
        if (frameCount % duration === 0) {
          if (add) {
            if (random) {
              let oldCurrent = current;
              while (current === oldCurrent) {
                current = Math.floor(Math.random() * spans.length);
              }
            } else {
              current++;
              current = current % spans.length;
            }
            spans[current].classList.add("active");
          } else {
            spans[current].classList.remove("active");
          }
          add = !add;
        }
      }
    }
        frame = requestAnimationFrame(update);
  }
*/

  /*  update oval with delay
  let add = true;
  function update() {
    frameCount++;
    if (!disableAnimation) {
      if (frameCount >= delay) {
        if (frameCount % duration === 0) {
          if (random) {
            spans[current].classList.remove("active");
            let oldCurrent = current;
            while (current === oldCurrent) {
              current = Math.floor(Math.random() * spans.length);
            }
            spans[current].classList.add("active");
          } else {
            if (add) {
              current++;
              current = current % spans.length;
              spans[current].classList.add("active");
            } else {
              spans[current].classList.remove("active");
            }
            add = !add;
          }
        }
      }
    }

    frame = requestAnimationFrame(update);
  }
  */
  h1.addEventListener("mouseleave", (e) => {
    random = true;
    frame = requestAnimationFrame(update);
  });

  spans.forEach((span) => {
    span.addEventListener("mouseenter", (e) => {
      delay = 0;
      if (frame) {
        cancelAnimationFrame(frame);
      }
      spans.forEach((span) => {
        span.classList.remove("active");
      });
      span.classList.add("active");
      current = spans.findIndex((s) => s === span);
    });

    span.addEventListener("mouseleave", (e) => {
      span.classList.remove("active");
    });
  });

  oval.addEventListener("mouseenter", (e) => {
    random = false;
    if (frame) {
      cancelAnimationFrame(frame);
    }
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    frame = requestAnimationFrame(update);
  });

  oval.addEventListener("mouseleave", (e) => {
    random = true;
    if (frame) {
      cancelAnimationFrame(frame);
    }

    spans.forEach((span) => {
      span.classList.remove("active");
    });
  });

  body.addEventListener("dblclick", (e) => {
    disableAnimation = !disableAnimation;
    spans.forEach((span) => {
      span.classList.remove("active");
    });
  });
})();
