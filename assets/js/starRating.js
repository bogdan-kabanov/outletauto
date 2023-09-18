const starRatingList = document.querySelectorAll('.star-rating');

starRatingList.forEach(rating => {
    const num = Number(rating.getAttribute('data-rating'));
    const starFront = rating.querySelectorAll('.star-front');

    starFront.forEach((star, i) => {
        let numberStar = i + 1
        if (num >= numberStar) {
            star.style.width = '100%'
        } else if (Math.round(num) == numberStar){
            star.style.width = '50%'
        } else {
            star.style.width = '0%'
        }
    })
})