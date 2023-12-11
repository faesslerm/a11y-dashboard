const bootstrap = window.bootstrap;

const table = document.getElementById("customTable");
const rows = table.getElementsByTagName("tr");
const tableData = table.getElementsByTagName("tbody")[0];
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const inputFirstName = document.getElementById("inputFirstName");
const helpFirstName = document.getElementById("firstNameHelp");
const inputLastName = document.getElementById("inputLastName");
const helpLastName = document.getElementById("lastNameHelp");
const inputAddress = document.getElementById("inputAddress");
const helpAddress = document.getElementById("addressHelp");
const inputAge = document.getElementById("inputAge");
const ageBadge = document.getElementById("ageBadge");
const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasWithBackdrop');

const cellClickListener = (event) => {
  const cells = event.target.parentElement.getElementsByTagName("td");
  firstName.innerText = `Vorname: ${cells[0].innerHTML}`;
  lastName.innerText = `Nachname: ${cells[1].innerHTML}`;
  address.innerText = `Addresse: ${cells[2].innerHTML}`;
  bsOffcanvas.show();
};

Array.from(rows).forEach((row, index) => {
  if (index !== 0) {
    row.addEventListener("click", cellClickListener);
    row.addEventListener("keypress", event => {
      if (event.key === "Enter" || event.key === " ") {
        cellClickListener(event);
      }
    });
  }
});

const deleteUserListener = (event) => {
  event.stopImmediatePropagation();
  const target = event.target.parentElement;
  if (target.tagName.toLowerCase() === "button") {
    target.parentElement.parentElement.remove();
  } else {
    target.parentElement.remove();
  }
};

const createRowData = (text) => {
  const rowData = document.createElement("td");
  rowData.innerText = text;
  return rowData;
}

const addUserToTable = user => {
  const row = document.createElement("tr");
  row.classList.add("pointer")
  row.setAttribute("tabindex", 0);

  const rowHead = document.createElement("th");
  rowHead.setAttribute("scope", "row");
  rowHead.innerText = Array.from(rows).length;
  row.appendChild(rowHead);

  var rowData = createRowData(user.firstName);
  row.appendChild(rowData);
  rowData = createRowData(user.lastName);
  row.appendChild(rowData);
  rowData = createRowData(user.address);
  row.appendChild(rowData);

  rowData = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("aria-label", "delete user");
  deleteBtn.classList.add("btn", "btn-danger", "deleteUser");
  deleteBtn.addEventListener("click", deleteUserListener);
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash");
  deleteBtn.appendChild(icon);
  rowData.appendChild(deleteBtn);
  row.appendChild(rowData);

  row.addEventListener("click", cellClickListener);
  row.addEventListener("keypress", event => {
    if (event.key === "Enter" || event.key === " ") {
      cellClickListener(event);
    }
  });

  tableData.appendChild(row);
};

const validateUserInputs = (formInput, helpMessage) => {
  if (formInput.value.length < 3 || formInput.value.length > 20) {
    formInput.classList.add("is-invalid");
    helpMessage.classList.add("invalid-feedback");
    helpMessage.innerText = "Muss zwischen 3 und 20 Zeichen lang sein!";
    return false;
  } else {
    formInput.classList.replace("is-invalid", "is-valid");
    helpMessage.classList.replace("invalid-feedback", "valid-feedback");
    helpMessage.innerText = "Sieht gut aus!";
    return true;
  }
};

const saveUserBtn = document.getElementById("saveUser");
saveUserBtn.addEventListener("click", event => {
  if (validateUserInputs(inputFirstName, helpFirstName)
    && validateUserInputs(inputLastName, helpLastName)
    && validateUserInputs(inputAddress, helpAddress)) {
    const user = { firstName: inputFirstName.value, lastName: inputLastName.value, address: inputAddress.value };
    addUserToTable(user);
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
  } else {
    console.log("Validation failed!");
  }
});

Array.from(document.getElementsByClassName("deleteUser")).forEach(btn => {
  btn.addEventListener("click", deleteUserListener);
});

inputAge.addEventListener("change", event => {
  ageBadge.textContent = inputAge.value;
});