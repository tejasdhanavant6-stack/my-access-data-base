function addStudent() {
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value;

    if (name === "" || marks === "") {
        alert("Please enter name and marks");
        return;
    }

    const table = document.getElementById("studentTable");

    const row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = marks;

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}