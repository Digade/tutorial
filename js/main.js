class Cartas {
  constructor(combinacion, nombre, icono, accion, valor, imagen) {
    this.combinacion = combinacion;
    this.nombre = nombre;
    this.icono = icono;
    this.accion = accion;
    this.valor = valor;
    this.imagen = imagen;
  }
}

const bufon = new Cartas("10", "bufon-roba", ["Mundo"], "Todos roban 1 carta", "01",
"../img/mini10.webp");
const bufon2 = new Cartas("10", "bufon-roba", ["Mundo"], "Todos roban 1 carta", "01",
"../img/mini10.webp");
const gangster = new Cartas(
  "J",
  "gangster",
  ["Balanza", "Mundo"],
  "DUELO entre la mitad de jugadores, la mayor combinación elimina al resto de jug.",
  "02",
  "../img/miniJ.webp"
);
const gangster2 = new Cartas(
  "J",
  "gangster",
  ["Balanza", "Mundo"],
  "DUELO entre la mitad de jugadores, la mayor combinación elimina al resto de jug.",
  "02",
  "../img/miniJ.webp"
);
const sibila = new Cartas(
  ["Q", "J"],
  "sibila",
  ["Balanza"],
  "Elimina a 1 jug. si PREDICES 1 Ícono de su mano.",
  "03",
  "../img/miniQJ.webp"
);
const sibila2 = new Cartas(
  ["Q", "J"],
  "sibila",
  ["Balanza"],
  "Elimina a 1 jug. si PREDICES 1 Ícono de su mano.",
  "03",
  "../img/miniQJ.webp"
);
const bruja = new Cartas("K", "bruja", ["Ficha"], "1 jug. REVELA su mano.", "04",
"../img/miniK.webp");
const bruja2 = new Cartas("K", "bruja", ["Ficha"], "1 jug. REVELA su mano.", "04",
"../img/miniK.webp");
const pope = new Cartas(
  "A",
  "pope",
  ["Calavera"],
  "Si REVELAS, cancela una acción.",
  "05",
  "../img/miniA.webp"
);
const pope2 = new Cartas(
  "A",
  "pope",
  ["Calavera"],
  "Si REVELAS, cancela una acción.",
  "05",
  "../img/miniA.webp"
);
const senadores = new Cartas(
  ["10", "10"],
  "senadores-abel",
  ["Ficha"],
  "Nombra un valor y toma 1 carta de la mesa.",
  "11",
  "../img/mini1010.webp"
);
const emperador = new Cartas(
  ["J", "J"],
  "emperador",
  ["Corona"],
  "Tú y 1 jug INTERMBIAN manos. Luego, entre ustedes, elige quien DESCARTA y RECUPERA su mano.",
  "12",
  "../img/miniJJ.webp"
);
const emperatriz = new Cartas(
  ["Q", "Q"],
  "emperatriz",
  ["Ficha", "Mundo", "Corona"],
  "El Mundo juega 1 carta. Todos INTERCAMBIAN manos.",
  "13",
  "../img/miniQQ.webp"
);
const cain = new Cartas(
  ["K", "K"],
  "cain",
  ["Calavera"],
  "REVELA 1 carta y juega a Caín. Si REVELAS esta carta por otro motivo PIERDES",
  "14",
  "../img/miniKK.webp"
);
const lilith = new Cartas(
  ["A", "A"],
  "lilith",
  ["Calavera"],
  "Si REVELAS elige: Gastar 1 punto o PIERDES.",
  "15",
  "../img/miniAA.webp"
);

console.log(gangster.icono.join(" , "));
console.log(sibila.combinacion.join(" , "));

const mazo = [
  bufon,
  bufon2,
  gangster,
  gangster2,
  sibila,
  sibila2,
  bruja,
  bruja2,
  pope,
  pope2,
  senadores,
  emperador,
  emperatriz,
  cain,
  lilith,
];

let jug1 = [];
let pc = [];
let cartasEnMesa = [];
let zonajug1 = "";
let zonapc = "";
let numcarta ="";
let puntojug1 = 0;
//variables para sibila
let entrada = "";
let control = true;
//fin variables para sibila

//////El mundo juega 4 cartas

let parrafo = "";
let x = 1;
let puntospartida = x;
////localstorage

let turnoDe = ""; //si es 1 = es turno del Jug1 // si es 2 = turno PC

