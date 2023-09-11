function funcionamento() {
  const data = new Date()
  const hora = data.getHours()
  const bolinha = document.querySelector('.bolinha')

  if (hora >= 8 && hora < 18) {
    bolinha.classList.add('open')
  } else {
    bolinha.classList.remove('open')
  }
}

funcionamento()


function tooltip() {
  const tooltip = document.getElementById('tooltip')
  const mapa = document.getElementById('mapa')
  mapa.addEventListener('mouseenter', entrar)
  mapa.addEventListener('mouseout', sair)

  function entrar() {
    tooltip.classList.add('open')
  }

  function sair() {
    tooltip.classList.remove('open')
  }

}

tooltip()