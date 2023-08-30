document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.itc-slider').forEach((el) => {
    ItcSlider.getOrCreateInstance(el);
    });
});

ItcSlider.getOrCreateInstance('.itc-slider', {
    loop: false, // без зацикливания
    swipe: false // без свайпа
});