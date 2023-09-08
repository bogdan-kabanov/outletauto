const starsList = document.querySelectorAll('.card-stars');

starsList.forEach(e => {
    const value = Number(e?.getAttribute('data-star-value'));
    const stats = e?.querySelectorAll('.star');
    stats.forEach((e, i) => {
        if (value >= i + 1) {
            e.classList.add('whole-star');
        } else if (value >= i + 1 - 0.5) {
            e.classList.add('half-star');
        }
    })
})