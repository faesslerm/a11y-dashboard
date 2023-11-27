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

const cellClickListener = (event) => {
  const cells = event.target.parentElement.getElementsByTagName("td");
  firstName.innerText = `Firstname: ${cells[0].innerHTML}`;
  lastName.innerText = `Lastname: ${cells[1].innerHTML}`;
  address.innerText = `Address: ${cells[2].innerHTML}`;
};

Array.from(rows).forEach((row, index) => {
  if (index !== 0) {
    row.addEventListener("click", cellClickListener);
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
  rowData.classList.add("pointer");
  rowData.setAttribute("data-bs-toggle", "offcanvas");
  rowData.setAttribute("data-bs-target", "#offcanvasWithBackdrop");
  rowData.innerText = text;
  return rowData;
}

const addUserToTable = user => {
  const row = document.createElement("tr");

  const rowHead = document.createElement("th");
  rowHead.setAttribute("scope", "row");
  rowHead.classList.add("pointer");
  rowHead.setAttribute("data-bs-toggle", "offcanvas");
  rowHead.setAttribute("data-bs-target", "#offcanvasWithBackdrop");
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

  tableData.appendChild(row);
};

const validateUserInputs = (formInput, helpMessage) => {
  if (formInput.value.length < 3 || formInput.value.length > 20) {
    formInput.classList.add("is-invalid");
    helpMessage.classList.add("invalid-feedback");
    helpMessage.innerText = "Must be between 3 and 20 characters long!";
    return false;
  } else {
    formInput.classList.replace("is-invalid", "is-valid");
    helpMessage.classList.replace("invalid-feedback", "valid-feedback");
    helpMessage.innerText = "Looks good!";
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