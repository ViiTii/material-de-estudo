function controlls() {
  const controlls = document.querySelectorAll('.controll-items')
  controlls.forEach((itemControl) => {
    itemControl.addEventListener("click", () => {
      const ativo = [...document.querySelectorAll('.controll .ativo')]
      ativo.map((item) => {
        item.classList.remove('ativo')
      })
      itemControl.classList.add('ativo')
    })
  })
}
controlls()

