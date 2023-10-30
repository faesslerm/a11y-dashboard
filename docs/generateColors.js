const colorContainer = document.getElementById("colorContainer");

const names = ["primary", "error", "success", "warning", "brown", "bright-green", "dark-green", "turquoise", "dark-blue", "purple", "fuchsia", "pink", "dark-red", "orange", "gold"];
const pcts = ["05pct", "10pct", "20pct", "30pct", "40pct", "50pct", "60pct", "70pct", "80pct"];

const invertColor = (hex, blackWhite = true) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (blackWhite) {
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }

    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    return "#" + padZero(r) + padZero(g) + padZero(b);
}

const generateChild = (name) => {
    const container = document.createElement("div");
    container.classList.add("col-md-4", "mb-3");
    container.style.color = "#FFFFFF";

    const header = document.createElement("div");
    header.classList.add("p-3", "mb-2", "position-relative");
    header.style.backgroundColor = `var(--portal-color-${name})`;
    const title = document.createElement("strong");
    title.classList.add("d-block");
    title.innerHTML = `${name}`;
    header.appendChild(title);
    header.appendChild(document.createTextNode(`${name}-60pct`));
    container.appendChild(header);

    pcts.forEach(pct => {
        const color = document.createElement("div");
        color.classList.add("p-3");
        const fontColor = invertColor(getComputedStyle(document.documentElement).getPropertyValue(`--portal-color-${name}-${pct}`));
        color.style.color = fontColor;
        color.style.backgroundColor = `var(--portal-color-${name}-${pct})`;
        color.innerHTML = `${name}-${pct}`;
        container.appendChild(color);
    });

    return container;
}

names.forEach(name => {
    const child = generateChild(name);
    colorContainer.appendChild(child);
});