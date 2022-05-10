class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
    addMascotas = (nombre) =>{
        this.mascotas.push(nombre)
    }
    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`)
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        console.log(this.libros.map((libros) =>libros.nombre))
    }

}
const usuario1 = new Usuario("Emanuel Martin", "Zarate")
usuario1.getFullName()
usuario1.addMascotas("Afrika")
usuario1.addMascotas("Venus")
usuario1.addMascotas("Luna")
usuario1.addMascotas("Galaxia")
usuario1.countMascotas();
usuario1.addBook("El hombre mediocre", "Jose Ingenieros");
usuario1.addBook("Martin Fierro", "Jose Hernandez");
usuario1.getBookNames();