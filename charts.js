var etenchart = document.getElementById('etenChart');

Chart.defaults.scale.ticks.suggestedMin = 0;
Chart.defaults.scale.ticks.suggestedMax = 100;
//Chart.defaults.scales.color = '#eeeeee;'

let etenChart = new Chart(etenchart, {
    type: 'bar',
    data: {
        labels: ['Vlees', 'Brood', 'Fruit', 'Pasta', 'Groente', 'Pizza'],
        datasets: [
            {
                label: 'Percentage van vol magazijn',
                backgroundColor: 'rgba(238, 238, 238, 1)',
                borderColor: '#000000',
                borderWidth: 1,
                data: [85, 81, 79, 88, 89, 76],
            }
        ]
    }
    
});

var drinkenchart = document.getElementById('drinkenChart');

Chart.defaults.scale.ticks.suggestedMin = 0;
Chart.defaults.scale.ticks.suggestedMax = 100;

let drinkenChart = new Chart(drinkenchart, {
    type: 'bar',
    data: {
        labels: ['Cola', 'Thee', 'Fristi', 'Fanta', 'Koffie', 'Bier'],
        datasets: [
            {
                label: 'Percentage van vol magazijn',
                backgroundColor: '#eee',
                borderColor: '#eee',
                borderWidth: 1,
                data: [82, 86, 74, 83, 84, 79],
            }
        ]
    }
});

var gforcechart = document.getElementById('gforceChart');

Chart.defaults.scale.ticks.suggestedMin = 0;
Chart.defaults.scale.ticks.suggestedMax = 8;

let gforceChart = new Chart(gforcechart, {
    type: 'polarArea',
    data: {
        //labels: ['Noord-West', 'Zuid-Oost', 'Zuid-West', 'West-Noord'],
        datasets: [
            {
                label: 'Gforce',
                backgroundColor: '#eee',
                borderColor: '#eee',
                borderWidth: 1,
                data: [0, 0, 0,0,0,0,4.5,0,0,0,0,0,0],
            }
        ]
    }
});

var acceleratiechart = document.getElementById('acceleratieChart');

Chart.defaults.scale.ticks.suggestedMax = 24;
Chart.defaults.scale.ticks.suggestedMin = 20;


let acceleratieChart = new Chart(acceleratiechart, {
    type: 'line',
    data: {
        labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', 'NU'],
        datasets: [
            {
                label: 'Snelheid (km/h x 1000) & Tijd',
                fill: false,
                backgroundColor: '#eee',
                borderColor: '#eee',
                borderWidth: 1,
                data: [21.800, 21.870, 21.960, 21.940, 22.080, 22.180, 22.020],
            }
        ]
    }
});

var zwaartekrachtchart = document.getElementById('zwaartekrachtChart');

Chart.defaults.scale.ticks.suggestedMin = 0;
Chart.defaults.scale.ticks.suggestedMax = 10;
//Chart.defaults.scales.color = '#eeeeee;'

let zwaartekrachtChart = new Chart(zwaartekrachtchart, {
    type: 'bar',
    data: {
        labels: ['Aarde', 'Mars', 'Maan', 'Mercurius'],
        datasets: [
            {
                label: 'Zwaartekracht in m/s²',
                backgroundColor: 'rgba(238, 238, 238, 1)',
                borderColor: '#000000',
                borderWidth: 1,
                data: [9.807, 3.711, 1.62, 3.7],
            }
        ]
    }
    
});


var afstandchart = document.getElementById('afstandChart');

Chart.defaults.scale.ticks.suggestedMin = 0;
Chart.defaults.scale.ticks.suggestedMax = 400;

let afstandChart = new Chart(afstandchart, {
    type: 'doughnut',
    data: {
        labels: ['Afstand afgelegd in km'],
        datasets: [
            {
                label: 'Afstand afgelegd in km x 1.000.000',
                fill: false,
                backgroundColor: ['#eee', '#1F1F1F'],
                borderColor: '#eee',
                borderWidth: 1,
                data: [329, 71],
            }
        ]
    }
    
});

//CALCULATOR


(function() {
  "use strict";

  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // Display current number

  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#clear").onclick = clearAll;

  // Add click event to reset button
  el("#reset").onclick = function() {
    window.location = window.location;
  };

}());



window.onload = function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




















