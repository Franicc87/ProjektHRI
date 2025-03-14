function animateCounters(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const targetValue = parseInt(counter.getAttribute('data-target'));
            let currentValue = 0;
            const type = counter.getAttribute('data-type');


            const increment = Math.ceil(targetValue / 100);
            const speed = 20;

            const updateCount = () => {
                if (currentValue < targetValue) {
                    currentValue += increment;
                    if (currentValue > targetValue) currentValue = targetValue;
                    counter.textContent = currentValue;
                    setTimeout(updateCount, speed);
                } else {
                    counter.textContent = targetValue;
                }
            };

            updateCount();
            observer.unobserve(counter);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(animateCounters, {
        threshold: 0.5,
    });
    counters.forEach((counter) => {
        observer.observe(counter);
    });
});



var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
