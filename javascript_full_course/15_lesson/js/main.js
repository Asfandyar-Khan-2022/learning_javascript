// JavaScript Errors and Error Handling
 const view = document.querySelector("#view2");
 const div = view.querySelector("div");
 const h2 = div.querySelector("h2");

//  Syntax: addEventListner(event, function, useCapture)
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("blue");
    },);

    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue";
    },);

    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
},);
}