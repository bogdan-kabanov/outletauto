const callToVin = document.querySelector('.call-to-vin__popup');

const callToVinOpenBtn = document.querySelector('.call-to-vin__popup-open');


callToVinOpenBtn.addEventListener('click', () => {
    callToVin.classList.add('call-to-vin__popup-open');
})

callToVin?.querySelector('.call-to-vin__popup-closed')?.addEventListener('click', () => {
    callToVin.classList.remove('call-to-vin__popup-open');
})