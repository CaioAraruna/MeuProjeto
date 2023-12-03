var nome = input_nome.value;
var email = input_email.value;
var team = input_team.value;
var senha = input_senha.value;
var confirmacao = input_confirmacao.value;
var telefone = input_telefone.value;


function cadastrar() {
  permiteCadastro = true;

  nome = input_nome.value;
  email = input_email.value;
  team = input_team.value;
  senha = input_senha.value;
  confirmacao = input_confirmacao.value;

  // if (nome.length >= 3 && email.indexOf('@') >= 0 && (senha.length >= 8 && (senha.indexOf('#') >= 0 || senha.indexOf('!') >= 0 || senha.indexOf('@') >= 0 || senha.indexOf('$') >= 0 || senha.indexOf('%') >= 0 || senha.indexOf('&') >= 0 || senha.indexOf('*') >= 0)
  // )){
    // Enviando o valor da nova input
    
    if(nome.length >= 3 && email.indexOf('@') >= 0 && (senha.length >= 8) && confirmacao == senha){
      fetch("/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeServer: nome,
          emailServer: email,
          teamServer: team,
          senhaServer: senha,
        })
      })
      if (permiteCadastro) {
        window.location.href = `./login.html`
      }
    }
    else{alert("Algum dos dados cadastrados está errado")
    div_nome.innerHTML = "O nome deve ter mais de 2 caracteres"
    div_email.innerHTML = "O email deve possuir @"
    div_mensagem.innerHTML = "Deixa em branco caso não torça para nenhum time"
    div_senha.innerHTML = "A senha deve possuir mais de 8 caracteres"
    div_confirmacao.innerHTML = "A confirmação de senha deve ser identica a senha cadastra"
  }
}
// }
