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
    const todoText = document.createElement('p');
    todoText.innerText = item.todo;
    containerTodo.id = item.id;
    containerTodo.appendChild(todoText);
    const btnDel = document.createElement('button');
    const btnMod = document.createElement('button');
    btnMod.innerText = 'Modify';
    btnDel.innerText = 'Delete';
    btnDel.addEventListener('click', (e) => {
      e.preventDefault();
      todoArr = todoArr.filter((todo) => todo.id !== item.id);
      let todoDelete = document.getElementById(item.id);
      todoDelete.remove();
    });
    btnMod.addEventListener('click', (e) => {
      let aux = document.createElement('input');
      aux.value = todoText.innerText;
      aux.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') return;
        let pula = document.createElement('p');
        pula.innerText = aux.value;
        aux.replaceWith(pula);
      });
      todoText.replaceWith(aux);
    });
    containerTodo.appendChild(btnDel);
    containerTodo.appendChild(btnMod);
    lists.appendChild(containerTodo);
  });
}

function clearInput() {
  input.value = '';
}
