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
  console.log(todo);

  displayData();
  clearInput();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
    this.subtask = [];
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
    const btnSub = document.createElement('button');
    btnSub.innerText = 'SubTask';
    btnSub.id = 'subMod' + item.id;
    todoText.innerText = item.todo;

    containerTodo.id = item.id;

    // Sub-Task button
    btnSub.addEventListener('click', (e) => {
      const subtaskInput = document.createElement('input');
      subtaskInput.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') return;
        item.subtask.push(subtaskInput.value);
        displayData();
      });

      e.preventDefault();

      containerTodo.appendChild(subtaskInput);
    });

    const subtaskList = document.createElement('div');
    item.subtask.forEach((subtask) => {
      const subtaskItem = document.createElement('p');
      subtaskItem.innerText = subtask;
      subtaskList.appendChild(subtaskItem);
    });

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
    containerTodo.appendChild(subtaskList);
    containerTodo.appendChild(btnDel);
    containerTodo.appendChild(btnSub);
    containerTodo.appendChild(btnMod);
    lists.appendChild(containerTodo);
  });
}

function clearInput() {
  input.value = '';
}
