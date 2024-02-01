//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

window.onload = function () {

  var nameOfElement = document.getElementById("displayText");
  if (nameOfElement) {
    nameOfElement.textContent = "Vedantini Dilip Gaikwad NUID: 002998254";
  }

  var dropDown = document.querySelectorAll('.dropDownTextArea');
  for(const collapse of dropDown) {
    collapse.style.display = 'none';
  }

  var submitButton = document.querySelector('#button');
  submitButton.disabled = true;

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  hideLastColumns();

}

function hideLastColumns() {
  var myTable = document.getElementById("myTable");
  var submitButton = document.getElementById("button");
  var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if(checkedCheckboxes.length === 0) {
    submitButton.disabled = true;
    myTable.rows[0].cells[8].hidden = true;
    myTable.rows[0].cells[9].hidden = true;
  }
}

var addNewStudentButton = document.getElementById("add");
addNewStudentButton.addEventListener("click", function() {
  var success = addNewStudent();
  if(success) {
    var myTable = document.getElementById("myTable");
    var numberOfRows = myTable.rows.length;
    var prev = myTable.rows[numberOfRows-2].cells[1].textContent;
    var studentNumber = getNumericContent(prev);
    alert("Student " + studentNumber + " record added successully");
  } else {
    alert("Adding new student record failed");
  }
});

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function(){
    handleCheckboxChange(checkbox);
  });
});

function handleCheckboxChange(checkbox) {
  var row = checkbox.closest("tr");
  var myTable = document.getElementById("myTable");
  var submitButton = document.getElementById("button");

  hideLastColumns();

  if(checkbox.checked) {

    row.classList.add("selected-row");
    submitButton.disabled = false;
    var cell1 = row.insertCell(8);
    var cell2 = row.insertCell(9);
    cell1.innerHTML = "<td><button onclick=deleteEntireRow(this)>Delete</button></td>";
    cell2.innerHTML = "<td><button onclick=editEntry(this)>Edit</button></td>";
    myTable.rows[0].cells[8].hidden = false;
    myTable.rows[0].cells[9].hidden = false;

  } else {
    
    row.classList.remove("selected-row");
    row.deleteCell(9);
    row.deleteCell(8);
    
  }
}

function deleteEntireRow(button) {
  var row = button.closest("tr");
  var studentName = row.cells[1].textContent;
  row.remove();
  hideLastColumns();
  alert( studentName + " Record deleted successfully.");
}

function editEntry(rowObject) {
  var studentRef =
    rowObject.parentElement.parentElement.firstElementChild.nextElementSibling;

  var modal = document.getElementById("myModal");

  var h2Ref = modal.firstElementChild.firstElementChild;
  h2Ref.innerHTML = "Edit Details of " + studentRef.innerHTML;

  var pRef = h2Ref.nextElementSibling;
  pRef.innerHTML = "| ";
  var nextRef = studentRef;
  for (let i = 0; i < 7; i++) {
    pRef.innerHTML += nextRef.innerHTML + " | ";
    nextRef = nextRef.nextElementSibling;
  }
  modal.style.display = "block";
}

function onclickCancel() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function onclickUpdate(buttonObject) {
  onclickCancel();

  var h2Ref = buttonObject.previousElementSibling.previousElementSibling.previousElementSibling;
  setTimeout(function () {
    alert(
      "Student " + h2Ref.innerHTML.split(" ")[4] + " data updated successfully"
    );
  }, 300);
}

function getNumericContent(cellContent) {
  var parts = cellContent.split(" ");
  return parts.length === 2 ? parts[1] : null;
}

function toggleView(element) {
  var table = document.querySelector('#myTable');
    
  var index = element.closest('tr').rowIndex + 1;
  var status = table.rows[index].style.display;
  if (status === 'none'){
    table.rows[index].style.display = 'table-row';
  }
  else{
    table.rows[index].style.display = 'none';
  }
}

function addNewStudent() {
  
  var myTable = document.getElementById("myTable");
  var numberOfRows = myTable.rows.length;
  var prev = myTable.rows[numberOfRows-2].cells[1].textContent;
  var studentNumber = Number(getNumericContent(prev)) + 1;
  console.log(studentNumber);
  var newRow = myTable.insertRow(numberOfRows);

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = "<input type='checkbox' onclick='handleCheckboxChange(this)'/><br /><br /><img src='down.png' width='25px' onclick=\"toggleView(this)\"/>"

  var studentCell = newRow.insertCell(1);
  studentCell.innerHTML = "Student " + (studentNumber);

  var advisorCell = newRow.insertCell(2);
  advisorCell.innerHTML = "Teacher " + (studentNumber);

  var awardCell = newRow.insertCell(3);
  awardCell.innerHTML = "Approved";

  var semesterCell = newRow.insertCell(4);
  semesterCell.innerHTML = "Fall";

  var typeCell = newRow.insertCell(5);
  typeCell.innerHTML = "TA";

  var budgetCell = newRow.insertCell(6);
  budgetCell.innerHTML = "24455";

  var percentagCell = newRow.insertCell(7);
  percentagCell.innerHTML = "100%";

  var dropDownRow = myTable.insertRow(numberOfRows+1);
  dropDownRow.innerHTML = "<tr class=\"dropDownTextArea\"><td colspan=\"8\">" +
  "Advisor:<br /><br />" +
  "Award Details<br />" +
  "Summer 1-2014(TA)<br />" +
  "Budget Number: <br />" +
  "Tuition Number: <br />"+
  "Comments:<br /><br /><br />"+
  "Award Status:<br /><br /><br />" +
  "</td></tr>";
  dropDownRow.classList.add("dropDownTextArea");
  dropDownRow.style.display = 'none';

  return true;
}