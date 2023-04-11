//Known Bugs:
// 1. If you modify task and submit another the changes dissapear >
// 2. Modify button lose event after first action. >
// 3. afisaza subtaskurile odata cu taksul principal
const form = document.querySelector('form');
const lists = document.querySelector('.lists');
const input = document.querySelector('input');

let todoArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') {
    return;
  }
  let id = Math.ceil(Math.random() * 1000000);
  const todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];

  displayData();
  clearInput();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
    this.subtask = ['subtask1', 'subtask2']; // afisaza subtaskurile odata cu taksul principal.
  }
}

function displayData() {
  lists.innerHTML = '';
  todoArr.map((item) => {
    const containerTodo = document.createElement('div');
    const todoText = document.createElement('p');
    const btnDel = document.createElement('button');
    btnDel.innerText = 'Delete';
    btnDel.id = 'btnDel' + item.id;
    const btnMod = document.createElement('button');
    btnMod.innerText = 'Modify';
    btnMod.id = 'btnMod' + item.id;
    todoText.innerText = item.todo;
    containerTodo.id = item.id;

    // // Delete Button

    btnDel.addEventListener('click', (e) => {
      e.preventDefault();
      todoArr = todoArr.filter((todo) => todo.id !== item.id);
      displayData();
    });

    // Modify Button

    btnMod.addEventListener('click', (e) => {
      let inputForMod = document.createElement('input');
      inputForMod.value = todoText.innerText;
      todoText.replaceWith(inputForMod);
      inputForMod.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') return;

        //modifica valoarea in array
        todoArr.forEach((element) => {
          if (element.id === item.id) {
            element.todo = inputForMod.value;
            displayData();
          }
        });
      });
    });

    // Adding things to the main container
    containerTodo.appendChild(todoText);
    containerTodo.appendChild(btnDel);
    containerTodo.appendChild(btnMod);
    lists.appendChild(containerTodo);
  });
}

function clearInput() {
  input.value = '';
}
