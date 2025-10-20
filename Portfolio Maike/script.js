// Validação simples do formulário de contato
const form = document.getElementById('form-contato');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos antes de enviar.');
    return;
  }

  if (!emailValido.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  alert('Mensagem enviada com sucesso!');
  form.reset();
});
