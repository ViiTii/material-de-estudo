function change() {
  const get = document.querySelector(".menu-options")
  get.classList.toggle("active")
}
document.getElementById('MenuButton').addEventListener('click', change)

function OpenLogin(){
  const LoginModal = document.getElementById('loginModal-Container')
  LoginModal.classList.add('open')

  LoginModal.addEventListener('click', (e) => {
    if(e.target.id == 'CloseLogin' || e.target.id == 'loginModal-Container'){
      LoginModal.classList.remove('open')
    }
  })
}