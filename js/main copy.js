/*--------------------
Vars
--------------------*/
let speed = 0;
let acc = 0;
let hover = false;
let width;
let times;
let cloned = [];

const item = document.querySelector('.title-item');
const word = item.querySelector('.title-word');

/*--------------------
Calculate
--------------------*/
const calculate = () => {
    console.log('cloned', cloned);
    cloned.forEach((i) => {
        i.parentNode.removeChild(i);
    });
    cloned = [];

    width = Math.ceil(word.clientWidth);
    times = Math.ceil(window.innerWidth / width);

    item.style.width = `${(times + 1) * width}px`;

    for (let i = 0; i < times + 1; i++) {
        const clone = word.cloneNode(true);
        word.parentNode.appendChild(clone);
        cloned.push(clone);
    }
};

/*--------------------
Listeners
--------------------*/
const handleMouse = (bool) => (hover = bool);
item.addEventListener('mouseenter', () => {
    handleMouse(true);
});
item.addEventListener('touchstart', () => {
    handleMouse(true);
});
item.addEventListener('mouseleave', () => {
    handleMouse(false);
});
item.addEventListener('touchend', () => {
    handleMouse(false);
});
window.addEventListener('resize', calculate);
window.addEventListener('load', calculate);

/*--------------------
Animate
--------------------*/
const animate = () => {
    // Acceleration
    acc += 0.05;
    if (hover) {
        acc -= 0.15;
    }

    // Min/Max accelearion
    acc = Math.min(10, Math.max(0, acc));

    // Add acceleration to speed
    speed += acc * 0.3;

    // Text Loop
    if (speed >= width) {
        speed = 0;
    }

    // CSS Text
    item.style.transform = `translateX(${-speed}px) skewX(${-2 * acc}deg)`;

    // RaF
    requestAnimationFrame(animate);
};
animate();
