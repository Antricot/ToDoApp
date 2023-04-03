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
  todoArr.map((item) => {
    const todoToAdd = `
      <div class="todo" id=${item.id}>
      <p>${item.todo}</p>
      <button class='remove' id=btn${item.id}>Delete</button>
      </div>
  `;
    lists.innerHTML += todoToAdd;

    const deleteBtn = document.querySelector(`#btn${item.id}`);
    deleteBtn.addEventListener('click', (e) => {
      return console.log('work');
    });
  });
}

function clearInput() {
  input.value = '';
}
