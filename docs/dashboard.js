const table = document.getElementById("customTable");
const rows = table.getElementsByTagName("tr");
console.log(rows);

Array.from(rows).forEach((row, index) => {
  row.addEventListener("click", () => {
    const cells = row.getElementsByTagName("td");
    console.log(`Clicked on row ${index}`);
  });
});