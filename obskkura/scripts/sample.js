(function () {
    const s1 = document.querySelector(".sample_1");
    const s2 = document.querySelector(".sample_2");
    const input = document.getElementsByTagName("input")[0];
    
    let shadow = true;
    input.addEventListener("input", (e) => {
        shadow = !shadow;
        suffix = "";
        if(!shadow) {
            suffix = "_empty"
        }
        s1.setAttribute("src", `../../assets/sketchbook/kontur_c${suffix}.svg`)
        s2.setAttribute("src", `../../assets/sketchbook/kontur_e${suffix}.svg`)
     });
 
})();
  