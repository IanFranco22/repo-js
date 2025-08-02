const productos = ["Camiseta", "Pantalón", "Zapatillas"];
let carrito = [];
let total = 0;

function mostrarProductos() {
  console.log("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log(i + 1 + " - " + productos[i]);
  }
}

function comprarProducto() {
  let eleccion = prompt(
    "¿Qué producto querés comprar?\n1 - Camiseta\n2 - Pantalón\n3 - Zapatillas"
  );
  let indice = parseInt(eleccion) - 1;

  if (indice >= 0 && indice < productos.length) {
    carrito.push(productos[indice]);
    alert("Agregaste " + productos[indice] + " al carrito.");
    total += 1000;
  } else {
    alert("Opción inválida. Intentalo de nuevo.");
  }
}

function finalizarCompra(nombre) {
  if (carrito.length === 0) {
    alert("No agregaste ningún producto al carrito.");
  } else {
    let confirmar = confirm(nombre + ", ¿deseás finalizar la compra?");
    if (confirmar) {
      alert(
        "Gracias por tu compra, " +
          nombre +
          "!\nTotal: $" +
          total +
          "\nProductos: " +
          carrito.join(", ")
      );
      console.log("Compra realizada por " + nombre);
      console.log("Productos: " + carrito);
      console.log("Total: $" + total);
    } else {
      alert("Compra cancelada.");
    }
  }
}

function simulador() {
  let nombreUsuario = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
  alert("Hola " + nombreUsuario + ", vamos a hacer una compra.");

  mostrarProductos();

  let seguir = true;

  while (seguir) {
    comprarProducto();
    seguir = confirm("¿Querés agregar otro producto?");
  }

  finalizarCompra(nombreUsuario);
}

simulador();
