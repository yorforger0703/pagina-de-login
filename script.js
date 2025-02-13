const loginBtn = document.querySelector("#login");
const registroBtn = document.querySelector("#registro");
const loginFormulario = document.querySelector(".login-formulario");
const registroFormulario = document.querySelector(".registro-formulario");

const isMobile = window.matchMedia('(max-width: 748px)').matches;

registroFormulario.style.visibility = "hidden";
registroFormulario.style.opacity = 0;

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgb(168, 35, 35)";
    registroBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    if (isMobile) {
        loginFormulario.style.top = "0";
        registroFormulario.style.top = "100%";
    } else {
        loginFormulario.style.left = "50%";
        registroFormulario.style.left = "-50%";
    }

    loginFormulario.style.opacity = 1;
    registroFormulario.style.opacity = 0;

    loginFormulario.style.visibility = "visible";
    registroFormulario.style.visibility = "hidden";

    document.querySelector(".coluna-1").style.borderRadius = "0 30% 20% 0";
});

registroBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registroBtn.style.backgroundColor = "rgb(168, 35, 35)";

    if (isMobile) {
        loginFormulario.style.top = "-100%";
        registroFormulario.style.top = "0";
    } else {
        loginFormulario.style.left = "150%";
        registroFormulario.style.left = "50%";
    }

    loginFormulario.style.opacity = 0;
    registroFormulario.style.opacity = 1;

    loginFormulario.style.visibility = "hidden";
    registroFormulario.style.visibility = "visible";

    document.querySelector(".coluna-2").style.borderRadius = "0 20px 30px 0";
});
