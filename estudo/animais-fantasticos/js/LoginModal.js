const AbrirLogin = document.querySelector('button')
const LoginModal = document.querySelector('dialog')
const CloseLogin = document.getElementById('CloseLogin')
const dialog = document.getElementById('my-dialog');

AbrirLogin.onclick = function () {
  LoginModal.showModal()
}

CloseLogin.onclick = function () {
  LoginModal.close()
}

dialog.addEventListener('click', (clickOutside) => {
  if (clickOutside.target.id !== 'modal') {
    dialog.close();
  }
});