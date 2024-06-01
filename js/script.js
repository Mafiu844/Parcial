document.addEventListener("DOMContentLoaded", function(){
    fetch(`js/datos.json`)
        .then(response => response.json())
        .then(data => {

          var infoProducto = '';

          data.productos.forEach(producto => {
            infoProducto +=

            `
              <div class="col-md-3">
                <div class="card h-100 p-1">

                <div class="d-flex justify-content-center">  
                  <img class="productoImg" src="${producto.imagen}">
                </div>
                
                <div class="card-body">
                  <h4 class="py-1 text-center">${producto.nombre}</h4>
                  <p class="text-center">${producto.descripcion}</p>
                  <p><strong>PRECIO:</strong> ${producto.precio} S/.</p>
                  <p><strong>STOCK:</strong> ${producto.stock} unidades</p>
                  <p><strong>CATEGORIA:</strong> ${producto.categoria}</p>
                  <p><strong>MARCA:</strong> ${producto.marca}</p>
                  <p><strong>DISPONIBILIDAD:</strong> ${producto.disponibilidad}</p>

                <div class="d-flex justify-content-center py-1">
                  <a href="#" class="btn btn-dark "> Comprar </a>
                </div>

                </div>
                </div>
              </div>   
            `;

            document.getElementById('infoProducto').innerHTML = infoProducto;



          });

        })
    .catch(error => console.error('Error en el código', error))
});