// exemplo de função que retorna um objeto

const container = document.getElementById("list-container")
const renderList = (data) => {
  data.map((item) => {
    return `<li>
    <h1>${item.titulo}</h1>
    <p>${item.desc}</p></li>`

  })
}
container.innerHTML = renderList(data)