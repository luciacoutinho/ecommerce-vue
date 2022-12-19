<template>
  <section class="product">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-5 m-auto text-center">
          <h3 class="titulo">Lo más vendido</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 text-center" v-for="producto in productos" :key="producto.id">
          <div class="card border-0 bg-light mb-2">
            <div class="card-body" >
              <a href="#">
                <picture>
                  <source srcset="" media="all and (min-width: 46.875em)" />
                  <img :src="producto.imagen" class="img-fluid" :alt="producto.img_alt" />
                </picture>

                <h5 class="mt-1">{{producto.titulo}}</h5>
                <p class="mb-2 precio">${{producto.precio.toLocaleString("ES-AR")}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 text-center m-auto">
          <router-link class="btn1" to="/productos">Ver Más</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cuatroCards",
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>