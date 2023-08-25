// const AbrirLogin = document.getElementById('AbrirLogin')
// const LoginModal = document.querySelector('dialog')
// const CloseLogin = document.getElementById('CloseLogin')

// AbrirLogin.onclick = function () {
//   LoginModal.showModal()
// }

// CloseLogin.onclick = function () {
//   LoginModal.close()
// }

// const dialog = document.querySelector('dialog:modal');

// dialog.addEventListener('click', (clickOutside) => {
//   if (clickOutside.target !== clickOutside.currentTarget) {
//     dialog.close();
//   }
// })

function change() {
  const get = document.querySelector(".menu-options")
  get.classList.toggle("active")
}

document.getElementById('MenuButton').addEventListener('click', change)



 