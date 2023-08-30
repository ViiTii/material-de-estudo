function descricao() {
  const animaisCont = document.querySelectorAll('.lista-animais li')
  const animaisDesc = document.querySelectorAll('.descricao-animais')
  const lista = Array.from(animaisCont)
  lista.forEach((item) => {
    item.addEventListener("click", (e) => {

      animaisDesc.forEach((desc) => {
        if (desc.classList.contains(e.currentTarget.id)) {
          desc.classList.add("ativo")
        } else {
          desc.classList.remove("ativo")
        }
      })
    })
  })
}
descricao()