
class Cartas {
  constructor(combinacion, nombre, icono, accion, valor) {
    this.combinacion = combinacion;
    this.nombre = nombre;
    this.icono = icono;
    this.accion = accion;
    this.valor = valor;
  }
}

const bufon = new Cartas("10", "bufon-roba", ["Mundo"], "Todos roban 1 carta", "01");
const gangster = new Cartas(
  "J",
  "gangster",
  ["Balanza", "Mundo"],
  "DUELO entre la mitad de jugadores, la mayor combinación elimina al resto de jug.",
  "02"
);
const sibila = new Cartas(
  ["Q", "J"],
  "sibila",
  ["Balanza"],
  "Elimina a 1 jug. si PREDICES 1 Ícono de su mano.",
  "03"
);
const bruja = new Cartas("K", "bruja", ["Ficha"], "1 jug. REVELA su mano.", "04");
const pope = new Cartas(
  "A",
  "pope",
  ["Calavera"],
  "Si REVELAS, cancela una acción.",
  "05"
);
const senadores = new Cartas(
  ["10", "10"],
  "senadores-abel",
  ["Ficha"],
  "Nombra un valor y toma 1 carta de la mesa.",
  "11"
);
const emperador = new Cartas(
  ["J", "J"],
  "emperador",
  ["Corona"],
  "Tú y 1 jug INTERMBIAN manos. Luego, entre ustedes, elige quien DESCARTA y RECUPERA su mano.",
  "12"
);
const emperatriz = new Cartas(
  ["Q", "Q"],
  "emperatriz",
  ["Ficha", "Mundo", "Corona"],
  "El Mundo juega 1 carta. Todos INTERCAMBIAN manos.",
  "13"
);
const cain = new Cartas(
  ["K", "K"],
  "cain",
  ["Calavera"],
  "REVELA 1 carta y juega a Caín. Si REVELAS esta carta por otro motivo PIERDES",
  "14"
);
const lilith = new Cartas(
  ["A", "A"],
  "lilith",
  ["Calavera"],
  "Si REVELAS elige: Gastar 1 punto o PIERDES.",
  "15"
);

console.log(gangster.icono.join(" , "));
console.log(sibila.combinacion.join(" , "));

const mazo = [
  bufon,
  gangster,
  sibila,
  bruja,
  pope,
  senadores,
  emperador,
  emperatriz,
  cain,
  lilith,
];

let jug1 = [];
let pc = [];
let zonajug1 = "";
let zonapc = "";
let numcarta ="";
//variables para sibila
let entrada = "";
let control = true;
//fin variables para sibila
////////mano de jug1 y pc///////

console.log("se reparten 2 cartas para el Jugador 1 (porque el empieza) y solo una carta para la PC");

for (i = 0; i <= 1; i++){
    jug1[i] = mazo[Math.floor(Math.random() * 3)];
    
    console.log("jugador1 tiene en mano, posicion " + i)
    console.log(jug1[i]);
    
    function eliminar(nombre){
        let index = mazo.indexOf(nombre);

        if (index != -1){
            
            mazo.splice(index, 1);
        }
    }

    eliminar(jug1[i]);

}




let parrafo = document.createElement("div");

parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Tus cartas en mano:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Juega 1 carta</a>
        </div>

        <div id="zonacarta" class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
       </div>
       <div class="card2s positioncard ">
        <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
       </div>
    </div>`;
document.getElementById('tutorial').appendChild(parrafo);

//////////// PC roba 1 carta /////////
console.log("PC roba 1 carta para iniciar la ronda");

pc[0] = mazo[Math.floor(Math.random() * mazo.length)];
console.log("PC tiene en mano, posicion " + 0)
console.log(pc[0]);

eliminar(pc[0]);
console.log(mazo);

//////////// fin - PC roba 1 carta /////////

function myTutorial(){
/////////////Inicia la ronda y el jugador 1 comienza jugando una carta.
numcarta = prompt(
  "Que carta vas a jugar:\n" + "0: " + jug1[0].nombre +"\n" + "1: " + jug1[1].nombre);


console.log("Jugador 1 juega: " + jug1[numcarta].nombre);





  zonajug1 = jug1[numcarta];
  
  function eliminarcarta(nombre){
    let index = jug1.indexOf(nombre);

    if (index != -1){
        
        jug1.splice(index, 1);
    }
}

eliminarcarta(jug1[numcarta]);
console.log("Esta es la carta que queda en mano: ");
console.log(jug1);
console.log("jugador 1");







if (zonajug1 == bufon) {
  let cartarandom = [];
  cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
  console.log("esta es la cartarandom: " + cartarandom.nombre);  
  jug1.push(cartarandom);
    for (i = 0; i <= 1; i++){
    console.log(jug1[i]);
  }
  eliminar(cartarandom);
  console.log(mazo);

  let borrarzonacarta = document.getElementById('zonacarta');
  borrarzonacarta.remove();
  let parrafo = document.createElement("div");
  
  parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Robaste una nueva carta:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tener una carta mas mejora tus "combinaciones" y tienes mas posibilidades de elegir una mejor jugada.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Juega 1 carta</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
       </div>
       <div class="card2s positioncard ">
        <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
       </div>
    </div>`;
  document.getElementById('tutorial').appendChild(parrafo);
}




if (zonajug1 == sibila) {
  while (control != false) {
    console.log("Icono de la PC: " + pc[0].icono);
    alert("Jugador 1 juega Sibila(PREDICCIÓN)");
    entrada = prompt(
      "Predice escribiendo el Ícono: \n(Mundo / Balanza / Ficha / Calavera / Corona)"
    );
    
    for (let i = "0"; i <= "2"; i++) {
      if (entrada == pc[0].icono[i]) {
        alert("El jugador gano");
        control = false;
        console.log("Icono: " + pc[0].icono[i] + " Predicción: " + entrada);
        console.log("presiona F5 para iniciar otra partida");
        break;
      }
    }
    if (control == true) {
      alert("Perdiste");
    }
  }
}

if (zonajug1 == gangster) {
  alert("Jugador1 juega Gangster(DUELO)");

  if (jug1[0].valor == pc[0].valor) {
    alert("Empate en la ronda");
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    let borrarzonacarta = document.getElementById('zonacarta');
    borrarzonacarta.remove();
    let parrafo = document.createElement("div");
  
    parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ejemplo: Par de Q/Q | Simples: A.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    document.getElementById('tutorial').appendChild(parrafo);
  } else if (jug1[0].valor > pc[0].valor) {
    alert("Gana jugador 1");
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    console.log("Gana jugador 1");
    let borrarzonacarta = document.getElementById('zonacarta');
    borrarzonacarta.remove();
    let parrafo = document.createElement("div");
  
    parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has ganado</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenias una mejor combinación y eliminaste a tu oponente. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ejemplo: Par de A/A | Simples: J.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        
        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    document.getElementById('tutorial').appendChild(parrafo);
    
  } else {
    alert("Perdiste");
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    console.log("perdiste");
    let borrarzonacarta = document.getElementById('zonacarta');
    borrarzonacarta.remove();
    let parrafo = document.createElement("div");
  
    parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has perdido con tu ${jug1[0].combinacion}</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenias una menor combinación y fuiste eliminado. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ejemplo: Par de J/J | Simples: K.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>
        
        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    document.getElementById('tutorial').appendChild(parrafo);
    
  }
  console.log("Jugador 1 tiene: " + jug1[0].nombre + " de valor: " + jug1[0].combinacion + "\n" + " la PC tiene: " + pc[0].nombre + " de valor: " + pc[0].combinacion);
  console.log("presiona F5 para iniciar otra partida");
}

if (zonajug1 == bruja) {
  
  for (const objeto of pc){
    console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);
  }

  let borrarzonacarta = document.getElementById('zonacarta');
  borrarzonacarta.remove();
  let parrafo = document.createElement("div");
  
  parrafo.innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Tu Rival tiene:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Saber la carta de tu oponente lo expone para eliminarlo en próximas jugadas.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
       </div>
    </div>`;
    document.getElementById('tutorial').appendChild(parrafo);
}

}