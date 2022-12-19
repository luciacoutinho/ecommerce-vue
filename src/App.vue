<template>
  <div>
    <siteHeader></siteHeader>
    <router-view
      :productos="productos" @evento="(id) => agregarCarrito(id)"
      @eliminar="(index) => eliminarCarrito(index)"
      @productoEditado="(producto) => editar(producto)"
      @productoNuevo="(producto) => agregar(producto)"
      :carrito="carrito"
      :total="total"
      :cantidad="cantidad">

    </router-view>
    <!-- @sumar="() => this.total++" -->
    <siteFooter />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "@fontsource/lobster";
import "@fontsource/rubik";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/all.css";
import siteHeader from "./components/siteHeader.vue";
import siteFooter from "./components/siteFooter.vue";

export default {
  name: "App",
  components: {
    siteHeader,
    siteFooter,
  },

  methods: {
    agregarCarrito: function (productoid) {

      if (this.carrito.length != 0) {
        // carrito no vacio
        let bandera = false;

        // Si el producto ya esta en el carrito, solo se incrementa la cantidad
        this.carrito.forEach((item) => {
          if (item.id == productoid) {
            bandera = true;
            item.cantidad++;
            let objStr = JSON.stringify(this.carrito);
            localStorage.setItem("productos", objStr);
          }
        });

        if (bandera == false) {
          this.carrito.push({
            id: productoid,
            titulo: this.productos[productoid].titulo,
            precio: this.productos[productoid].precio,
            imagen: this.productos[productoid].imagen,
            img_alt: this.productos[productoid].img_alt,
            cantidad: 1,
          });

          let objStr = JSON.stringify(this.carrito);
          localStorage.setItem("productos", objStr);
        }

        bandera = false;

        // Sumo el total de los precios de los productos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.cantidad = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
            this.cantidad += item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
          localStorage.setItem("cantidad", JSON.stringify(this.cantidad));
        }
      } else {

        //carrito vacio
        this.carrito.push({
          id: productoid,
          titulo: this.productos[productoid].titulo,
          precio: this.productos[productoid].precio,
          imagen: this.productos[productoid].imagen,
          img_alt: this.productos[productoid].img_alt,
          cantidad: 1,
        });

        // guardo el carrito en el LocalStorage
        let objStr = JSON.stringify(this.carrito);
        localStorage.setItem("productos", objStr);

        // Sumo el total de los precios de los productos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.cantidad = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
            this.cantidad += item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
          localStorage.setItem("cantidad", JSON.stringify(this.cantidad));
        }
      }
    },
    eliminarCarrito: function(i){
      //comentario
      console.log(`Total:${this.total} = ${this.carrito[i].precio} * ${this.carrito[i].cantidad}`);

      this.total -= (this.carrito[i].precio * this.carrito[i].cantidad);
      localStorage.setItem('total', JSON.stringify(this.total));

      this.cantidad -= this.carrito[i].cantidad;
      localStorage.setItem('cantidad', JSON.stringify(this.cantidad));

      this.carrito.splice(i,1);
      localStorage.setItem('productos', JSON.stringify(this.carrito));

    },
    editar: function(producto){
      this.productos[producto.producto_id].titulo = producto.titulo;
      this.productos[producto.producto_id].producto_cat = producto.producto_cat;
      this.productos[producto.producto_id].precio = producto.precio;
      this.productos[producto.producto_id].imagen = producto.imagen;
      this.productos[producto.producto_id].img_alt = producto.img_alt;
    },
    agregar: function(producto){
      this.productos.push({
        producto_id: producto.producto_id,
        titulo: producto.titulo,
        producto_cat: producto.producto_cat,
        precio: producto.precio,
        imagen: producto.imagen,
        img_alt: producto.img_alt,
      });
    }


  },

  created() {
    this.carrito = localStorage.getItem("productos") ? JSON.parse(localStorage.getItem("productos")) : [];
    this.total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : [];
      this.cantidad = localStorage.getItem("cantidad") ? JSON.parse(localStorage.getItem("cantidad")) : [];
  },

  data() {
    return {
      carrito: [],
      total: 0,
      cantidad: 0,
      // fi
        // ltro: '',

        productos: [
            {
                producto_id: 1,
                cat_producto: 1,
                destacado: true,
                titulo: "Gabinete AZZA Luminous 110F Vidrio Templado 1x12cm MICRO ATX",
                precio: 16499,
                imagen: require("../src/assets/gabinete-azza.jpg"),
                alt_img: "Gabinete AZZA Luminous 110F Vidrio Templado 1x12cm MICRO ATX"
            },
            {
                producto_id: 2,
                cat_producto: 1,
                titulo: "Gabinete Aureox Nereid ARX 320G 4x120mm LED",
                precio: 71999,
                imagen: require("@/assets/gabinete-aureox.png"),
                alt_img: "Gabinete Aureox Nereid ARX 320G 4x120mm LED"
            },
            {
                producto_id: 3,
                cat_producto: 1,
                titulo: "Gabinete AZZA Prime 360 Templado 3x12cm ARGB",
                precio: 20499,
                imagen: require("../src/assets/gabinete-prime.png"),
                alt_img: "Gabinete AZZA Prime 360 Templado 3x12cm ARGB"
            },
            {
                producto_id: 4,
                cat_producto: 1,
                titulo: "Gabinete Aerocool Falcon Vidrio Templado 4x12cm ARGB",
                precio: 20499,
                imagen: require("../src/assets/gabinete-falcon.png"),
                alt_img: "Gabinete Aerocool Falcon Vidrio Templado 4x12cm ARGB"
            },
            {
                producto_id: 5,
                cat_producto: 2,
                destacado: true,
                titulo: "Placa de Video MSI NVIDIA GeForce G210 LP 1GB GDDR3",
                precio: 16999,
                imagen: require("../src/assets/placa-msi.png"),
                alt_img: "Placa de Video MSI NVIDIA GeForce G210 LP 1GB GDDR3"
            },
            {
                producto_id: 6,
                cat_producto: 2,
                titulo: "Placa de Video Palit NVIDIA GeForce GT 710 2GB GDDR3",
                precio: 22999,
                imagen: require("../src/assets/placa-palit.png"),
                alt_img: "Placa de Video Palit NVIDIA GeForce GT 710 2GB GDDR3"
            },
            {
                producto_id: 7,
                cat_producto: 2,
                titulo: "Placa de Video Palit NVIDIA GeForce GT 1030 2Gb GDDR4",
                precio: 42999,
                imagen: require("../src/assets/placa-nvidia.png"),
                alt_img: "Placa de Video Palit NVIDIA GeForce GT 1030 2Gb GDDR4"
            },
            {
                producto_id: 8,
                cat_producto: 3,
                titulo: "Mother Gigabyte H610M-H DDR4 (12va Gen) LGA1700",
                precio: 26999,
                imagen: require("../src/assets/mother-gibabyte.png"),
                alt_img: "Mother Gigabyte H610M-H DDR4 (12va Gen) LGA1700"
            },
            {
                producto_id: 9,
                cat_producto: 3,
                destacado: true,
                titulo: "Mother Gigabyte H610M-H DDR4 (12va Gen) LGA1700",
                precio: 26999,
                imagen: require("../src/assets/mother-asus.png"),
                alt_img: "Mother Gigabyte H610M-H DDR4 (12va Gen) LGA1700"
            },
            {
                producto_id: 10,
                cat_producto: 3,
                destacado: true,
                titulo: "Mother AsRock Z690 Pro RS DDR4 (12va Gen) LGA1700",
                precio: 64999,
                imagen: require("../src/assets/mother-asrock.png"),
                alt_img: "Mother AsRock Z690 Pro RS DDR4 (12va Gen) LGA1700"
            },
        ],
    };
  },
};
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .titulo {
    font-size: 2.5rem;
    font-weight: 700;
  }
  .subtitulo {
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.7);
  }
  .btn0{
      height: 40px;
      width: 40%;
      outline: none;
      border: none;
      background: rgba(0, 63, 139, 0.978);
      color: white;
      border-radius: 60px;
      font-weight: 700;
  }

  .btn1 {
    display: inline-block;
    margin: 20px;
    padding: 10px 0;
    text-align: center;
    height: 45px;
    width: 35%;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: rgba(0, 115, 255, 0.864);;
    color: white;
    font-weight: 700;
    border-radius: 60px;
    transition: 0.5s;
  }
  .btn0:hover,
  .btn1:hover,
  .btn3:hover {
    background-color: rgba(0, 63, 139, 0.978) ;
    color: white;
  }
  .btn3 {
    display: inline-block;
    margin: 20px 20px 20px 0px;
    padding: 10px 0;
    text-align: center;
    height: 45px;
    width: 35%;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: rgb(141, 56, 52);
    color: white;
    font-weight: 700;
    border-radius: 60px;
  }

  .button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 5px;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .card{
    border-radius: 20px;
     box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
     transition: 0.5s;
  }

  .card-body{
    padding: 0;
    overflow: hidden;
  }

  .card-body picture{
   overflow: hidden;
  }
  .card-body img{
    border-radius: 20px 20px 0 0;
    transform: scale(1);
    transition: all ease .3s

  }

  .card-body:hover img{
   transform: scale(1.1);
  }

  .card-body a{
    text-decoration: none;
  }

  .card-body a h5, .card-body a p{
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
    color: #343a40;
    text-decoration: none !important;
  }

  .card-body h5{
   padding-top: 20px !important;
  }

  .precio{
       font-weight: 800;
    padding-bottom: 30px;
    padding-top: 20px;
    font-size: 28px;
    color: rgba(0, 63, 139, 0.978) !important
  }

  .btn-color{
   background-color: rgba(0, 115, 255, 0.864);
   color: white;
   border-radius: 20px;
   transition: .5s all ease;
  }
  .btn-color:hover{
      background-color: rgba(0, 63, 139, 0.978) ;
   color: white;
  }


</style>

