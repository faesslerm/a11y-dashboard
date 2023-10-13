const mainContainer = document.getElementById("content");
const btnSuccess = document.getElementById("btnSuccess");
const btnWarning = document.getElementById("btnWarning");
const btnError = document.getElementById("btnError");

btnSuccess.addEventListener("click", event => {
    const alert = createAlert("success");
    mainContainer.appendChild(alert);
});

btnWarning.addEventListener("click", event => {
    const alert = createAlert("warning");
    mainContainer.appendChild(alert);
});

btnError.addEventListener("click", event => {
    const alert = createAlert("danger");
    mainContainer.appendChild(alert);
});

const createAlert = (alertType) => {
    const container = document.createElement("div");
    container.classList.add("alert", `alert-${alertType}`, "alert-dismissible", "fade", "show", "d-flex", "align-items-center");

    const content = document.createElement("div");
    const icon = getIcon(alertType);
    content.appendChild(icon);
    content.appendChild(document.createTextNode(`An example ${alertType} alert with an icon`));
    container.appendChild(content);

    const close = document.createElement("button");
    close.classList.add("btn-close");
    close.setAttribute("data-bs-dismiss", "alert");
    container.appendChild(close);

    return container;
};

const getIcon = (alertType) => {
    const icon = document.createElement("i");
    switch (alertType) {
        case "success":
            icon.classList.add("fa-check-circle");
            break;
        case "warning":
            icon.classList.add("fa-exclamation-triangle");
            break;
        case "danger":
            icon.classList.add("fa-exclamation-circle");
            break;

        default:
            break;
    }
    icon.classList.add("fa", "fa-check-circle", "flex-shrink-0", "me-2");

    return icon;
};