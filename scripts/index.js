/*console.log("Hola desde Javaspcript");

const username = document.getElementById("textlog");
const password= document.getElementById("passwordlog");


const login = () =>{
    console.log(username);
}


const btnLogin= document.getElementById("botonlog");

btnLogin.addEventListener("click",login);*/


function iniciosesion(event) {
    event.preventDefault();
    
    const user = document.getElementById("emailinput").value;
    const password = document.getElementById("passwordinput").value;
    
    if (user === "" || password === "") {
        alert("Llena todos los campos por favor");
    } else if (user === "IFLH" && password === "IFLHmca") {
        alert("Inicio de sesión exitoso");
        sessionStorage.setItem("name", "IFLH");
        window.location.href = "../pages/home.html";
    } else {
        alert("Credenciales incorrectas");
    }
}

// Capturar "Enter" para iniciar sesión
document.getElementById("passwordinput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        iniciosesion(e);
    }
});