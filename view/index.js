const xValues = ["Class A", "Class B", "Class C", "Class D", "Class E"];
const yValues = [90, 80, 85, 75, 95,0];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});