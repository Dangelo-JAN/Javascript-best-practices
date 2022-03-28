const todoes = JSON.parse(localStorage.getItem('todoes'));

const DeleteChecked = () => {
  const temp = todoes.filter(todo => todo.completed === false);

  localStorage.setItem('todoes', JSON.stringify(temp));
  const newTodoes = JSON.parse(localStorage.getItem('todoes'));

  for (let i = 0; i < newTodoes.length; i += 1) {
    newTodoes[i].index = i + 1;
  }
  localStorage.setItem('todoes', JSON.stringify(newTodoes));
  window.location.reload();
};

const True = (index) => {
  for (let i = 0; i < todoes.length; i += 1) {
    if (index === todoes[i].index) {
      todoes[i].completed = true;
      localStorage.setItem('todoes', JSON.stringify(todoes));
    }
  }
};

const False = (index) => {
  for (let i = 0; i < todoes.length; i += 1) {
    if (index === todoes[i].index) {
      todoes[i].completed = false;
      localStorage.setItem('todoes', JSON.stringify(todoes));
    }
  }
};

export { DeleteChecked, True, False };