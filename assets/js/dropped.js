const btnList = document.querySelectorAll('.transparent-btn');
btnList.forEach((e, i) => {
    e.addEventListener('click', (e) => {
        btnList.forEach((e, i2) => {
            if (i != i2) {
                e.querySelector(".dropped-active")?.classList.remove('dropped-active')
            }
        })
        const dropped = e.target.querySelector('.dropped');
        if (dropped.classList.contains('dropped-active') == false) {
            dropped.classList.add('dropped-active')
            document.documentElement.style.setProperty("--main-height-dropped", dropped.getAttribute("data-height") + "px");
        } else {
            dropped.classList.remove('dropped-active')
            document.documentElement.style.setProperty("--main-height-dropped", 0 + "px");
        }
    })
})