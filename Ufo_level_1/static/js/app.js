
// from data.js
var tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody");

// creating a function to build a table with the objects from the array data.js
function buildTable(tableData){
    // When the page loads, it needs to display the table
    tbody.html("");
    tableData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
 
 
// Build the table when the page loads
buildTable(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", handleClick);
form.on("change",handleClick);


// creating a function to handle an event of a button click or change in the form, to filter
//  the data based on the entered date and build a new table with the filteredData
function handleClick() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //grab all the table data and set to filteredData

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
  buildTable(filteredData);
}

