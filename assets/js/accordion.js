class Accordion {
    constructor(elements){
        this.elements = elements

        this.init()
    }

    init(){
        this.elements?.forEach(list => { 
            const accordion__btns = list?.querySelectorAll('.accardion-btn');
            accordion__btns.forEach(accordion__btn => {
                const accardion_box = accordion__btn.parentNode.querySelector('.accardion-box');
                accordion__btn?.addEventListener('click', e => {
                    if (!accardion_box.classList.contains('overflow-show')) {
                        this.showFilter(accardion_box)
                    } else {
                        this.hiddenFilter(accardion_box)
                    }
                })
            })
        })
    }

    showFilter(item) {
        item.classList.add('overflow-show');
    }

    hiddenFilter(item) {
        item.classList.remove('overflow-show');
    }
}