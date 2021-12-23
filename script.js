window.onload = function () {
    initColorPicker();
};
function initColorPicker() {
    let colorbox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
}

function setColorPickerEventListeners(colorbox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("Red Value: ", rgb.red.value);
    } )
}