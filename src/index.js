document.addEventListener("DOMContentLoaded", () => {
  // As a user, I should be able to type a task into the input field
  // As a user, I should be able to click some form of a submit button
  // As a user, the task string that I provided should appear on the DOM after the submit button has been activated
  // A delete function will remove tasks from the list

  // TODO: A priority value selected from a dropdown will determine the color of the text in the list
  // TODO: Sort tasks based on priority 

  const submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(event) {
    let ul = document.getElementById("tasks");
    let li = document.createElement('li');
    li.classList.add("task-description")
    li.innerHTML = document.getElementById("new-task-description").value;
    ul.appendChild(li);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "X";
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(e) {
      //Want to find parent of this button and delete it (along with button!)
      eltToDelete = deleteButton.parentNode;
      eltToDelete.remove();
      event.preventDefault();
    }) //addEventListener click of delete button

    event.preventDefault();
  }) //addEventListener click of submit button

}); //addEventListener DOMContentLoaded
