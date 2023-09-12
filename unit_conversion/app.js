function convertLength() {
    const lengthInput = parseFloat(document.getElementById("length").value);
    const unit = document.getElementById("unit").value;
    let convert = 0;
    console.log(unit)

    switch (unit) {
        case "meters":
            convert = lengthInput;
            break;
        case "centimeters":
            convert = lengthInput * 100;
            break;
        case "kilometers":
            convert = lengthInput / 1000;
            break;
        case "millimeters":
            convert = lengthInput * 1000;
            break;
        case "feet":
            convert = lengthInput * 3.2808;
            break;
        case "yard":
            convert = lengthInput * 1.0936;
            break;
        case "inches":
            convert = lengthInput * 39.370;
            break;
        case "miles":
            convert = lengthInput * 0.00062137;
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = `Converted Length: ${convert.toFixed(2)} ${unit}`;
}