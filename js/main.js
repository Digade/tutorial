
      //  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

      //  <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
      //      <div class="texto-main">
      //        <h3 class="animate__animated animate__fadeInLeft">Mejor suerte la próxima</h3>
      //        <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
      //        <p class="animate__animated animate__fadeInLeft">No acertaste y no pudiste eliminarlo. El juego sigue normal y tendrás otra chance de predecir si te toca otra Sibila.</p>
      //        <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
      //      </div>

      //  </div>`;

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

//////El mundo juega 4 cartas

let parrafo = "";
let x = 1;
let puntospartida = x;
let zonamundo = [];
console.log("salen las 1ras 4 cartas que juega El Mundo Oscuro");

    for (i = 0; i <= 3; i++){
        zonamundo[i] = mazo[Math.floor(Math.random() * mazo.length)];
        
        console.log("El Mundo Oscuro juega: " + zonamundo[i].nombre)
        

        
        function eliminar(nombre){
            let index = mazo.indexOf(nombre);

            if (index != -1){
                
                mazo.splice(index, 1);
            }
        }

        eliminar(zonamundo[i]);
        
        if (zonamundo[i].nombre == "bruja" || zonamundo[i].nombre == "senadores-abel" || zonamundo[i].nombre == "emperatriz" || zonamundo[i].nombre == "cain" || zonamundo[i].nombre == "lilith"){
          console.log("punto de partida: " + puntospartida);
          puntospartida++;
          console.log("suma +1 porque salio: " + zonamundo[i].nombre + " | Ahora la partida es por: " + puntospartida);
        }

    }

    console.log("puntos: " + puntospartida + " | Las cartas de El Mundo Oscuro: " + zonamundo[0].nombre + " " + zonamundo[1].nombre + " " + zonamundo[2].nombre + " " + zonamundo[3].nombre);

    let borrarzonacarta = document.getElementById('tutorial').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <h3 class="animate__animated animate__fadeInLeft">El Mundo Oscuro juega 4 cartas</h3>
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
            <p class="animate__animated animate__fadeInLeft">Así inicia la preparación de cada ronda. La partida va por ${puntospartida} punto/s.</p>
            <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myMano();">Empezar a jugar</a>
            </div>

            <div class="d-flex align-content-center justify-content-between">
              <div class="card2s positioncard-c ">
              <div id="carta0" class="card2 ${zonamundo[0].nombre}"></div> 
              </div>
              <div class="card2s positioncard-b ">
              <div id="carta0" class="card2 ${zonamundo[1].nombre}"></div> 
              </div>
              <div class="card2s positioncard-a ">
              <div id="carta0" class="card2 ${zonamundo[2].nombre}"></div> 
              </div>
              <div class="card2s positioncard ">
              <div id="carta1" class="card2 ${zonamundo[3].nombre}"></div>    
              </div>
            </div>
        </div>`;
        

function robaJug1(){
          cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
          console.log("esta es la cartarandom que ROBA el jug1: " + cartarandom.nombre);  
          jug1.push(cartarandom);
            for (i = 0; i <= 1; i++){
            console.log(jug1[i]);
            }
          eliminar(cartarandom);
          console.log("mazo completo:");
          console.log(mazo);
} 

function myMano(){

    
////////mano de jug1 y pc///////

console.log("se reparten 2 cartas para el Jugador 1 (porque el empieza) y solo una carta para la PC");

for (i = 0 ; i <= 1; i++){
    jug1[i] = mazo[Math.floor(Math.random() * mazo.length)];
    
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




let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Tus cartas en mano:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Cliquea una carta para jugarla y hacer su acción.</p>
          
        </div>

        <div id="zonacarta" class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
       </div>
       <div class="card2s positioncard ">
        <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
       </div>
    </div>`;


//////////// PC roba 1 carta /////////
console.log("PC roba 1 carta para iniciar la ronda");

pc[0] = mazo[Math.floor(Math.random() * mazo.length)];
console.log("PC tiene en mano, posicion " + 0)
console.log(pc[0]);

eliminar(pc[0]);
console.log(mazo);

//////////// fin - PC roba 1 carta /////////


