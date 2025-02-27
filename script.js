console.log("Hola mundo")
const colores=["red","blue"];
console.log(colores[0]);
colores[0]=253;
console.log(colores[0]);

let alumno={
    nombre:"luis",
    edad: 20,
    imprime(){
        console.log(this.nombre + " " + this.edad);
    },
}

alumno.imprime();
alumno["edad"]++;
alumno.imprime();

const fucion = (name) => {console.log("Hola mundo"+ name);};

fucion("Luis");