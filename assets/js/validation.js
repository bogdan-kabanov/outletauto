const formList = document.querySelectorAll('form');

formList.forEach(form => {
    const checkEmpty = form.getAttribute('data-check-empty');
    if (JSON.parse(checkEmpty)) {
        const submit = form.querySelector('button[type=submit]')

        const inputList = form?.querySelectorAll('input');
        const textareaList = form?.querySelectorAll('textarea');

        const dropDownItem = form?.querySelectorAll('.drop-down-item');

        [...inputList, ...textareaList].forEach(e => {
            e.addEventListener('input', () => {
                if (isEmpty([...inputList, ...textareaList]) == ([...inputList, ...textareaList].length)) {
                    submit.disabled = false
                } else {
                    submit.disabled = true
                }
            })
        })

        dropDownItem.forEach(e => {
            e.addEventListener('click', () => {
                setTimeout(() => {
                    if (isEmpty([...inputList, ...textareaList]) == ([...inputList, ...textareaList].length)) {
                        submit.disabled = false
                    } else {
                        submit.disabled = true
                    }
                }, 10)
            })
        })
    }
})

function isEmpty(elements) {

    let notEmpty = 0;

    elements.forEach(e => {
        if (e.value.replace(/\s+/g, ' ').trim() != '') {
            notEmpty++
        }
    })

    return notEmpty
}
