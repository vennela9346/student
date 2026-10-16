
let students = JSON.parse(localStorage.getItem("students") || "[]");

function showStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((s, i) => {
        list.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.marks}</td>
            <td>${s.branch}</td>
            <td>${s.course}</td>
            <td>
                <button class="delete" onclick="deleteStudent(${i})">
                    Delete
                </button>
            </td>
        </tr>`;
    });

    document.getElementById("count").innerText =
        "Total Students: " + students.length;
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let marks = document.getElementById("marks").value;
    let branch = document.getElementById("branch").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!name || marks === "" || !branch || !course) {
        alert("Please fill all details!");
        return;
    }

    if (+marks < 0 || +marks > 100) {
        alert("Marks must be between 0 and 100!");
        return;
    }

    students.push({name, marks, branch, course});
    saveData();

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
}

function deleteStudent(i) {
    students.splice(i, 1);
    saveData();
}

function clearAll() {
    if (confirm("Delete all student details?")) {
        students = [];
        saveData();
    }
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
    showStudents();
}

showStudents();
