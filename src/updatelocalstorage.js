const UpdateLocalStorage = () => {  
  for (let i = 0; i < newTodoes.length; i += 1) {
    newTodoes[i].index = i + 1;
  }
  localStorage.setItem('todoes', JSON.stringify(newTodoes));
}

export default UpdateLocalStorage;
