class popUpImage {
    constructor(imagesClass) {
        this.images = document.querySelectorAll(`.${imagesClass}`);
        this.popUp = document.createElement('div');
        this.popUpClosed = document.createElement('div');
        this.popUpTargetImage = document.createElement('img');

        this.popUpTargetImage.classList.add('popup-target-image')
        this.popUpTargetImage.alt = 'dinamic popup image'
        this.popUpTargetImage.style.position = 'absolute'
        this.popUp.classList.add('popup-image');
        this.popUp.style.overflow = 'hidden'
        this.popUpClosed.classList.add('popup-image__closed');
        this.popUpTargetImage.draggable = "true"
        this.popUp.appendChild(this.popUpClosed);
        this.popUp.appendChild(this.popUpTargetImage)
        this.scale = 1
        this.defaultX;
        this.defaultY;
        this.init()
    }

    init() {
        this.images.forEach((image) => {
            document.body.appendChild(this.popUp)

            image.addEventListener('click', () => this.openImagePopUp(image))

            this.popUpClosed.addEventListener('click', () => this.closedImagePopUp(image))
        })

        const popUpList = document.querySelectorAll('.popup-image');

        if (this.popUp.addEventListener) {
            if ('onwheel' in document) {
                // IE9+, FF17+, Ch31+
                this.popUp.addEventListener("wheel", (e) => {
                    if (e.deltaY < 0) {
                        this.enlargeImage()
                    } else {
                        this.reduceTheIage()
                    }
                });
            } else if ('onmousewheel' in document) {
                // устаревший вариант события
                this.popUp.addEventListener("mousewheel", (e) => {
                    if (e.deltaY < 0) {
                        this.enlargeImage()
                    } else {
                        this.reduceTheIage()
                    }
                });
            } else {
                // Firefox < 17
                this.popUp.addEventListener("MozMousePixelScroll", (e) => {
                    if (e.deltaY < 0) {
                        this.enlargeImage()
                    } else {
                        this.reduceTheIage()
                    }
                });
            }
        } else { // IE8-
            this.popUp.attachEvent("onmousewheel", (e) => {
                if (e.deltaY < 0) {
                    this.enlargeImage()
                } else {
                    this.reduceTheIage()
                }
            });
        }


        const image = this.popUpTargetImage

        let defaultX = this.popUpTargetImage.offsetLeft
        let defaultY = this.popUpTargetImage.offsetTop

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        this.popUpTargetImage.onmousedown = dragMouseDown

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            image.style.top = (image.offsetTop - pos2) + "px";
            image.style.left = (image.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }

    openImagePopUp(image) {
        document.body.style.overflow = 'hidden'
        const img = this.popUp.querySelector('.popup-target-image').src = image.src
        this.popUp.classList.add('popup-image__show');
        this.defaultX = this.popUpTargetImage.offsetLeft
        this.defaultY = this.popUpTargetImage.offsetTop

        this.popUpTargetImage.style.left = document.documentElement.clientWidth / 2 - this.popUpTargetImage.offsetWidth / 2 + 'px'
        this.popUpTargetImage.style.top = document.documentElement.clientHeight / 2 - this.popUpTargetImage.offsetHeight / 2 + 'px'
    }

    closedImagePopUp() {
        document.body.style.overflow = 'visible'
        this.popUp.classList.remove('popup-image__show');
        this.popUpTargetImage.style.transform = 'scale(1)'

        this.popUpTargetImage.style.left = this.defaultX + 'px'
        this.popUpTargetImage.style.top = this.defaultY + 'px'
    }

    enlargeImage() {
        if (this.scale <= 2.5) {
            this.popUpTargetImage.style.transform = `scale(${this.scale += .2})`
        }
    }

    reduceTheIage() {
        if (this.scale >= .4) {
            this.popUpTargetImage.style.transform = `scale(${this.scale -= .2})`
        }
    }
}