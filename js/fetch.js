function Iniciarcartitas1() {
    fetch("cartas.json")
      .then((resinInicial) => resinInicial.json())
      .then((res) => {
        const carta10 = res;
       
        let htmlAuxi = '';
        carta10.forEach((cartitas) => {
            htmlAuxi =
            htmlAuxi + `
            <div class="card bg-dark text-white" style="height: 25vh;background-image: url(${cartitas.imagen}); background-position: top center;">
                      
                          <div class="col card-img-overlay align-content-flex-end flex-wrap">
                              <h6>
                                  • ${cartitas.combinacion} •
                              </h6>
                              <h6>
                                  ${cartitas.nombre}
                              </h6>
                          </div>
                  </div>`;

            console.log("final generar cartitas. La actual es: " + cartitas.nombre);
    
        document.getElementById('cards10').innerHTML = htmlAuxi;
        });
      });
  }

  Iniciarcartitas1();
  

 

