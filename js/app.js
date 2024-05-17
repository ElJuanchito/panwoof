document.addEventListener('DOMContentLoaded', () => {

    const tablaBody = document.getElementById("tabla-body");

        // Cargar los datos de productos desde el archivo JSON
        fetch('/js/productos.json')
            .then(response => response.json())
            .then(data => {
                // Iterar sobre cada producto y crear una fila para cada uno
                data.forEach(producto => {
                    // Crear una fila para el producto y asignar valores a las celdas
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td><img src="${producto.imagen}" alt="${producto.descripcion}" class="product-image"></td>
                        <td>${producto.descripcion} COP</td>
                        <td>${producto.precio} COP</td>
                        <td><input type="number" min="0" class="form-control"/></td>
                        <td><input type="number" class="form-control"/></td>
                    `;
    
                    // Agregar la fila al cuerpo de la tabla
                    tablaBody.appendChild(fila);
                });
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
});