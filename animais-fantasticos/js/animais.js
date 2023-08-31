function descricao() {
  const animaisCont = document.querySelectorAll('.lista-animais li');
  const animaisDesc = document.querySelectorAll('.descricao-animais');

  animaisCont.forEach((item) => {
    item.addEventListener("click", (e) => {
      const animalId = e.currentTarget.id;
      
      animaisDesc.forEach((desc) => {
        if (desc.classList.contains(animalId)) {
          desc.classList.add("ativo");
        } else {
          desc.classList.remove("ativo");
        }
      });
    });
  });
}
descricao()