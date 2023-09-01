
// function controlls() {

//   function tirarAtivo() {
//     const ativo = [...document.querySelectorAll('.slider-nav img, .slider img')]
//     ativo.map((item) => {
//       item.classList.remove('ativo')
//     })
//   }

//   const slideContent = document.querySelectorAll('.slider-nav img, .slider img')

//   slideContent.forEach((item) => {
//     item.addEventListener('click', (i) => {

//       const ids = i.currentTarget.id
//       const slider = document.getElementById('slider')

//       if (ids === 'slide-1') {
//         tirarAtivo()
//         const urso = document.querySelectorAll('.galeria .urso')
//         urso.forEach((urso) => {
//           slider.style.transform = "translate3d(841.5px, 0px, 0px)"
//           urso.classList.add('ativo')
//         })
//       } else if (ids === 'slide-2') {
//         tirarAtivo()
//         const leao = document.querySelectorAll('.galeria .leao')
//         leao.forEach((leao) => {
//           slider.style.transform = "translate3d(1.5px, 0px, 0px)"
//           leao.classList.add('ativo')
//         })
//       } else if (ids === 'slide-3') {
//         tirarAtivo()
//         const lobo = document.querySelectorAll('.galeria .lobo')
//         lobo.forEach((lobo) => {
//           slider.style.transform = "translate3d(-838.5px, 0px, 0px)"
//           lobo.classList.add('ativo')
//         })
//       } else if (ids === 'slide-4') {
//         tirarAtivo()
//         const macaco = document.querySelectorAll('.galeria .macaco')
//         macaco.forEach((macaco) => {
//           slider.style.transform = "translate3d(-1678.5px, 0px, 0px)"
//           macaco.classList.add('ativo')
//         })
//       } else if (ids === 'slide-5') {
//         tirarAtivo()
//         const raposa = document.querySelectorAll('.galeria .raposa')
//         raposa.forEach((raposa) => {
//           slider.style.transform = "translate3d(-2518.5px, 0px, 0px)"
//           raposa.classList.add('ativo')
//         })
//       } else {
//         const esquilo = document.querySelectorAll('.galeria .esquilo')
//         esquilo.forEach((esquilo) => {
//           slider.style.transform = "translate3d(-3358.5px, 0px, 0px)"
//           esquilo.classList.add('ativo')
//         })
//       }
//     })
//   })

// }
// controlls()

function controlls() {
  const categorias = {
    'slide-1': { categoria: 'urso', transformValue: 841.5 },
    'slide-2': { categoria: 'leao', transformValue: 1.5 },
    'slide-3': { categoria: 'lobo', transformValue: -838.5 },
    'slide-4': { categoria: 'macaco', transformValue: -1678.5 },
    'slide-5': { categoria: 'raposa', transformValue: -2518.5 },
    default: { categoria: 'esquilo', transformValue: -3358.5 },
  };

  function tirarAtivo() {
    const elementosAtivos = document.querySelectorAll('.ativo');
    elementosAtivos.forEach((elemento) => {
      elemento.classList.remove('ativo');
    });
  }

  function mostrarCategoria(categoria, transformValue) {
    tirarAtivo();
    const elementosGaleria = document.querySelectorAll(`.galeria .${categoria}`);
    const slider = document.getElementById('slider');
    slider.style.transform = `translate3d(${transformValue}px, 0px, 0px)`;

    elementosGaleria.forEach((elemento) => {
      elemento.classList.add('ativo');
    });
  }

  const slideContent = document.querySelectorAll('.slider-nav img, .slider img');

  slideContent.forEach((item) => {
    item.addEventListener('click', (event) => {
      const id = event.currentTarget.id;
      const { categoria, transformValue } = categorias[id] || categorias.default;
      mostrarCategoria(categoria, transformValue);
    });
  });
}

controlls();