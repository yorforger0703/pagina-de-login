document.getElementById('loginFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let loginuser = document.getElementById('loginuser').value;
    let loginsenha = document.getElementById('loginsenha').value;
    let resultado2 = document.getElementById('resultado2');

    const usuarioSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    document.querySelector(".registro-formulario").style.opacity = 0;
    document.querySelector(".registro-formulario").style.visibility = "hidden";

    document.querySelector(".login-formulario").style.opacity = 1;
    document.querySelector(".login-formulario").style.visibility = "visible";

    setTimeout(() => {
        if (loginuser === usuarioSalvo && loginsenha === senhaSalva) {
            resultado2.textContent = "Login Bem Sucedido";
            resultado2.style.color = "green";
            setTimeout(() => {
                window.location.href = "https://yorforger0703.github.io/sunny-amigurumis/";
            }, 1000);
        } else {
            resultado2.textContent = "Email ou Senha Inválidos";
            resultado2.style.color = "red";
        }
    }, 500);
});
