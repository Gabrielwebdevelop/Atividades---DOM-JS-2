
var corpo = window.document.body;
corpo.style.backgroundColor = 'rgba(000, 255, 255)';

function cadastro() {
    var nome = document.getElementById('nome').value;
    var nomeUsuario = document.getElementById('nomeUsuario').value
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('dataNascimento').value
    var sexo = document.getElementById('sexo').value;
    var endereco = document.getElementById('endereco').value;
    var senha = document.getElementById('senha').value;
    var cadastrarUsuario = document.getElementById('cadastrarUsuario');

    cadastrarUsuario.innerHTML = `Nome: ${nome}, <br>
    Nome de Usuário: ${nomeUsuario},<br>
    Email: ${email},<br>
    CPF: ${cpf},<br>
    Data de Nascimento: ${dataNascimento},<br>
    Sexo: ${sexo},<br>
    Endereço: ${endereco},<br>
    Senha: ${senha}`;
}



