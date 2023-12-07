document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obter os dados do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Fazer algo com os dados do formulário (enviar para o servidor)
    console.log('Nome: ' + name);
    console.log('Email: ' + email);
    console.log('Mensagem: ' + message);

    // Voltar para a página inicial após o envio do formulário
    console.log('Formulário enviado com sucesso!');
    window.location.href = "tcc.html";

});




