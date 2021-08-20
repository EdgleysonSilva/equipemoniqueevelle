const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email, //coletar nome dos inputs
  }
  let convertData = JSON.stringify(data); //converte para string

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let cadastro = `<p>Cadastrando...</p>`

  let pronto = `<p>Seu cadastro foi realizado com sucesso!</p>`

  content.innerHTML = cadastro


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})