function inicio(){
  let jug1carta1 = document.getElementById('carta0');
  jug1carta1.addEventListener('click', respuestaClick);
  
  let jug1carta2 = document.getElementById('carta1');
  jug1carta2.addEventListener('click', otrorespuestaClick);
  
  function respuestaClick(){
      numcarta=0;
      myTutorial();
  }
  function otrorespuestaClick(){
      numcarta=1;
      myTutorial();
  }
}
inicio();

}


function myTutorial(){
/////////////Inicia la ronda y el jugador 1 comienza jugando una carta.
if (zonapc != "") {
  inicio();
}
console.log("el mazo tiene esta cantidad de cartas: " + mazo.length);

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

  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Robaste una nueva carta:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tener una carta mas mejora tus "combinaciones" y tienes mas posibilidades de elegir una mejor jugada. Cuando sea tu turno y robes una carta tendrás 3 cartas en mano.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
       </div>
       <div class="card2s positioncard ">
        <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
       </div>
    </div>`;
  
}




if (zonajug1 == sibila) {
  
    console.log("Icono de la PC: " + pc[0].icono);
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Predice el Ícono de tú Rival</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Si aciertas cliquenado en el ícono podrás eliminarlo.</p>
          <div class="d-flex align-conteiner-center justify-content-between">
          <div id="mundo" alt="Ícono de Mundo" class="iconos-sibila mundo">
          </div>
          <div id="balanza" alt="Ícono de Balanza" class="iconos-sibila balanza"></div>
          <div id="ficha" alt="Ícono de Ficha" class="iconos-sibila ficha"></div>
          <div id="calavera" alt="Ícono de Calavera" class="iconos-sibila calavera"></div>
          <div id="corona" alt="Ícono de Corona" class="iconos-sibila corona"></div></div>
        </div>
        <div class="card2s positioncard2 ">
            <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
        </div>
    </div>`;
    

              
          let iconomundo = document.getElementById('mundo');
          iconomundo.addEventListener('click', resMundo);

          let iconobalanza  = document.getElementById('balanza');
          iconobalanza.addEventListener('click', resBalanza);

          let iconoficha = document.getElementById('ficha');
          iconoficha.addEventListener('click', resFicha);

          let iconocalavera = document.getElementById('calavera');
          iconocalavera.addEventListener('click', resCalavera);

          let iconocorona = document.getElementById('corona');
          iconocorona.addEventListener('click', resCorona);


          function resMundo(){
              entrada = "Mundo";
              forSibila();
              
          }
          function resBalanza(){
              entrada = "Balanza";
              forSibila();
          }

          function resFicha(){
              entrada = "Ficha";
              forSibila();
          }

          function resCalavera(){
              entrada = "Calavera";
              forSibila();
          }
          function resCorona(){
              entrada = "Corona";
              forSibila();
          }
  function forSibila() {

    for (let i = "0"; i <= "2"; i++) {
      if (entrada == pc[0].icono[i]) {
        
        control = false;
        console.log("Icono: " + pc[0].icono[i] + " Predicción: " + entrada);
        console.log("presiona F5 para iniciar otra partida");
        
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
              <p class="animate__animated animate__fadeInLeft">¡Felicitaciones!. Pudiste eliminar a tu rival gracias a tu certera PREDICCIÓN. Tú rival tenia el ÍCONO: ${pc[0].icono}.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>
            <div class="card2s positioncard2 ">
                <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
            </div>
        </div>`;
        
        break;
      }
    }
    if (control == true) {
             
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
              <h3 class="animate__animated animate__fadeInLeft">Mejor suerte la próxima</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">No acertaste y no pudiste eliminarlo. El juego sigue normal y tendrás otra chance de predecir si te toca otra Sibila.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
            </div>

        </div>`;
        
        
        
    }
  }
}

if (zonajug1 == gangster) {
  

  if (jug1[0].valor == pc[0].valor) {
    
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de Q (Q/Q) > Simple: A.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    
  } else if (jug1[0].valor > pc[0].valor) {
    
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    console.log("Gana jugador 1");
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenias una mejor combinación y eliminaste a tu oponente. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de A (A/A) > Simple: J.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        
        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    
    
  } else {
    
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    console.log("perdiste");
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has perdido con tu ${jug1[0].combinacion}</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenias una menor combinación y fuiste eliminado. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft"><b>Par > Simples</b> (ej.: Par de J (J/J) > Simples: K.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>
        
        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>
        <div class="card2s positioncard ">
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    
    
  }
  console.log("Jugador 1 tiene: " + jug1[0].nombre + " de valor: " + jug1[0].combinacion + "\n" + " la PC tiene: " + pc[0].nombre + " de valor: " + pc[0].combinacion);
  console.log("presiona F5 para iniciar otra partida");
}

if (zonajug1 == bruja) {
  control = true;
  for (const objeto of pc){
    console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);

    if (objeto.nombre == "cain" || objeto.nombre == "lilith") {
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
              <p class="animate__animated animate__fadeInLeft">Tú rival tenia una carta que al REVELAR perdía. Que lastima debe ser perder así, ¿no?.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>
            <div class="card2s positioncard2 ">
                <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
            </div>
        </div>`;
        control = false;
        console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
        break;
    }

  }

    if (control == true) {
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
    <div class="texto-main">
      <h3 class="animate__animated animate__fadeInLeft">Tu Rival tiene:</h3>
      <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
      <p class="animate__animated animate__fadeInLeft">Saber la carta de tu oponente lo expone para eliminarlo en próximas jugadas.</p>
      <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
    </div>

    <div class="card2s positioncard2 ">
      <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
  </div>
  </div>`;}

  
 
 
}

if (zonajug1 == pope){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">NIEGAS o ACEPTAS las acciones de tus rivales</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
    
}

if (zonajug1 == senadores){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
}

if (zonajug1 == emperador){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
}

if (zonajug1 == emperatriz){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
}

if (zonajug1 == cain){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Al jugarla cumples la acción de REVELAR y pierdes la ronda.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
}

if (zonajug1 == lilith){
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Al jugarla cumples la acción de REVELAR y si no puedes perder 1 punto, pierdes la ronda.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;
}


}

