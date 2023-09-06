class Search {
    constructor(id, list, choice_data, input_options) {
        this.search = document.querySelector(`#${id}`);
        this.input_placeholder = input_options.placeholder
        this.class = input_options.class
        this.choice_array = document.querySelectorAll(`.${choice_data}`);
        this.init()
    }

    init() {
        this.createInput()
    }

    createInput() {
        const input = document.createElement('input');
        this.search.appendChild(input)
        input.classList.add(this.class)
        input.placeholder = this.input_placeholder

        const choise__text = []
        this.choice_array.forEach(choice => {choise__text.push(choice.innerText)})
        choise__text.sort()
    }

    createHints(){
        
    }
}