document.getElementById('registroFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    let emailcriar = document.getElementById('emailcriar').value;
    let senhacriar = document.getElementById('senhacriar').value;
    let repitasenha = document.getElementById('repitasenha').value;
    let resultado = document.getElementById('resultado');

    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;

    if (repitasenha !== senhacriar) {
        resultado.textContent = "As senhas não são iguais";
        resultado.style.color = "red";
        return;
    }

    if (regex.test(senhacriar)) {
        localStorage.setItem('email', emailcriar);
        localStorage.setItem('senha', senhacriar);

        resultado.textContent = "Conta criada com sucesso!";
        resultado.style.color = "green";

        setTimeout(() => {
            document.querySelector("#login").click();
        }, 1000);
    } else {
        resultado.textContent = "A senha precisa conter: 6 caracteres, pelo menos 1 letra maiúscula, 1 caractere especial e 1 número";
        resultado.style.color = "red";
    }
});
