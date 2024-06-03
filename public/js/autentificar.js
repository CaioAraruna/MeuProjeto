var email = input_email.value;
var senha = input_senha.value;


function autenticar() {
    autenticado = false;

    email = input_email.value;
    senha = input_senha.value;
    
    const usuario = fetch("/autenticar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailServer:email,
          senhaServer:senha
    }),
      }) .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.length){
        window.location.href = `./pagFutAmericano.html`
        }
    })
    .catch(error => {
        console.error("Erro durante a solicitação:", error);
    });
console.log(autenticado);
div_emailErrado.innerHTML = "O e-mail informado não possui cadastro"
div_senhaErrada.innerHTML = "Senha não existente para o e-mail informado"

}
