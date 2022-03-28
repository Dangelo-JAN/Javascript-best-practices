const UpdateLocalStorage = (todoes) => {
  for (let i = 0; i < todoes.length; i += 1) {
    todoes[i].index = i + 1;
  }
  localStorage.setItem('todoes', JSON.stringify(todoes));
};

export default UpdateLocalStorage;