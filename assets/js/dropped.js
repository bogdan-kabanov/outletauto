const dropDownWrapperList = document.querySelectorAll('.drop-down-wrapper');
const dropDownBtnList = document.querySelectorAll('.drop-down-title');

dropDownBtnList.forEach((btn, index) => {
    btn.addEventListener('click', (btn) => {
        const type = btn.target.closest('.drop-down-wrapper').getAttribute('data-type-select');
        inputValue = Array.from(btn.target.closest('.drop-down-wrapper').children).filter(btn => btn.classList.contains('drop-down-value') == true)[0];
        list = Array.from(btn.target.closest('.drop-down-wrapper').children).filter(btn => btn.classList.contains('drop-down-list') == true)[0];

        if (list.classList.contains('drop-down-active')) {
            closedThisDropDown(list);
        } else {
            openThisDropDown(list);
            closedOtherDropDown(index);
        }
        list.querySelectorAll('.drop-down-item').forEach(e => {
            e.addEventListener('click', item => {
                inputValue.value = item.target.innerText
                if (type == 'change') {
                    btn.target.innerText = item.target.innerText
                }
                closedAllDropDown(type)
            })
        })
    })
})

function openThisDropDown(list) {
    list.classList.add('drop-down-active')
}

function closedThisDropDown(list) {
    list.classList.remove('drop-down-active')
}

function closedAllDropDown() {
    dropDownWrapperList.forEach(e => {
        e.querySelector('.drop-down-list').classList.remove('drop-down-active');
    })
}

function closedOtherDropDown(thisIndex) {
    dropDownWrapperList.forEach((e, i) => {
        if (i != thisIndex) {
            e.querySelector('.drop-down-list').classList.remove('drop-down-active');
        }
    })
}