// let puntopc = localStorage.getItem('puntos-pc');
// localStorage.setItem('puntos-rival', parseInt(puntopc));

////localstorage-fin


///funcion cuando ganaspartida
function dueloFinal(){
  jug1.sort((a, b) => b.valor.localeCompare(a.valor));
  console.log("el mazo tiene esta cantidad de cartas: " + mazo.length);

  if (jug1[0].valor == pc[0].valor) {
    robaPc();
    console.log(pc);
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
     <div class="card2s positioncard2 ">  <h3 class="animate__animated animate__fadeInLeft">Tu carta</h3>
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">DUELO FINAL</h3>
          
          <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">El Mundo Oscuro (Mazo) al quedar sin cartas envia a los sobrevivientes al DUELO FINAL. Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de Q (Q/Q) > Simple: A.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
        </div>

       
        <div class="card2s positioncard "><h3 class="animate__animated animate__fadeInLeft">Carta del Rival</h3>
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    
  } else if (jug1[0].valor > pc[0].valor) {
    sumPuntos();
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    console.log("Gana jugador 1");
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
        <h3 class="animate__animated animate__fadeInLeft">DUELO FINAL</h3>
          
          <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
          <p class="animate__animated animate__fadeInLeft">El Mundo Oscuro (Mazo) al quedar sin cartas envia a los sobrevivientes al DUELO FINAL. Tenias una mejor combinación y eliminaste a tu oponente. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de A (A/A) > Simple: J.)</p>
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
        <h3 class="animate__animated animate__fadeInLeft">DUELO FINAL</h3>
          
          <h3 class="animate__animated animate__fadeInLeft">Has perdido con tu ${jug1[0].combinacion}</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">El Mundo Oscuro (Mazo) al quedar sin cartas envia a los sobrevivientes al DUELO FINAL. Tenias una menor combinación y fuiste eliminado. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft"><b>Par > Simples</b> (ej.: Par de J (J/J) > Simples: K.)</p>
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

function mipm(id) {
  jug1.push(cartasEnMesa[id]);
  miRival();
  console.log("mi mano es: ");
  console.log(jug1);
  document.getElementById('cards10').innerHTML = "";
  
  let indexMesa = cartasEnMesa.indexOf(element => element.id == id);


  if (indexMesa != -1){
      
    cartasEnMesa.splice(indexMesa, 1);
  }

};

function mipmPC() {
  let idrandom = "";
  idrandom = Math.floor(Math.random() * cartasEnMesa.length);
  pc.push(cartasEnMesa[idrandom]);
  console.log("tomo la carta: ");
  console.log(cartasEnMesa[idrandom]);
  console.log("PC mano es: ");
  console.log(pc);
  document.getElementById('cards10').innerHTML = "";
  
  let indexMesa = cartasEnMesa.indexOf(element => element.idrandom == idrandom);


  if (indexMesa != -1){
      
    cartasEnMesa.splice(indexMesa, 1);
  }

};

function quienDescarta(){
  let op = Math.floor(Math.random() * 2);
  if (op == 1){
    desYrecjug1();

  } else {
    desYrecPc();
  }
};

function desYrecPc() {
  let a = 0;

  for (const objeto of pc){
    console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);
    console.log(pc + ' / ' + jug1);

        if (objeto.nombre == "cain" || objeto.nombre == "lilith"){
            sumPuntos();
      
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
                      <div id="carta0" class="card2 ${pc[a].nombre}"></div>    
                  </div>
              </div>`;
              control = false;
              console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
              break;
        } 
            
          
        
      
      a++;
          
  }
  if (control == true) {
          
    for (let i = 0; i < pc.length; i++) {
      cartasEnMesa.push(pc[i]);
    }
    pc = [];
    robaPc();
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
    
    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Tu rival descarto y Recupero</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">

          <p class="animate__animated animate__fadeInLeft">Su mano fue descartada y ahora tiene nuevas cartas.</p>
          <div id="botonParaSeguir"></div>
          
        </div>
    </div>`;
}
if (turnoDe == 1){
    
  let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
  <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="miRival();"> Seguir jugando</a>`
} else {
  
  let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
  <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="myInicio();"> Seguir jugando</a>`
}
};

function desYrecjug1() {
  let a = 0;

  for (const objeto of jug1){
    console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);
    console.log(pc + ' / ' + jug1);

        
        if (objeto.nombre == "cain" || objeto.nombre == "lilith"){
                    
              
          let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
            
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main">
                  <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">

                  <p class="animate__animated animate__fadeInLeft">Tú tenias una carta que al REVELAR te hace perder. Que lastima debe ser perder así, ¿no?.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
                </div>
                <div class="card2s positioncard2 ">
                    <div id="carta0" class="card2 ${jug1[a].nombre}"></div>    
                </div>
            </div>`;
            control = false;
            console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
            break;
        } 
          
        
        
      
      a++;
          
  }
  if (control == true) {
    for (let i = 0; i < jug1.length; i++) {
      cartasEnMesa.push(jug1[i]);
      
    }
    jug1 = [];
    robaJug1();
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
      
      <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
          <div class="texto-main">
            <h3 class="animate__animated animate__fadeInLeft">Descartaste y Recuperaste</h3>
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">

            <p class="animate__animated animate__fadeInLeft">Tu mano fue descartada a la mesa y ahora tienes nuevas cartas.</p>
            <div id="botonParaSeguir"></div>
          </div>
      </div>`;
      if (turnoDe == 1){
    
        let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
        <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="miRival();"> Seguir jugando</a>`
      } else {
        
        let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
        <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="myInicio();"> Seguir jugando</a>`
      }
  }};



function ganaPartida() {
  Swal.fire({
    title: '¡Has ganado el tutorial!',
    text: '¿Quisieras volver a jugar?',
    imageUrl: '/img/LOGOMUNDOOSCUROsombra400x200.png',
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '00aa18',
    cancelButtonColor: 'afa26b' ,
    confirmButtonText: '¡Si, quiero!',
    cancelButtonText: '¡No, gracias!',
    reverseButtons: true
      }).then((result) => {
      if (result.isConfirmed) {
          puntojug1 = localStorage.getItem('puntos-jugador1');
          puntojug1 = parseInt(puntojug1) * 0;
          localStorage.setItem('puntos-jugador1', parseInt(puntojug1));
          location. reload();
      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
      ) {
          window.location.href = "https://elmundooscuro.com.ar";
      }
      });
};

function emperatrizJuega(){
  let zonamundoE = [];
  console.log("juega emperatriz");

    
        zonamundoE[0] = mazo[Math.floor(Math.random() * mazo.length)];
        
        console.log("El Mundo Oscuro juega: ");  
        console.log(zonamundoE[0].nombre);
        

        cartasEnMesa.push(zonamundoE[0]);
        

        function eliminar(nombre){
            let index = mazo.indexOf(nombre);

            if (index != -1){
                
                mazo.splice(index, 1);
            }
        }

        eliminar(zonamundoE[0]);
        
        if (zonamundoE[0].nombre == "bruja" || zonamundoE[0].nombre == "senadores-abel" || zonamundoE[0].nombre == "emperatriz" || zonamundoE[0].nombre == "cain" || zonamundoE[0].nombre == "lilith"){
          console.log("punto de partida: " + puntospartida);
          puntospartida++;
          console.log("suma +1 porque salio: " + zonamundoE[0].nombre + " | Ahora la partida es por: " + puntospartida);

          let borrarzonacartaE = document.getElementById('tutorial').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <h3 class="animate__animated animate__fadeInLeft">La Emperatriz juega 1 carta</h3>
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
            <p class="animate__animated animate__fadeInLeft">Esta carta actua si tiene su "Ícono" entre parentesis. La partida va por ${puntospartida} punto/s.</p>
            <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="interMano();">Intercambiar mano</a>
            </div>

            <div class="d-flex row align-content-center justify-content-center">
              <div class="card2s positioncard--0 ">
              <div id="carta0" class="card2 ${zonamundoE[0].nombre}"></div> 
              </div>
              
            </div>
            
        </div>`;
        } else {
          let borrarzonacartaE = document.getElementById('tutorial').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <h3 class="animate__animated animate__fadeInLeft">La Emperatriz juega 1 carta</h3>
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
            <p class="animate__animated animate__fadeInLeft">Esta carta actua si tiene su "Ícono" entre parentesis. La partida va por ${puntospartida} punto/s.</p>
            <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="interMano();">Intercambiar mano</a>
            </div>

            <div class="d-flex row align-content-center justify-content-center">
              <div class="card2s positioncard--0 ">
              <div id="carta0" class="card2 ${zonamundoE[0].nombre}"></div> 
              </div>
              
            </div>
            
        </div>`;
        }

    
    
    cartasEnMesa.forEach((cartasmesa) => {
      console.log("estas son las cartas en mesa: " + cartasmesa.nombre);
    });

    console.log("puntos: " + puntospartida + " | Carta que juega la Emperatriz: " + zonamundoE[0].nombre);

    
  }
function interMano(){
  
  console.log(pc);
  let cambioMano = [];
    cambioMano = jug1;
    jug1 = pc;
    pc = cambioMano;
    
    
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Intercambia de manos</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tú y tú rival intercambiaron manos. Si ambos recuerdan que tenian será una ventaja.</p>
          <div id="botonParaSeguir">
          
          </div>
          
        </div>

        <div id="nuevasCartas" class="card2s positioncard2 animate__animated animate__fadeInRight">
             
       </div>
    </div>`;

    if (turnoDe == 1){
      let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
      <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="miRival();"> Seguir jugando</a>`
    } else {
      let paraSeguirMiRival = document.getElementById('botonParaSeguir').innerHTML =  `
      <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="myInicio();"> Seguir jugando</a>`
    }
 
    let jug1Auxi = "";
    
    for (let i = 0; i < jug1.length; i++) {
      
      jug1Auxi +=
             `
                  
             <div id="carta${i}" class="card2 ${jug1[i].nombre}"></div>  
                  `;

      console.log("estas son tus nuevas cartas: " + jug1);

      document.getElementById('nuevasCartas').innerHTML = jug1Auxi;
    
    };
}
////fin de ganar partida


