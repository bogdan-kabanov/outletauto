const starBarList = document.querySelectorAll('.stars-bar');

starBarList?.forEach(starBar => {
    const starList = starBar.querySelectorAll('.star-num');
    let summ = 0;

    starList.forEach(e => {
        summ += Number(e.innerText)
    })

    starList.forEach(e => {
        const progres = e.parentNode.querySelector('.progress')
        progres.style.width = Number(e.innerText) / summ * 100 + "%"
    })
});