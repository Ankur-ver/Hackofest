var students = [
    { name: "Karan", studentID: "1001", class: "ECE", group: "1", age: 18, gender: "Male", contact: "karan@example.com" },
    { name: "Ankur", studentID: "1002", class: "CSE", group: "2", age: 17, gender: "Male", contact: "ankur@example.com" },
    { name: "Ashutosh", studentID: "1003", class: "CSE", group: "2", age: 18, gender: "Male", contact: "Ashutosh@example.com" },
    { name: "Satyendra", studentID: "1004", class: "ECE", group: "1", age: 17, gender: "Male", contact: "Satyendra@example.com" },
    { name: "Shaivya", studentID: "1005", class: "EE", group: "1", age: 17, gender: "Female", contact: "Shaivya@example.com" },
    { name: "Suhani", studentID: "1006", class: "CSE", group: "1", age: 19, gender: "Female", contact: "Suhani@example.com" },
    { name: "Pratyaksha", studentID: "1007", class: "EE", group: "1", age: 17, gender: "Female", contact: "Pratyaksha@example.com" },
    { name: "Sohan", studentID: "1008", class: "ME", group: "1", age: 19, gender: "Male", contact: "Sohan@example.com" },
    { name: "Rahul", studentID: "1009", class: "ECE", group: "1", age: 17, gender: "Male", contact: "Rahul@example.com" },
    { name: "Manish", studentID: "1010", class: "ME", group: "1", age: 18, gender: "Male", contact: "Manish@example.com" }
   
    
];


function populateTable() {
    var tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = ""; 

    students.forEach(function(student) {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        var idCell = document.createElement("td");
        idCell.textContent = student.studentID;
        row.appendChild(idCell);

        var classCell = document.createElement("td");
        classCell.textContent = student.class;
        row.appendChild(classCell);

        var groupCell = document.createElement("td");
        groupCell.textContent = student.group;
        row.appendChild(groupCell);

        var ageCell = document.createElement("td");
        ageCell.textContent = student.age;
        row.appendChild(ageCell);

        var genderCell = document.createElement("td");
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        var contactCell = document.createElement("td");
        contactCell.textContent = student.contact;
        row.appendChild(contactCell);

        tableBody.appendChild(row);
    });
}


populateTable();