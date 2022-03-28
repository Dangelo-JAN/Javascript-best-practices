import UpdateLocalStorage from './updatelocalstorage.js';

const todoes = JSON.parse(localStorage.getItem('todoes'));

const DeleteChecked = () => {
  const temp = todoes.filter((todo) => todo.completed === false);

  localStorage.setItem('todoes', JSON.stringify(temp));
  const newTodoes = JSON.parse(localStorage.getItem('todoes'));
  UpdateLocalStorage(newTodoes);
};

const checker = (index, bool) => {
  for (let i = 0; i < todoes.length; i += 1) {
    if (index === todoes[i].index) {
      todoes[i].completed = bool;
      localStorage.setItem('todoes', JSON.stringify(todoes));
    }
  }
};

export { DeleteChecked, checker };
