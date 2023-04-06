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
  }
}

function displayData() {
  lists.innerHTML = '';
  todoArr.map((item) => {
    const containerTodo = document.createElement('div');
    containerTodo.id = item.id;
    containerTodo.innerHTML = ` <p>${item.todo}</p> `;
    const btnDel = document.createElement('button');
    btnDel.innerText = 'Delete';
    btnDel.addEventListener('click', (e) => {
      e.preventDefault();
      todoArr = todoArr.filter((todo) => todo.id !== item.id);
      let todoDelete = document.getElementById(item.id);
      todoDelete.remove();
    });
    containerTodo.appendChild(btnDel);
    lists.appendChild(containerTodo);
  });
}

function clearInput() {
  input.value = '';
}
