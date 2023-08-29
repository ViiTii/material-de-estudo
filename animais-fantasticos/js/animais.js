function tirarAtivo() {
  const ativo = [...document.querySelectorAll('.ativo')]
  ativo.map((el) => {
    el.classList.remove('ativo')
  })
}

function descricao() {
  const animaisCont = document.querySelector('.lista-animais')
  const descUrso = document.querySelector('.urso')
  const descLeao = document.querySelector('.leao')
  const descLobo = document.querySelector('.lobo')
  const descMacaco = document.querySelector('.macaco')
  const descRaposa = document.querySelector('.raposa')
  const descEsquilo = document.querySelector('.esquilo')
  animaisCont.addEventListener('click', (e) => {
    if (e.target.id == 'urso') {
      tirarAtivo()
      descUrso.classList.add('ativo')
    } else if (e.target.id == 'leao') {
      tirarAtivo()
      descLeao.classList.add('ativo')
    } else if (e.target.id == 'leao') {
      tirarAtivo()
      descLeao.classList.add('ativo')
    } else if (e.target.id == 'lobo') {
      tirarAtivo()
      descLobo.classList.add('ativo')
    } else if (e.target.id == 'macaco') {
      tirarAtivo()
      descMacaco.classList.add('ativo')
    } else if (e.target.id == 'raposa') {
      tirarAtivo()
      descRaposa.classList.add('ativo')
    } else if (e.target.id == 'esquilo') {
      tirarAtivo()
      descEsquilo.classList.add('ativo')
    }
  })
}