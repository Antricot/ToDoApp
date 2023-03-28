const form = document.querySelector('form');
const lists = document.querySelector('lists');
const input = document.querySelector('input');

let todoArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let id = Math.random() * 1000000;
  const todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];
  renderDOM.displayData();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

class renderDOM {
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `
      <div class="todo">
      <p>${item.todo}</p>
      <span><button>Delete</button></span>
      </div>
  `;
    });
    lists.innerHTML = displayData.join(' ');
  }
}
