const table = document.getElementById("customTable");
const rows = table.getElementsByTagName("tr");
const tableData = table.getElementsByTagName("tbody")[0];
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputAddress = document.getElementById("inputAddress");

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

const addUserToTable = user => {
  const row = document.createElement("tr");
  row.classList.add("pointer");
  row.setAttribute("data-bs-toggle", "offcanvas");
  row.setAttribute("data-bs-target", "#offcanvasWithBackdrop");

  const rowHead = document.createElement("th");
  rowHead.setAttribute("scope", "row");
  rowHead.innerText = Array.from(rows).length;
  row.appendChild(rowHead);

  var rowData = document.createElement("td");
  rowData.innerText = user.firstName;
  row.appendChild(rowData);
  rowData = document.createElement("td");
  rowData.innerText = user.lastName;
  row.appendChild(rowData);
  rowData = document.createElement("td");
  rowData.innerText = user.address;
  row.appendChild(rowData);

  row.addEventListener("click", cellClickListener);

  tableData.appendChild(row);
};

const saveUserBtn = document.getElementById("saveUser");
saveUserBtn.addEventListener("click", event => {
  const user = { firstName: inputFirstName.value, lastName: inputLastName.value, address: inputAddress.value };
  addUserToTable(user);
});