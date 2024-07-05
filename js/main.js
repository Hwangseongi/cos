let links = document.querySelectorAll('a[href="#"]');
links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
/* //a링크 막기------------- */

/* Vars */
let speed = 0;
let speed1 = 0;
let hover = false;
let width;
let times;
let width1;
let times1;
let cloned = [];
let cloned1 = [];

const items = document.querySelectorAll('.magazine .title-item ');
const items1 = document.querySelectorAll('.care .title-item ');
// const words = Array.from(items);
const words = Array.from(items).map((item) => item.querySelector('.title-word'));
const words1 = Array.from(items1).map((item) => item.querySelector('.title-word'));
console.log(words);

/* Calculate */
const calculate = () => {
    // console.log('cloned', cloned);
    cloned.forEach((i) => {
        i.parentNode.removeChild(i);
    });
    cloned = [];

    if (words.length > 0) {
        width = Math.ceil(words[0].clientWidth);
        times = Math.ceil(window.innerWidth / width);

        items.forEach((item) => {
            item.style.width = `${(times + 1) * width}px`;
            words.forEach((word) => {
                console.log(times);
                for (let i = 0; i < times + 1; i++) {
                    const clone = word.cloneNode(true);
                    word.parentNode.appendChild(clone);
                    cloned.push(clone);
                }
            });
        });
    }
};

/* Calculate */
const calculate1 = () => {
    // console.log('cloned', cloned);
    cloned1.forEach((i) => {
        i.parentNode.removeChild(i);
    });
    cloned1 = [];

    if (words.length > 0) {
        width1 = Math.ceil(words1[0].clientWidth);
        times1 = Math.ceil(window.innerWidth / width1);

        items1.forEach((item) => {
            item.style.width = `${(times1 + 1) * width1}px`;
            words1.forEach((word) => {
                console.log(times);
                for (let i = 0; i < times + 1; i++) {
                    const clone = word.cloneNode(true);
                    word.parentNode.appendChild(clone);
                    cloned.push(clone);
                }
            });
        });
    }
};
/* Listeners */
const handleMouse = (bool) => (hover = bool);
items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        handleMouse(true);
    });
    item.addEventListener(
        'touchstart',
        () => {
            handleMouse(true);
        },
        { passive: true }
    );
    item.addEventListener('mouseleave', () => {
        handleMouse(false);
    });
    item.addEventListener(
        'touchend',
        () => {
            handleMouse(false);
        },
        { passive: true }
    );
});

window.addEventListener('resize', calculate);
window.addEventListener('load', calculate);
window.addEventListener('resize', calculate1);
window.addEventListener('load', calculate1);

/* Animate */
const animate = () => {
    // speed
    if (hover) {
        speed += 1; // Hover 상태에서 속도높임
    } else {
        speed += 2; // 기본 속도
    }

    // Text Loop
    if (speed >= width) {
        speed = 0;
    }

    // CSS Text
    items.forEach((item) => {
        item.style.transform = `translateX(${-speed}px)`;
    });
    items1.forEach((item) => {
        item.style.transform = `translateX(${-speed}px)`;
    });
    requestAnimationFrame(animate);
};
const animate1 = () => {
    // speed
    if (hover) {
        speed1 += 1; // Hover 상태에서 속도높임
    } else {
        speed1 += 2; // 기본 속도
    }

    // Text Loop
    if (speed1 >= width1) {
        speed1 = 0;
    }

    // CSS Text

    items1.forEach((item) => {
        item.style.transform = `translateX(${-speed1}px)`;
    });
    requestAnimationFrame(animate1);
};
animate();
animate1();

/* //con2,con4 title------------- */
