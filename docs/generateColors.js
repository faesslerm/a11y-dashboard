const colorContainer = document.getElementById("colorContainer");

const names = ["primary", "error", "success", "warning", "brown", "bright-green", "dark-green", "turquoise", "dark-blue", "purple", "fuchsia", "pink", "dark-red", "orange", "gold"];
const pcts = ["05pct", "10pct", "20pct", "30pct", "40pct", "50pct", "60pct", "70pct", "80pct"];

const generateChild = (name) => {
    const container = document.createElement("div");
    container.classList.add("col-md-4", "mb-3");

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