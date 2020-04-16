 function createTable() {
 var users = [
        {"id": "001", "firstName": "Katniss", "lastName": "Everdeen", "hair": "brown", "age": 17},
        {"id": "012", "firstName": "Mufasa", "lastName": null, "hair": "orange", "age": 8 },
        {"id": "123", "firstName": "Simba", "lastName": null, "hair": "orange", "age": 4},
        {"id": "234", "firstName": "Taylor", "lastName": "Swift", "hair": "blonde", "age": 25},
        {"id": "456", "firstName": "Harry", "lastName": "Potter", "hair": "brown", "age": 11},
        {"id": "777", "firstName": "Hermione", "lastName": "Granger", "hair": null, "age": 11},
        {"id": "888", "firstName": "Ron", "lastName": "Weasley", "hair": "black", "age": 16},
        {"id": "222", "firstName": "Ryan", "lastName": "Gosling", "hair": "black", "age": 16},
        {"id": "333", "firstName": "Katy", "lastName": "Perry", "hair": "blonde", "age": 25},
    ];
      var header = [];
        for (var i = 0; i < users.length; i++) {
            for (var key in users[i]) {
                if (header.indexOf(key) === -1) {
                    header.push(key);
                }
            }
        }
    var table = document.createElement("table");
    table.setAttribute("id","myTable")
    var tr = table.insertRow(-1); 
    for(var i=0;i<header.length;i++){
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = header[i];
            tr.appendChild(th);
    } 
     for (var i = 0; i < users.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < header.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = users[i][header[j]];
            }
        }
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

}

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
function sortAZ() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortZA() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      // Check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
createTable();