function miRival(){
  
    cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
    console.log("esta es la cartarandom que ROBA la PC: " + cartarandom.nombre);  
    pc.push(cartarandom);
      for (i = 0; i <= 1; i++){
      console.log(pc[i]);
    }
    eliminar(cartarandom);
    console.log("mazo completo:");
    console.log(mazo);

    zonapc = pc[Math.floor(Math.random() * pc.length)];

      
    function eliminarcartaPC(nombre){
      let index = pc.indexOf(nombre);

      if (index != -1){
          
          pc.splice(index, 1);
      }
    }

    eliminarcartaPC(zonapc);
    console.log("PC = Esta es la carta que queda en mano: ");
    console.log(pc);
    console.log("Tu Rival juega: ");
    console.log(zonapc);

    
    if (zonapc == bufon) {
      let cartarandom = [];
      cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
      console.log("esta es la cartarandom: " + cartarandom.nombre);  
      pc.push(cartarandom);
        for (i = 0; i <= 1; i++){
        console.log(pc[i]);
      }
      eliminar(cartarandom);
      console.log(mazo);

      robaJug1();

      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
      <div class="card2s positioncard2 ">
      <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
      </div>
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Robaste una nueva carta:</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tener una carta mas mejora tus "combinaciones" y tienes mas posibilidades de elegir una mejor jugada. Cuando sea tu turno y robes una carta tendrás 3 cartas en mano.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
          </div>
          <div class="card2s positioncard ">
            <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
          </div>
        </div>`;
      
    }




      if (zonapc == sibila) {
        let eleccionPC = ["Mundo", "Balanza", "Ficha", "Calavera", "Corona"];
        entrada = eleccionPC[Math.floor(Math.random() * eleccionPC.length)];
        console.log("Icono del Jug1: " + pc[0].icono);
        console.log("La PC eligio el ícono: " + entrada);
          

        for (let i = "0"; i <= "2"; i++) {
          if (entrada == jug1[0].icono[i]) {
            
            control = false;
            console.log("Icono: " + jug1[0].icono[i] + " Predicción: " + entrada);
            
            
            let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
            <div class="card2s positioncard2 ">
            <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
            </div>
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <p class="animate__animated animate__fadeInLeft">Tú rival te elimino con una certera PREDICCIÓN. Tenias el ÍCONO: ${entrada}.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
                </div>
                <div class="card2s positioncard2 ">
                    <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
                </div>
            </div>`;
            
            break;
          }
        }
        if (control == true) {
          robaJug1();       
          let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
          <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">Tú rival no acerto. ¡Que suerte la tuya!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <p class="animate__animated animate__fadeInLeft">El juego sigue normal, veremos quien elimina a quien.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Volver a jugar</a>
                </div>

            </div>`;
            
            
            
        }
      }


    if (zonapc == gangster) {
      

      if (jug1[0].valor == pc[0].valor) {
          robaJug1();
        console.log(jug1[0].valor + " vs " + pc[0].valor);
        console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
        <div class="card2s positioncard2 ">
        <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
        </div>
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de Q (Q/Q) > Simple: A.)</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
            </div>
            <div class="card2s positioncard ">
              <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
          </div>
        </div>`;
        
      } else if (jug1[0].valor > pc[0].valor) {
        
        console.log(jug1[0].valor + " vs " + pc[0].valor);
        console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
        console.log("Gana jugador 1");
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
        <div class="card2s positioncard2 ">
        <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
        </div>
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenias una mejor combinación y eliminaste a tu oponente. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de A (A/A) > Simple: J.)</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            
            <div class="card2s positioncard2 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
            </div>
            <div class="card2s positioncard ">
              <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
          </div>
        </div>`;
        
        
      } else {
        
        console.log(jug1[0].valor + " vs " + pc[0].valor);
        console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
        console.log("perdiste");
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Has perdido con tu ${jug1[0].combinacion}</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenias una menor combinación y fuiste eliminado. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft"><b>Par > Simples</b> (ej.: Par de J (J/J) > Simples: K.)</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>
            
            <div class="card2s positioncard2 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
            </div>
            <div class="card2s positioncard ">
              <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
          </div>
        </div>`;
        
        
      }
      console.log("Jugador 1 tiene: " + jug1[0].nombre + " de valor: " + jug1[0].combinacion + "\n" + " la PC tiene: " + pc[0].nombre + " de valor: " + pc[0].combinacion);
      console.log("presiona F5 para iniciar otra partida");
    }

    if (zonapc == bruja) {
      control = true;
      for (const objeto of jug1){
        console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);

        if (objeto.nombre == "cain" || objeto.nombre == "lilith") {
          let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
          <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  
                  <p class="animate__animated animate__fadeInLeft">Tú rival te hizo REVELAR esa carta cuya acción te hace perder... ¡Qué pena!.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
                </div>
                <div class="card2s positioncard2 ">
                    <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
                </div>
            </div>`;
            control = false;
            console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
            break;
        }

      }

        if (control == true) {
          robaJug1();
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
          
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <h3 class="animate__animated animate__fadeInLeft">Tú rival te hace REVELAR:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">REVELAR tu carta es proporcionar información a la mesa. Estarás mas cerca de tú eliminación.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${pc[0].nombre}"></div>    
      </div>
      </div>`;}

      
    
    
    }

    if (zonapc == pope){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">NIEGA o ACEPTA las acciones de tus cartas</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Si le juegan una carta que lo elimine lo NEGARÁ y el efecto no se produce. Si le juegas algo favorable lo ACEPTARÁ y ese efecto se produce.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myTutorial();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
        
    }

    if (zonapc == senadores){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
    }

    if (zonapc == emperador){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
    }

    if (zonapc == emperatriz){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">SIN PROGRAMAR</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Si te juegan una carta que te eliminará podrás NEGARLA y el efecto no se produce. Si el rival juega algo favorable podrás ACEPTARLA y ese efecto se produce.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
    }

    if (zonapc == cain){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tú rival juega esta carta, se cumple su acción de REVELAR y pierde la ronda.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
    }

    if (zonapc == lilith){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tú rival juega esta carta, se cumple su acción de REVELAR y pierde la ronda al no poder perder 1 punto.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
    }
    

}