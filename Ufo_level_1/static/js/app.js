
// from data.js
var tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody");

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

d3.event.preventDefault();

function handleClick() {

  // Grab the datetime value from the filter
  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //grab all the table data and set to filteredData

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
  // Check to see if a date was entered and filter the
  // data using that date.

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// // Build the table when the page loads
// buildTable(tableData);