let zonamundo = [];
console.log("salen las 1ras 4 cartas que juega El Mundo Oscuro");

    for (i = 0; i <= 3; i++){
        zonamundo[i] = mazo[Math.floor(Math.random() * mazo.length)];
        
        console.log("El Mundo Oscuro juega: " + zonamundo[i].nombre)
        

        cartasEnMesa.push(zonamundo[i]);
        

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
    
    cartasEnMesa.forEach((cartasmesa) => {
      console.log("estas son las cartas en mesa: " + cartasmesa.nombre);
    });

    console.log("puntos: " + puntospartida + " | Las cartas de El Mundo Oscuro: " + zonamundo[0].nombre + " " + zonamundo[1].nombre + " " + zonamundo[2].nombre + " " + zonamundo[3].nombre);

    let borrarzonacarta = document.getElementById('tutorial').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <h3 class="animate__animated animate__fadeInLeft">El Mundo Oscuro juega 4 cartas</h3>
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
            <p class="animate__animated animate__fadeInLeft">Así inicia la preparación de cada ronda. La partida va por ${puntospartida} punto/s.</p>
            <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myMano();">Empezar a jugar</a>
            </div>

            <div class="d-flex row align-content-center justify-content-center">
              <div class="card2s col-6 positioncard-z ">
              <div id="carta0" class="card2 ${zonamundo[0].nombre}"></div> 
              </div>
              <div class="card2s col-6 positioncard-y">
              <div id="carta0" class="card2 ${zonamundo[1].nombre}"></div> 
              </div>
            </div>
            <div class="d-flex row align-content-center justify-content-center">
              <div class="card2s col-6 positioncard-z">
              <div id="carta0" class="card2 ${zonamundo[2].nombre}"></div> 
              </div>
              <div class="card2s col-6 positioncard-y">
              <div id="carta1" class="card2 ${zonamundo[3].nombre}"></div>    
              </div>
            </div>
        </div>`;
        
function sumPuntos(){
    puntojug1 = localStorage.getItem('puntos-jugador1');
    puntojug1 = parseInt(puntojug1) + parseInt(puntospartida);
    console.log("puntos que tienes actuales:");
    console.log(puntojug1);
    localStorage.setItem('puntos-jugador1', parseInt(puntojug1));

    if (puntojug1 >= 7){
      ganaPartida();
      
    }
}

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

function robaPc(){
  cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
  // console.log("esta es la cartarandom que ROBA PC: " + cartarandom.nombre);
  pc.push(cartarandom);
    for (i = 0; i <= 1; i++){
    console.log(jug1[i]);
    }
  eliminar(cartarandom);
  console.log("mazo completo:");
  console.log(mazo);
  console.log("esta es la mano de PC:");
  console.log(pc);
} 

function masCartasEnMano(){
  
  console.log("inicia generar cartas en el ID bufon");
  let htmlAux = '';
  for (let i = 0; i < jug1.length; i++) {
      htmlAux =
          htmlAux + `
          <div id="bufon${i}" class="card2s positioncard--${i}">
              <div id="carta${i}" class="card2 ${jug1[i].nombre}">
              </div>    
          </div>`;
          console.log("final generar cartas en el ID bufon. Jugador 1 tiene: " + jug1[i].nombre);
      
  }
  document.getElementById('bufon').innerHTML = htmlAux;
  
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

            <div id="bufon"> 
              
          </div>
        </div>`;
        masCartasEnMano();


    //////////// PC roba 1 carta /////////
    console.log("PC roba 1 carta para iniciar la ronda");

    pc[0] = mazo[Math.floor(Math.random() * mazo.length)];
    console.log("PC tiene en mano, posicion " + 0)
    console.log(pc[0]);

    eliminar(pc[0]);
    console.log(mazo);

    //////////// fin - PC roba 1 carta /////////
    let jug1carta1 = document.getElementById('carta0');
        jug1carta1.addEventListener('click', respuestaClick);
        
        let jug1carta2 = document.getElementById('carta1');
        jug1carta2.addEventListener('click', otrorespuestaClick);
    
        let jug1carta3 = document.getElementById('carta2');
        jug1carta3.addEventListener('click', resClick2);
        
        let jug1carta4 = document.getElementById('carta3');
        jug1carta4.addEventListener('click', resClick3);

    function respuestaClick(){
        numcarta=0;
        myTutorial();
    }
    function otrorespuestaClick(){
        numcarta=1;
        myTutorial();
    }
    function resClick2(){
      numcarta=2;
      myTutorial();
    }
    function resClick3(){
    numcarta=3;
    myTutorial();
    }
}

