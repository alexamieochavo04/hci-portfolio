const body = document.body;
body.style.backgroundColor = 'rgba(255, 146, 118, 0.3)';

const barChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  datasets: [
    {
      label: "Bar Chart",
      data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


const pieChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  datasets: [{
    label: "Pie Chart",
    data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],

    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const pieCtx = document.getElementById("pieChart").getContext("2d");

function renderPieChart() {
  const myPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: pieChart
  });
}

const lineChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: "Line Chart",
      data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
      fill: false,
      borderColor: "rgba(74, 255, 150, 0.94)",
      borderWidth: 1
    }
  ]
};

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // Perform login validation here
      if (email && password) {
          alert("Login successful!");
          // Redirect or perform any other action after successful login
      } else {
          alert("Please enter valid email and password.");
      }
  });

  signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      // Perform signup validation here
      if (name && email && password) {
          alert("Signup successful!");
          // Redirect or perform any other action after successful signup
      } else {
          alert("Please fill in all the fields.");
      }
  });
});

const ctx = document.getElementById('myChart').getContext('2d');
let currentChart;

function renderChart(type) {
  if (currentChart) {
    currentChart.destroy();
  }
  
  let chartData;
  switch (type) {
    case 'bar':
      chartData = barChart;
      break;
    case 'pie':
      chartData = pieChart;
      break;
    case 'line':
      chartData = lineChart;
      break;
    default:
      chartData = barChart;
  }

  currentChart = new Chart(ctx, {
    type: type,
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function changeChartType(type) {
  renderChart(type);
}

renderChart('bar');