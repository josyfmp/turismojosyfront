document.getElementById("header").innerHTML = `

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="col-md-5 col-5">
             <a class="navbar-brand" href="./index.html">
                <img src="./img/codoacodo.png" alt="Logo" style="width: 95px;">
                Conf Bs As
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-7 col-5 collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">La conferencia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Los oradores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">El lugar y la fecha</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Conviertete en orador</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-success" href="./seccion.html">Comprar tickets</a>
                </li>
            </ul>
        </div>
    </nav>
`

document.getElementById("footer").innerHTML = `

<footer class="row mt-5 justify-content-evenly">
<ul class="nav col-lg-8 col-md-8 col-sm-12 justify-content-between text-center ">
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Preguntas </br> recuentes</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Contáctanos</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Prensa</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Conferencias</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Terminos y </br> condiciones</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Privacidad</a>
    </li>
    <li class="nav-item align-self-center">
        <a class="nav-link link-light" href="#">Estudiantes</a>
    </li>
</ul>

</footer>

`
const app = new Vue({
    el: "#idBanner",
    data: {
        msj: "Bs As llega por primera vez a Argntina. Un evento para compartir con nuestra comunidad de conocimiento y experiencia de losexpertos que están creando el futuro de internet. Ven a conocer amiembros del evento. a otros estudiantes de Codo a Codo y los oradores de primer nivel que tenemos para ti. Te esperamos!",
        titulo: "Conf Bs As"

    }
})

const oradores = new Vue({
    el: "#listaOradores",
    data() {
        return{
        oradores: [],
        errored:false,
        loading:true,

        }
    },
    created(){
        var url = "http://localhost:8080/api/v1/oradores/";
        this.fetchData(url)
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data=> {
                this.oradores = data;
                this.loading = false;
            })
            .catch(err =>{
                console.log(err)
                this.errored = true;
            })
        }
    }
})

const publicidad = new Vue({
    el:"#publicidad",
    data:{
        titulo:"Bs As - Octubre",
        descripcion:"Buenos Aires es la provincia y localidad más grande del estado de Argentina, en los Estados Unidos. Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se referia al área urbana en la costa sureste de la isla de Oahu, la cuidad y el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la ciudad (aproximadamente 600 km2 de superficie).",
        imagen:"./img/honolulu.jpg",
        id:45
    }
})


var resultado = document.getElementById("resultado")
var formulario = document.getElementById("formulario")
var tablaDeDescuento = {
    Estudiante: 0.80,
    Trainee: 0.50,
    Junior: 0.15
}

function calcularTotal(cantidad, porcentaje) {
    let valorDeEntrada = 200
    let total = (valorDeEntrada * cantidad)
    let descuento = total * porcentaje
    return total - descuento
}

function resumen() {
    let cantidad = parseInt(formulario[3].value)
    let categoria = formulario[4].value
    resultado.innerHTML = `Total a Pagar: $ ${calcularTotal(cantidad, tablaDeDescuento[categoria])}`

}

function borrar() {
    formulario[0].value = ""
    formulario[1].value = ""
    formulario[2].value = ""
    formulario[3].value = ""
    formulario[4].value = ""
    resultado.innerHTML = `Total a Pagar`
}
