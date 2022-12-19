<template>
  <main>
    <bannerPrincipal/>
    <cuatroCards :productos="productosDestacados"/>
  </main>
</template>

<script>
// @ is an alias to /src
import bannerPrincipal from '@/components/bannerPrincipal.vue'
import cuatroCards from '@/components/cuatroCards'

export default {
  name: 'inicioView',
  components: {
    bannerPrincipal,
    cuatroCards,
  },
  props: {
    productos: {
      type: Array,
      required: true
    }
  },

  computed: {
    productosDestacados() {
      return this.productos.filter((producto) => producto.destacado);
    },
  },

}
</script>
