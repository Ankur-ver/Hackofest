const gValues = ["Mathematics", "Hindi", "English", "Science", "Social Science"];
const hValues = [90, 80, 85, 75, 95,0];
const barColor = ["blue", "blue","blue","blue","blue"];
new Chart("myChart", {
  type: "bar",
  data: {
    labels: gValues,
    datasets: [{
      backgroundColor: barColor,
      data: hValues,
     
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
   }
});

const mValues = ["Present","Absent" ];
const nValues = [87,13];
const Colors = [
  "#b91d47",
  
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: mValues,
    datasets: [{
      backgroundColor: Colors,
      data: nValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Attendance"
    }
  }
});

const aValues = ["Completed","Remaining" ];
const bValues = [87,13];
const Color = [
  "#b91d47",
  
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: aValues,
    datasets: [{
      backgroundColor: Color,
      data: bValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Activity"
    }
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const editBtn = document.getElementById("edit-btn");
  const editModal = document.getElementById("edit-profile-modal");
  const closeModal = document.querySelector(".close");
  const editProfileForm = document.getElementById("edit-profile-form");

  editBtn.addEventListener("click", function() {
    editModal.style.display = "block";
  });

  closeModal.addEventListener("click", function() {
    editModal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
  });

  editProfileForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const age = document.getElementById("edit-age").value;
    const className = document.getElementById("edit-class").value;
    const gender = document.getElementById("edit-gender").value;
    const dob = document.getElementById("edit-dob").value;
    const email = document.getElementById("edit-email").value;

    document.getElementById("age").textContent = age;
    document.getElementById("class").textContent = className;
    document.getElementById("gender").textContent = gender;
    document.getElementById("dob").textContent = dob;
    document.getElementById("email").textContent = email;

    editModal.style.display = "none";
  });
});