class SelectAll {
  constructor(id, selectArrayName) {
    this.selectAllBtn = document.querySelector(`#${id}`);
    this.selectArray = selectArrayName.map(id => {
      return document.querySelector(`#${id}`);
    })
    this.init();
  }

  init() {
    this.selectArray.forEach(item => {
      item?.addEventListener('change', () => {
        const chekedArray = this.selectArray.map(e => {
          return e.checked
        })

        let checkerTrue = arr => arr.every(v => v === true);
        let checkerFalse = arr => arr.every(v => v === false);

        if (checkerTrue(chekedArray)) {
          this.selectAllBtn.checked = true
        }

        if (checkerFalse(chekedArray)) {
          this.selectAllBtn.checked = false
        }
      })
    })

    this.selectAllBtn.addEventListener('click', () => {
      if (this.selectAllBtn.checked) {
        this.selectAll(this.selectArray)
      }

      if (!this.selectAllBtn.checked) {
        this.deSelectAll(this.selectArray)
      }
    });
  }

  selectAll(arrayCheck) {
    arrayCheck.forEach(item => {
      item.checked = true
    });
  }

  deSelectAll(arrayCheck) {
    arrayCheck.forEach(item => {
      item.checked = false
    });
  }
}
