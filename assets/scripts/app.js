const form = document.querySelector('form');
const lists = document.querySelector('.lists');
const input = document.querySelector('input');

let todoArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value === '') {
    return;
  }
  let id = Math.random() * 1000000;
  const todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];
  renderDOM.displayData();
  renderDOM.clearInput();
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
      <button class='remove'>Delete</button>
      </div>
  `;
    });
    lists.innerHTML = displayData.join(' ');
  }
  static clearInput() {
    input.value = '';
  }
  static removeBtn() {
    const deleteBtn = document.querySelector('.remove');
    deleteBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        return console.log('work');
      });
    });
  }
}
