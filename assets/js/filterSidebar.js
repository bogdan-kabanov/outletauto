class Filter {
    constructor(id, lists, searchs) {
        this.filter = document.querySelector(`#${id}`);
        this.included = this.filter.querySelector('.filter-included');
        this.filterArray = new Map();
        this.includedCheck;

        this.manufacturerSelectAll = lists.map(selectList => {
            return new SelectAll(selectList.selecetAll, selectList.arr)
        })
        this.init()
    }

    init() {

        new Accordion(this.filter.querySelectorAll('.filter-list'))

        this.manufacturerSelectAll.forEach(__selectList => {
            __selectList.selectAllBtn.addEventListener("click", (e) => {
                if (__selectList.selectAllBtn.checked) {
                    this.addAllFilters(__selectList.selectArray)
                } else {
                    this.removeAllFilters(__selectList.selectArray)
                }

                this.updateIncludedFilterArray()
            })

            __selectList.selectArray.forEach(filter => {
                filter?.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        this.addTargetFilter(filter)
                    }

                    if (!e.target.checked) {
                        this.removeTargetFilter(`${filter.id}-included`)
                    }

                    this.updateIncludedFilterArray()
                });
            })
        })
    }

    addAllFilters(array) {
        array.forEach(check => {
            const checkWrapper = check.closest('.check-with-label-wrapper').cloneNode(true);
            let id = checkWrapper.querySelector('.check-with-label').id;
            checkWrapper.querySelector('.check-with-label').id = checkWrapper.querySelector('.check-with-label').id + "-included"
            const label = checkWrapper.querySelector('.label-for-check').setAttribute('for', checkWrapper.querySelector('.check-with-label').id);
            checkWrapper.id = id + "-included-wrapper";

            if (this.included.querySelector(`#${id}-included-wrapper`) == null) {
                this.included.appendChild(checkWrapper)
            }
        });
    }

    removeAllFilters(array) {

        array.forEach(e => {
            this.included.querySelector(`#${e.id}-included`)?.parentNode.remove();
        })
    }

    removeTargetFilter(filterClass) {
        this.included?.querySelector(`#${filterClass}`)?.parentNode?.remove();
    }

    addTargetFilter(check) {
        const checkWrapper = check.closest('.check-with-label-wrapper').cloneNode(true);
        let id = checkWrapper.querySelector('.check-with-label').id;
        checkWrapper.querySelector('.check-with-label').id = checkWrapper.querySelector('.check-with-label').id + "-included"
        const label = checkWrapper.querySelector('.label-for-check').setAttribute('for', checkWrapper.querySelector('.check-with-label').id);
        checkWrapper.id = id + "-included-wrapper";

        if (this.included.querySelector(`#${id}-included-wrapper`) == null) {
            this.included.appendChild(checkWrapper)
        }
    }

    updateIncludedFilterArray() {
        this.included.querySelectorAll('.check-with-label').forEach(includedCheck => {
            includedCheck.addEventListener('change', () => {
                this.manufacturerSelectAll.forEach(__selectList => {
                    __selectList.selectArray.forEach(check => {
                        if (check.id == includedCheck.id.replace('-included', '')) {
                            includedCheck.parentNode.remove()
                            check.checked = false
                        }
                    })
                })

                let checkedState = []
                this.manufacturerSelectAll.forEach(__selectList => {
                    __selectList.selectArray.forEach(e => {
                        checkedState.push(e.checked);
                    })
                })

                let checkerFalse = arr => arr.every(v => v === false);

                if (checkerFalse(checkedState)) {
                    this.manufacturerSelectAll.forEach(__selectList => {
                        __selectList.selectAllBtn.checked = false
                    })
                }
            })
        })
    }
}