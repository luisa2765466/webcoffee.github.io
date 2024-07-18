document.addEventListener("DOMContentLoaded", function () {
  // Mostrar productos de la primera categoría al cargar la página
  mostrarProductos("cafes");
});
const productos = {
    cafes: [
        {
            tipo:"Café",
            nombre: "ESPRESSO",
            imagen: "espresso.png",
            descripcion: "Café preparado en máquina de espresso.",
            precio: "10.00",
        },
        {
            tipo:"Café",
            nombre: "AMERICANO",
            imagen: "americano.png",
            descripcion: "Prolonga el sabor del espresso.",
            precio: "10.00",
        },
        {
            tipo:"Café",
            nombre: "CHAI CAFE",
            imagen: "chai_cafe.png",
            descripcion: "Dile chao al al estrés con este increíble Chai Café.",
            precio: "12.00",
        },
        {
            tipo:"Café",
            nombre: "FLAT WHITE",
            imagen: "flat-white.png",
            descripcion: "Espresso doble con una fina capa de leche vaporizada.",
            precio: "12.00",
        },
        {
            tipo:"Café",
            nombre: "LATTE",
            imagen: "latte.png",
            descripcion: "Mezcla de espresso cubierta de leche vaporizada.",
            precio: "13.00",
        },
        {
            tipo:"Café",
            nombre: "MOCCA",
            imagen: "mocca.png",
            descripcion: "Intenza combinación de café y chocolate.",
            precio: "13.00",
        },
    ],
    bebidas: [
        {
            tipo: "Bebida",
            nombre: "CAPUCCINO DULCE",
            imagen: "capuccino.png",
            descripcion: "Tu capuccino favorito con delicioso caramelo dulce.",
            precio: "14.00",
        },
        {
            tipo: "Bebida",
            nombre: "CAPUCCINO SALADO",
            imagen: "capuccino.png",
            descripcion: "Tu capuccino favorito con delicioso caramelo salado.",
            precio: "14.00",
        },
        {
            tipo: "Bebida",
            nombre: "CHOCOLATE",
            imagen: "chocolate.png",
            descripcion: "Chocolate con leche vaporizada, completamente exquisito que endulzará cualquier momento del día.",
            precio: "14.00",
        },
        {
            tipo: "Bebida",
            nombre: "TÉ MATCHA",
            imagen: "matcha.png",
            descripcion: "Prueba el nuevo y exquisito sabor del Té Matcha que complementará tus mejores momentos.",
            precio: "14.00",
        },
        {
            tipo: "Bebida",
            nombre: "TÉ CHAI",
            imagen: "te-chai.png",
            descripcion: "Deliciosa combinación de especias y miel en té que relaja tu cuerpo y mente.",
            precio: "14.00",
        },
    ],
    pasteles: [
        {   
            tipo: "Torta",
            nombre: "CHEESECAKE DE FRAMBUESA",
            imagen: "cheesecake-frambuesa.png",
            descripcion: "Cheesecake de frambuesa entero",
            precio: "35.50",
        },
        {
            tipo: "Torta",
            nombre: "MANZANA Y NUEZ",
            imagen: "manzana-nuez.png",
            descripcion: "La magia y el aroma de la manzana se fusionan con las nueces en esta deliciosa torta",
            precio: "50.00",
        },
        {
            tipo: "Torta",
            nombre: "MOJADA DE CHOCOLATE",
            imagen: "mojada-chocolate.png",
            descripcion: "Disfruta de la magia del chocolate con nuestra torta mojada de chocolate",
            precio: "55.00",
        },
        {
            tipo: "Postre",
            nombre: "PIE DE LIMÓN",
            imagen: "pie-limon.png",
            descripcion: "Delicioso pie de limón entero",
            precio: "35.50",
        },
        {
            tipo: "Torta",
            nombre: "CARAMELO",
            imagen: "torta-caramelo.png",
            descripcion: "Deliciosa torta entera caramelo dulce, porciones sugeridas de 6 a 8.",
            precio: "55.00",
        },
        {
            tipo: "Torta",
            nombre: "CHOCLO",
            imagen: "torta-choclo.png",
            descripcion: "Deliciosa torta de choclo",
            precio: "45.00",
        },
        {
            tipo: "Torta",
            nombre: "TRES LECHES",
            imagen: "tres-leches.png",
            descripcion: "Deliciosa torta tres leches de vainilla o café",
            precio: "60.00",
        },
    ],
};

function mostrarProductos(categoria) {


    const carruselInner = document.getElementById("carrusel-inner");
    carruselInner.innerHTML = "";

    productos[categoria].forEach((producto) => {
        const productoHTML = `
        <li class="card">
            <div class="img"><img src="images/productos/${producto.imagen}" alt="${producto.nombre}" draggable="false"></div>
            <div class="description-p">
            <i class="fa-regular fa-heart"></i>
            <h2 class="titulo-p">${producto.tipo}<br>&lt;&lt;${producto.nombre}&gt;&gt;</h2>
            <span class="desc-p">${producto.descripcion}</span>
            <div class="comprar">
            <span class="span-p">S./${producto.precio}</span>
            <button><i class="bi bi-cart-fill"></i></button>
            </div>
            </div>
        </li>
        `;
        carruselInner.innerHTML += productoHTML;
    });


    const carousel = document.querySelector(".carousel");
    const arrowLeft = document.getElementById("left");
    const arrowRight = document.getElementById("right");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    
    arrowLeft.addEventListener("click", () => {
        carousel.scrollLeft -= firstCardWidth;
    });
    
    arrowRight.addEventListener("click", () => {
        carousel.scrollLeft += firstCardWidth;
    });


    
}




