const configuration = (el, value) => {
    const spans = el.querySelectorAll("span");
    spans.forEach((span, index) => {
        span.style.setProperty("--angle-1", `${value[index] [0]}deg`);
        span.style.setProperty("--angle-2", `${value[index] [1]}deg`);
    });
};
setInterval(() => {
    const date = new Date();
    const[h1, h2] = date.getHours().toString().padStart(2, "0");
    const[m1, m2] = date.getMinutes().toString().padStart(2, "0");
    const time = [h1, h2, m1, m2];
    for (let i = 0; i < time.length; i++) {
        configuration(document.querySelector(`#clock-circle-${i}`), digits[time[i]])
    }
})

const digits = {
    0: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    1: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    2: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    3: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    4: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    5: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    6: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    7: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    8: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
    9: [
        [90, 180],
        [90, 270],
        [90, 270],
        [180, 270],

        [0, 180],
        [90, 180],
        [180, 270],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 180],
        [0, 180],
        [0, 180],

        [0, 180],
        [0, 90],
        [0, 270],
        [0, 180],

        [0, 90],
        [90, 270],
        [90, 270],
        [0, 270]
    ],
}