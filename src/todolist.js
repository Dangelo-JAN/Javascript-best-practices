import * as toDoCheck from './completed.js';
import DeleteIcon from './delete_black_24dp.svg';

//import * as dragAndDrop from './draganddrop.js';

const toDoContainer = document.getElementById('todo-container');
export default class ToDoList {
  createEmpty = () => {
    const todoes = [];
    localStorage.setItem('todoes', JSON.stringify(todoes));
  };

  add = (e) => {
    const description = document.getElementById('todo-input').value;
    const todoes = [];
    const todo = {
      description,
      completed: false,
      index: todoes.length,
    };

    if (localStorage.getItem('todoes') === undefined) {
      todoes.push(todo);
      localStorage.setItem('todoes', JSON.stringify(todoes));
    } else {
      const todoes = JSON.parse(localStorage.getItem('todoes'));
      todo.index = todoes.length + 1;
      todoes.push(todo);
      localStorage.setItem('todoes', JSON.stringify(todoes));
    }
    e.preventDefault();
    window.location.reload();
  };

  setInputTask = (index, value) => {
    const todoes = JSON.parse(localStorage.getItem('todoes'));
    for (let i = 0; i < todoes.length; i += 1) {
      if (index === todoes[i].index) {
        todoes[i].description = value;
      }
    }
    localStorage.setItem('todoes', JSON.stringify(todoes));
  };

  remove = (index) => {
    const todoes = JSON.parse(localStorage.getItem('todoes'));
    for (let i = 0; i < todoes.length; i += 1) {
      if (index === todoes[i].index) {
        todoes.splice(i, 1);
      }
    }

    for (let i = 0; i < todoes.length; i += 1) {
      todoes[i].index = i + 1;
    }

    localStorage.setItem('todoes', JSON.stringify(todoes));
    window.location.reload();
  };

  loadScreen = () => {
    const todoes = JSON.parse(localStorage.getItem('todoes'));
    if (!todoes) {
      this.createEmpty();
    }
    todoes.forEach((todo) => {
      const taskRow = document.createElement('div');
      const checkBox = document.createElement('input');
      const inputTask = document.createElement('input');
      const deleteButtom = document.createElement('img');

      // Adding the elements into the todo-container
      toDoContainer.appendChild(taskRow);
      taskRow.append(checkBox, inputTask, deleteButtom);
      inputTask.value = todo.description;
      deleteButtom.src = DeleteIcon;


      taskRow.id = todo.index;
      // Adding classes to elements
      taskRow.classList.add('row', 'drag');
      inputTask.classList.add('input-task');
      checkBox.classList.add('checkbox');

      // Adding content to the elements
      taskRow.draggable = true;
      inputTask.setAttribute('type', 'text');
      checkBox.setAttribute('type', 'checkbox');

      // addEventListeners
      /*
      taskRow.addEventListener('dragstart', dragAndDrop.handleDragStart);
      taskRow.addEventListener('dragover', dragAndDrop.handleDragOver);
      taskRow.addEventListener('dragenter', dragAndDrop.handleDragEnter);
      taskRow.addEventListener('dragleave', dragAndDrop.handleDragLeave);
      taskRow.addEventListener('dragend', dragAndDrop.handleDragEnd);
      */

      deleteButtom.addEventListener('click', () => {
        this.remove(todo.index);
      });

      inputTask.addEventListener('input', () => {
        this.setInputTask(todo.index, inputTask.value);
      });

      checkBox.addEventListener('change', (e) => {
        if (e.target.checked) {
          toDoCheck.True(todo.index);
        } else {
          toDoCheck.False(todo.index);
        }
      });
    });
  }
}