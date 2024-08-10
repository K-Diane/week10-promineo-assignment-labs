//Create a variable called submitForm that uses getElementById() to target the submit Form

let submitForm = document.getElementById("submitForm");

//variable of number that will hold the number as we submit the form

let number = 0;

// Use the addEventListener method on submitForm that will take event listener type click and event as function.
// and will add event.preventdefault()  to prevent or customize  the default behavior of an event from occurring
// and we will console log the submit form

submitForm.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(submitForm);

  //variables that will hold the values of form  and use getElementId to get the information needed

  let firstName = document.getElementById("firstName").value;

  let lastName = document.getElementById("lastName").value;

  let plantOrder = document.getElementById("plantOrder").value;

  let emailAddress = document.getElementById("emailAddress").value;

  //create a node for each table header and tr node to be appended to the created form after.

  let newTableRow = document.createElement("tr");

  let numberNode = document.createElement("td");
  numberNode.innerHTML = number;
  newTableRow.append(numberNode);

  let firstNameNode = document.createElement("td");
  firstNameNode.innerHTML = firstName;
  newTableRow.append(firstNameNode);

  let lastNameNode = document.createElement("td");
  lastNameNode.innerHTML = lastName;
  newTableRow.append(lastNameNode);

  let plantOrderNode = document.createElement("td");
  plantOrderNode.innerHTML = plantOrder;
  newTableRow.append(plantOrderNode);

  let emailAddressNode = document.createElement("td");
  emailAddressNode.innerHTML = emailAddress;
  newTableRow.append(emailAddressNode);

  //append the infoormation to the table by get element for table body and append the create child row from the above node

  document.getElementById("tableBody").appendChild(newTableRow);

  // setting an empty string to clear the value after submittion of a new one is inputted

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("plantOrder").value = "";
  document.getElementById("emailAddress").value = "";

  //the number will be incremented every time an order is being submitted

  number++;

  // Create the delete node button that will be used on case of deleting an order, add an event listener of click on it
  // and append a delete button and delete table node

  let deletRowTableNode = document.createElement("td");
  let deleteButton = document.createElement("deleteRow");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    newTableRow.remove();
  });
  deletRowTableNode.appendChild(deleteButton);
  newTableRow.appendChild(deletRowTableNode);

  // Append the new row to the table body

  document.getElementById("tableBody").appendChild(newTableRow);
});