function myInicio(){

  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
              <h3 class="animate__animated animate__fadeInLeft">Tus cartas en mano:</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Cliquea una carta para jugarla y hacer su acción.</p>
              
            </div>
            <div id="bufon">
            
            </div>
        </div>`;

        masCartasEnMano();

        let jug1carta1 = document.getElementById('carta0');
        jug1carta1.addEventListener('click', respuestaClick);
        
        let jug1carta2 = document.getElementById('carta1');
        jug1carta2.addEventListener('click', otrorespuestaClick);
    
        let jug1carta3 = document.getElementById('carta2');
        jug1carta3.addEventListener('click', resClick2);
        
        let jug1carta4 = document.getElementById('carta3');
        jug1carta4.addEventListener('click', resClick3);
        
        function respuestaClick(){
            numcarta=0;
            myTutorial();
        }
        function otrorespuestaClick(){
            numcarta=1;
            myTutorial();
        }
        function resClick2(){
          numcarta=2;
          myTutorial();
        }
        function resClick3(){
        numcarta=3;
        myTutorial();
        }
}




function myTutorial(){
/////////////Inicia la ronda y el jugador 1 comienza jugando una carta.
// if (zonapc != "") {
//   inicio();
// }

if (mazo == ""){
  dueloFinal();
  
}

console.log("Jugador 1 juega: " + jug1[numcarta].nombre);





  zonajug1 = jug1[numcarta];

  cartasEnMesa.push(zonajug1);
  
  cartasEnMesa.forEach((cartasmesa) => {
    console.log("estas son las cartas en mesa: " + cartasmesa.nombre);
  });
  
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







if (zonajug1.nombre == "bufon-roba") {
  let cartarandom = [];
  cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
  console.log("esta es la cartarandom: " + cartarandom.nombre);  
  jug1.push(cartarandom);
    for (i = 0; i <= 1; i++){
    console.log(jug1[i]);
  }
  eliminar(cartarandom);
  console.log(mazo);
  robaPc(); //roba por bufón
  


  console.log(pc); //debería de tener 3 cartas
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Robaste una nueva carta:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tener una carta mas mejora tus "combinaciones" y tienes mas posibilidades de elegir una mejor jugada. Cuando sea tu turno y robes una carta tendrás 3 cartas en mano.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>
        
        <div id="bufon">
        
       </div>
    </div>`;

    masCartasEnMano();
    
}




