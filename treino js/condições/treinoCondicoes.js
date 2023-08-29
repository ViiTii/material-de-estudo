function calcular() {
  var txtv = window.document.getElementById('txtvel')
  var res = window.document.getElementById('res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p>sua velocidade atual é de ${vel}Km/h</p>`
  if (vel > 60) {
    res.innerHTML += `<p> Você foi multado</p>`
  } else {
    res.innerHTML += `<p>Você não foi multado</p>`
  }
}

function checar() {
  var p = window.document.getElementById('pais')
  var nasc = window.document.getElementById('nas')
  var nascionalidade = p.value
  nasc.innerHTML = `<p>Você nasceu no ${nascionalidade}</p>`

  if (nascionalidade != 'Brasil') {
    nasc.innerHTML += 'Você é estrangeiro'
  } else {
    nasc.innerHTML += 'Você é Brasileiro'
  }
}