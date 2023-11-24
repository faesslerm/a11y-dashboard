const table = document.getElementById("customTable");
const rows = table.getElementsByTagName("tr");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");

Array.from(rows).forEach((row, index) => {
  row.addEventListener("click", () => {
    const cells = row.getElementsByTagName("td");
    firstName.innerText = `Firstname: ${cells[0].innerHTML}`;
    lastName.innerText = `Lastname: ${cells[1].innerHTML}`;
    address.innerText = `Address: ${cells[2].innerHTML}`;
  });
});