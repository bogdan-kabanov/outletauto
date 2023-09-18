class Accordions {
    constructor(wrapper, options) {
        this.activeClass = options.contentActiveClass
        this.wrapper = document.querySelectorAll(`.${wrapper}`);
        this.transition = options.transition
        this.accrodionTitle = options.btn
        this.accrodionContent = options.contentWrapper
        this.init()
    }

    init() {
        this.wrapper.forEach((item) => {
            const btn = item?.querySelector(`.${this.accrodionTitle}`)
            const transition = this.transition
            const accrodionContent = this.accrodionContent
            const activeClass = this.activeClass
            const accardion = new AccardionState({ item, btn, transition, accrodionContent, activeClass })
        })
    }
}

class AccardionState {
    constructor(option) {
        this.accrodionActiveClass = option.activeClass
        this.transition = option.transition

        this.content = option.accrodionContent
        this.item = option.item
        this.btn = option.btn
        this.state = false
        this.init()
    }

    init() {
        this.animate = null;
        this.height = 0;
        const content = this.item.querySelector(`.${this.content}`);
        this.contentHeight = content.offsetHeight;
        content.style.transition = this.transition;
        this.hiddenAccardionContent(content)
        console.log(this.btn);
        this.btn.addEventListener('click', (e) => {
            if (!this.state) {
                this.accrodionActiveClass != undefined ? content.classList.add(this.accrodionActiveClass) : false;
                this.showAccardionContent(content);
            } else {
                this.accrodionActiveClass != undefined ? content.classList.remove(this.accrodionActiveClass) : false;
                this.hiddenAccardionContent(content);
            }
        })
    }

    showAccardionContent(content) {
        this.state = true;
        clearInterval(this.animate);
        content.style.maxHeight = this.contentHeight + "px";
    };

    hiddenAccardionContent(content) {
        content.style.overflow = 'hidden';
        this.state = false;
        content.style.maxHeight = 0 + "px";
    }
}