if (zonajug1.nombre == "sibila") {
  
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
        
        sumPuntos();
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
      robaPc();
      console.log(pc);
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

if (zonajug1.nombre == "gangster") {
  jug1.sort((a, b) => b.valor.localeCompare(a.valor));
console.log("el mazo tiene esta cantidad de cartas: " + mazo.length);

  if (jug1[0].valor == pc[0].valor) {
    robaPc();
    console.log(pc);
    console.log(jug1[0].valor + " vs " + pc[0].valor);
    console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
    let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
     <div class="card2s positioncard2 ">  <h3 class="animate__animated animate__fadeInLeft">Tu carta</h3>
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
        </div>

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de Q (Q/Q) > Simple: A.)</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>

       
        <div class="card2s positioncard "><h3 class="animate__animated animate__fadeInLeft">Carta del Rival</h3>
          <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
      </div>
    </div>`;
    
  } else if (jug1[0].valor > pc[0].valor) {
    sumPuntos();
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

if (zonajug1.nombre == "bruja") {
  control = true;
  let a = 0;
  for (const objeto of pc){
    console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);
    
    if (objeto.nombre == "cain" || objeto.nombre == "lilith") {
      sumPuntos();
      
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
                <div id="carta0" class="card2 ${pc[a].nombre}"></div>    
            </div>
        </div>`;
        control = false;
        console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
        break;
    }
    a++;

  }

    if (control == true) {
      robaPc();
      console.log(pc);
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

if (zonajug1.nombre == "pope"){
  robaPc();
  console.log(pc);
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
  robaPc();
  console.log(pc);

  

  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">TOMAS UNA CARTA DE LA MESA</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Y nadie podrá PREDECIRTE esa carta.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="miRival();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 animate__animated animate__fadeInRight">
          <div id="carta0" class="card2 ${zonajug1.nombre}"></div>    
       </div>
    </div>`;

    let mesaAuxi = '';
    let nMesa = 0;

    



    cartasEnMesa.forEach((cartasmesa) => {
      
      mesaAuxi +=
             `
                  
            <div id="numMesa${nMesa}" class="card bg-dark text-white cardtable" style="height: 25vh;background-image: url(${cartasmesa.imagen}); background-position: top center;" onclick="mipm(${nMesa});">
                      
                          <div class="col card-img-overlay align-content-flex-end flex-wrap">
                              <h6>
                                  • ${cartasmesa.combinacion} •
                              </h6>
                              <h6>
                                  ${cartasmesa.nombre.toUpperCase()}
                              </h6>
                          </div>
                  </div>
                  `;

      console.log("estas son las cartas en mesa: " + cartasmesa.nombre);



      
      document.getElementById('cards10').innerHTML = mesaAuxi;

     
    nMesa++;
        
    
    });

    
    
}

if (zonajug1 == emperador){
  robaPc();
  console.log(pc);
  turnoDe = 1;
  let cambioMano = [];
    cambioMano = jug1;
    jug1 = pc;
    pc = cambioMano;
  let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

    <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main">
          <h3 class="animate__animated animate__fadeInLeft">Intercambia y alguien Descarta y Recupera</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tú y tú rival intercambian manos, Luego elige quien descarta y recupera su mano.</p>
          <a id="jugjug" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="desYrecjug1();"> Jugador </a>
          <a id="pcpc" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true"  onclick="desYrecPc();"> Tú Rival </a>
          
        </div>

        <div id="nuevasCartas" class="card2s positioncard2 animate__animated animate__fadeInRight">
             
       </div>
    </div>`;
 
    let jug1Auxi = "";
    
    for (let i = 0; i < jug1.length; i++) {
      
      jug1Auxi +=
             `
                  
             <div id="carta${i}" class="card2 ${jug1[i].nombre}"></div>  
                  `;

      console.log("estas son tus nuevas cartas: " + jug1);

      document.getElementById('nuevasCartas').innerHTML = jug1Auxi;
    
    };
    
}
      

if (zonajug1 == emperatriz){
  robaPc();
  turnoDe = 1;
  emperatrizJuega();
  
}

if (zonajug1 == cain){
  robaPc();
  console.log(pc);
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
  robaPc();
  console.log(pc);
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
    
if (mazo == ""){
  dueloFinal();
  
}
  
    cartarandom = mazo[Math.floor(Math.random() * mazo.length)];
    // console.log("esta es la cartarandom que ROBA la PC: " + cartarandom.nombre);  
    pc.push(cartarandom);
      for (i = 0; i <= 1; i++){
      console.log(pc[i]);
    }
    eliminar(cartarandom);
    console.log("mazo completo:");
    console.log(mazo);

    zonapc = pc[Math.floor(Math.random() * pc.length)];

    cartasEnMesa.push(zonapc);
    
    cartasEnMesa.forEach((cartasmesa) => {
      console.log("estas son las cartas en mesa: " + cartasmesa.nombre);
    });

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

    
    if (zonapc.nombre == "bufon-roba") {
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
    
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Robaste una nueva carta:</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tener una carta mas mejora tus "combinaciones" y tienes mas posibilidades de elegir una mejor jugada. Cuando sea tu turno y robes una carta tendrás 3 cartas en mano.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio()">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
          </div>
          <div class="card2s positioncard ">
            <div id="carta1" class="card2 ${jug1[1].nombre}"></div>    
          </div>
        </div>`;
      
    }




      if (zonapc.nombre == "sibila") {
        let eleccionPC = ["Mundo", "Balanza", "Ficha", "Calavera", "Corona"];
        entrada = eleccionPC[Math.floor(Math.random() * eleccionPC.length)];
        console.log("Icono del Jug1: " + pc[0].icono);
        console.log("La PC eligio el ícono: " + entrada);
          

        for (let i = "0"; i <= "2"; i++) {
          if (entrada == jug1[0].icono[i]) {
            
            control = false;
            console.log("Icono: " + jug1[0].icono[i] + " Predicción: " + entrada);
            
            
            let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
      
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <p class="animate__animated animate__fadeInLeft">Tú rival PREDIJO que tenias el ÍCONO: ${entrada} y te elimino de la partida. Tenias un/a ${jug1[0].nombre.toUpperCase()}.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
                </div>
                <div class="card2s positioncard2 ">
                    <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
                </div>
            </div>`;
            
            break;
          }
        }
        if (control == true) {
          robaJug1();       
          let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
             <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">Tú rival no acerto. ¡Que suerte la tuya!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <p class="animate__animated animate__fadeInLeft">El juego sigue normal, veremos quien elimina a quien.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio();">Volver a jugar</a>
                </div>
                <div class="card2s positioncard--0 ">
                <div id="carta1" class="card2 ${zonapc.nombre}"></div>    
            </div>
            </div>`;
            
            
            
        }
      }


    if (zonapc.nombre == "gangster") {
      
      jug1.sort((a, b) => b.valor.localeCompare(a.valor));
      if (jug1[0].valor == pc[0].valor) {
          robaJug1();
        console.log(jug1[0].valor + " vs " + pc[0].valor);
        console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
  
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main">
            <p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> 
            <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Has empatado</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenian la misma combinación, ambos sabrán que cartas tienen y el juego continua normal.</p>
              <p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de Q (Q/Q) > Simple: A.)</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard--0 ">
              <div id="carta0" class="card2 ${jug1[0].nombre}"></div> 
            </div>
            <div class="card2s positioncard--1 ">
              <div id="carta1" class="card2 ${pc[0].nombre}"></div>    
          </div>
        </div>`;
        
      } else if (jug1[0].valor > pc[0].valor) {

        sumPuntos();
        console.log(jug1[0].valor + " vs " + pc[0].valor);
        console.log(jug1[0].combinacion + " vs " + pc[0].combinacion);
        console.log("Gana jugador 1");
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
    
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">¡Ganaste!</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h4 class="animate__animated animate__fadeInLeft">Obtienes ${puntospartida} punto/s.</h4>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin: 30px 0 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenias una mejor combinación (${jug1[0].combinacion}) y eliminaste a tu oponente. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft">Par > Simples (ej.: Par de A (A/A) > Simple: J.)</p>
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
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Has perdido con tu ${jug1[0].combinacion}</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Tenias una menor combinación (${jug1[0].combinacion}) y fuiste eliminado. Tu rival tenia: ${pc[0].combinacion}.</p><p class="animate__animated animate__fadeInLeft"><b>Valores:</b> A > K > Q > J > 10</p><p class="animate__animated animate__fadeInLeft"><b>Par > Simples</b> (ej.: Par de J (J/J) > Simples: K.)</p>
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

    if (zonapc.nombre == "bruja") {
      control = true;
      for (const objeto of jug1){
        console.log("La PC tiene estas cartas en su mano: " + objeto.combinacion + " / " + objeto.nombre + " / " + objeto.accion);
        a = 0;
        if (objeto.nombre == "cain" || objeto.nombre == "lilith") {
          let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
    
            <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
                <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  <h3 class="animate__animated animate__fadeInLeft">¡Perdiste!</h3>
                  <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
                  
                  <p class="animate__animated animate__fadeInLeft">Tú rival te hizo REVELAR esa carta cuya acción te hace perder... ¡Qué pena!.</p>
                  <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="location.reload(true);">Volver a jugar</a>
                </div>
                <div class="card2s positioncard2 ">
                    <div id="carta0" class="card2 ${jug1[a].nombre}"></div>    
                </div>
            </div>`;
            control = false;
            console.log("Encontro una carta de REVELADO y eliminación: " + objeto.nombre);
            break;
        } a++;

      }

        if (control == true) {
          robaJug1();
        let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `
          
        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <h3 class="animate__animated animate__fadeInLeft">Tú rival te hace REVELAR:</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">REVELAR tu carta es proporcionar información a la mesa. Estarás mas cerca de tú eliminación.</p>
          <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio();">Volver a jugar</a>
        </div>

        <div class="card2s positioncard2 ">
          <div id="carta0" class="card2 ${jug1[0].nombre}"></div>    
      </div>
      </div>`;}

      
    
    
    }

    if (zonapc.nombre == "pope"){
      robaJug1();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">NIEGA o ACEPTA las acciones de tus cartas</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Si le juegan una carta que lo elimine lo NEGARÁ y el efecto no se produce. Si le juegas algo favorable lo ACEPTARÁ y ese efecto se produce.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${zonapc.nombre}"></div>    
          </div>
        </div>`;
        
    }

    if (zonapc == senadores){
      robaJug1();
      mipmPC();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <h3 class="animate__animated animate__fadeInLeft">Tu Rival Tomó esta carta</h3>
              <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
              <p class="animate__animated animate__fadeInLeft">Y nadie podrá predecir esa carta.</p>
              <a href="#tutorial"style="z-index: 3;width: 340px;" class="btn btn-lg btn-success active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="myInicio();">Volver a jugar</a>
            </div>

            <div class="card2s positioncard2 animate__animated animate__fadeInRight">
              <div id="carta0" class="card2 ${cartasEnMesa[idrandom].nombre}"></div>    
          </div>
        </div>`;
        
    }

    if (zonapc == emperador){
      turnoDe = 0;
      let cambioMano = [];
      cambioMano = jug1;
      jug1 = pc;
      pc = cambioMano;
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
        <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> 
        <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <h3 class="animate__animated animate__fadeInLeft">Intercambia y alguien Descarta y Recupera</h3>
          <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
          <p class="animate__animated animate__fadeInLeft">Tú y tú rival intercambian manos, Luego elige quien descarta y recupera su mano.</p>
          
          <a id="jugjug" style="z-index: 3;width: 340px;" class="btn btn-lg btn-secondary active animate__animated animate__fadeInUp" role="button" aria-pressed="true" onclick="quienDescarta();"> Seguir jugando </a>
          
          
        </div>

        <div id="nuevasCartas" class="card2s positioncard2 animate__animated animate__fadeInRight">
             
        </div>
        </div>`;
        
    }

    if (zonapc == emperatriz){
      robaJug1();
      turnoDe = 0;
      emperatrizJuega();
    }

    if (zonapc == cain){
      
      sumPuntos();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
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
      sumPuntos();
      let borrarzonacarta = document.getElementById('zonacarta').innerHTML = `

        <div id="zonacarta" class="seomain cont-pjs" style="background-image: url(../img/fondotutorial.webp);">
            <div class="texto-main"><p class="animate__animated animate__fadeInLeft"> Turno del Rival juega ${zonapc.nombre.toUpperCase()}</p> <img alt="linea divisoria" class="sliderlinea animate__animated animate__flipInY" src="../img/divsim.svg" alt=""  style="margin-bottom: 30px;">
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
