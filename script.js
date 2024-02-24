const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15, ,0, 60];
const barColors = ["red", "green", "blue", "orange", "brown"];

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
          text: "World Wine Production 2018"
        }
      }
});
const aValues = ["Math", "Yoruba", "Biology", "Physics", "Chemistry", "others"];
const bValues = [85, 69, 84, 74, 65, 60];
const barColor = ["gold", "black", "silver", "purple", "blue"];

new Chart("myChar", {
    type: "pie",
    data: {
        labels: aValues,
        datasets: [{
            backgroundColor: barColor,
            data: bValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Subject Scores"
        }
      }
});
const rValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const dValues = [55, 49, 44, 24, 15, 60];
const radarColors = ["pink", "lemongreen", "cyano", "wheat"];

new Chart("myCha", {
    type: "radar",
    data: {
        labels: rValues,
        datasets: [{
            backgroundColor: radarColors,
            data: dValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Radar Countries"
        }
      }
});