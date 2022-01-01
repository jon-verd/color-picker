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
    let colorPickers;
    colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorbox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; 1 < pickerLen; i++){
        pickerElements[i].addEventListener('change', () => {
            console.log("Red Value: ", colors.red.value);
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(element,red, green, blue);
            setDisplayValues(red, green, blue)
    });
    }
/*
    rgb.red.addEventListener('change', () => {
        console.log("Red Value: ", rgb.red.value);
        setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
    } );
    rgb.green.addEventListener('change', () => {
        console.log("Green Value: ", rgb.green.value);
        setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
    } );
    rgb.blue.addEventListener('change', () => {
        console.log("Blue Value: ", rgb.blue.value);
        setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
    } );*/
}

function setElementBGColor(colorbox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    colorbox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}