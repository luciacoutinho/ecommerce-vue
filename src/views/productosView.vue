<template>
  <main>
        <section class="shop app">

            <div class="container">

                <div class="row py-5">

                    <div class="col-lg-8 m-auto text-center mb-5">

                        <h1 class="titulo">Productos</h1>

                        <h2 class="subtitulo mb-5">Navega por nuestra gran variedad de productos</h2>

                        <catalogo-buscador :productos="productos" @filtrar="(productosFiltrados) => {this.productosNuevos = productosFiltrados}"></catalogo-buscador>
                        <catalogoFormulario
                            :formProp="form"
                            :productoEditar="productoEditar"
                            @productoEditado="(producto)=> $emit('productoEditado', producto)"
                            @productoNuevo="(producto)=> $emit('productoNuevo', producto)">

                        </catalogoFormulario>

                    </div>
                    <div class="row">

                        <div class="col-md-3 text-center mb-4" v-for="(producto, index) in productos" :key="producto.id">

                            <!-- Carta -->
                            <div class="card border-0 bg-light mb-2 shadow">

                                <div class="card-body">

                                    <a href="#">
                                     <picture>

                                        <img v-bind:src="producto.imagen" class="w-100" :alt="producto.img_alt"></picture>

                                        <div class="descripcion px-4">

                                        <h3 class="h4 pt-4">{{producto.titulo}}</h3>
                                        <p class="precio">${{producto.precio.toLocaleString('ES-AR')}}</p>
                                        </div>

                                    </a>

                                    <div class="container">
                                     <div class="row">
                                      <div class="col-12">
<button @click="$emit('evento', producto.producto_id)" class="btn button btn-carrito w-100"><i class="bi bi-cart-plus"></i> Agregar al carrito</button>
                                      </div>
                                      <div class="col-6">
                                       <button v-on:click="editar(index)" class="btn btn-outline-success button w-100"><i class="bi bi-pencil-square"></i></button>
                                      </div> 
                                      <div class="col-6">
                                        <button v-on:click="eliminar(index)" class="btn btn-outline-danger button w-100"><i class="bi bi-trash"></i></button>
                                      </div> 
                                   
                                     </div>


                                        
                                        <!-- <button @click="$emit('sumar')"></button> -->
                                        
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
    import catalogoBuscador from '../components/catalogoBuscador.vue'
    import catalogoFormulario from '../components/catalogoFormulario.vue'

    export default {
        name: 'catalogoView',
        components: {
            catalogoBuscador,
            catalogoFormulario
        },
        computed: {
            productosFinales() {
                return this.productosNuevos.length > 0 ? this.productosNuevos : this.productos;
            },
        },
        props: {
            productos: Array
        },
        methods: {
            editar: function(index){
                this.form = true;
                this.productoEditar = this.productos[index];
            },
        },
        data() {
            return {
                form: false,
                productoEditar: {},
                productosNuevos: [],
            };
        },

    }
    
</script>

<style scoped>
    a{
        color: black;
        text-decoration: none;
    }

    /* .precio{
        font-size: 1.2rem;
        font-weight: bold;
    } */

    .h4{
        font-size: 1.25rem;
        font-weight: bolder;
        margin: 5px 0 0 0;
    }

    .btn-carrito{
     background-color: rgba(0, 115, 255, 0.864);
     color: white;
     transition: all ease .3s;
    }

    .btn-carrito:hover{
     background-color: rgba(0, 63, 139, 0.978) ;
    }
    
</style>