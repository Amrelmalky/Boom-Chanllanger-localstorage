//! Setup Selectors
const adding_button = document.querySelector(".adding");
const show_Tasks = document.querySelector(".show_Tasks");

//! Function to add Task

const add_Task = () => {
  //simple validition
  const input = document.querySelector("input");
  if (input.value == "") alert("pls insert your task");

  //create Task
  const new_Task = `
  <div class="task"> ${input.value}
            <button type="button" class="btn btn-danger delete_btn"> Delete </button>
        </div>
  `;

  show_Tasks.innerHTML += new_Task;
  show_Tasks.classList.add("active");
};

//! add EventListener on adding button
adding_button.addEventListener("click", add_Task);

// fnction to delete tas k

const delete_btn = document.querySelector(".delete_btn");

delete_btn.addEventListener("click", (eo) => {
   new_Task.remove()
  
});
