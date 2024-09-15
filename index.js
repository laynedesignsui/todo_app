const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//! Adds the entered task to the list of to-dos
function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    // If empty, show an alert message
    alert("You must write something!");
  } else {
    // Create a new 'li' (list item) element
    let li = document.createElement("li");
    // Set the content of the 'li' to the value entered in the input box
    li.innerHTML = inputBox.value;
    // Add the new 'li' element to the list container
    listContainer.appendChild(li);

    // Create a new 'span' element for the delete button (represented by the "×" symbol)
    let span = document.createElement("span");
    // Set the innerHTML of the span to the "×" symbol (Unicode character)
    span.innerHTML = "\u00d7";
    // Add the 'span' (delete button) to the 'li' item
    li.appendChild(span);
  }
  // Clear the input box after adding the task
  inputBox.value = "";
  saveData();
}

//! Adding JavaScript for the click function
listContainer.addEventListener("click", function (e) {
  // Check if the clicked element is an 'li' (list item)
  if (e.target.tagName === "LI") {
    // Toggle the 'checked' class to mark the task as complete or incomplete
    e.target.classList.toggle("checked");
    saveData();
    // Check if the clicked element is a 'span' (the delete button)
  } else if (e.target.tagName === "SPAN") {
    // Remove the entire 'li' (list item) when the 'span' (delete button) is clicked
    e.target.parentElement.remove();
    saveData();
  }
});

// Function to save the current list of tasks to local storage
function saveData() {
  // Save the inner HTML of the list container (which contains all tasks) to localStorage
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the saved tasks from local storage
function showTask() {
  // Retrieve the saved tasks from localStorage and set them as the inner HTML of the list container
  listContainer.innerHTML = localStorage.getIte("data");
}

// Immediately call the showTask function to load saved tasks when the page loads
showTask();
