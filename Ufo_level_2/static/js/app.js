
// from data.js
var tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody");

// creating a function to buid a table
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



// form.on("change",handleChange);

// creating an object filters
filters = {};

function filtering() {
  var inputElement = d3.select(this).select("input");
  console.log(inputElement);
  var inputValue = inputElement.property("value");
  var elementID = inputElement.attr("id");

  if (inputValue) {
    filters[elementID]=inputValue
  }
  else {
    delete filters[elementID];
  }
  // console.log(filters);
handleChange()
}

// creating a function to filter the data and build a table with the result
function handleChange() {
  var filteredData=tableData;
  Object.entries(filters).forEach(([key,value]) => {
    
   filteredData = filteredData.filter(row => row[key] === value)
   
  });
// console.log(filteredData);

  buildTable(filteredData)

}

d3.selectAll(".filter").on("change", filtering);
