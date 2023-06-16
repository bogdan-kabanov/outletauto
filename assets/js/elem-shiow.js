function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}
let options = { threshold: [0.0] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.show-animation');
for (let elm of elements) {
    observer.observe(elm);
}