function hideRow(item) {
    item.classList.add('hidden')
}

function showRow(item) {
    item.classList.remove('hidden')
}

function search() {
    const searchInput = document.querySelector('#search-input').value;
    const cards = document.querySelectorAll('#cards tr')
    let counter = 0
    cards.forEach(e => {
        const title = e.querySelector('.detal');
        showRow(e)
        if (title.innerText.toUpperCase().search(searchInput.toUpperCase()) != -1) {
            showRow(e)
            counter++
        } else {
            hideRow(e)
        }
    })

    if(counter == 0){
        console.log('Нечего не найденно');
    }
}