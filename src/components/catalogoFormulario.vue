<template>
  <div>
    <!-- Checked ==> Abrir Form -->

    <div v-if="form" class="d-flex justify-content-between mt-3">
      <div class="card p-3 w-75" action="">
        <h3>Nuevo Producto</h3>
        <div class="col-md-12 m-2">
          <input
            v-model="productoForm.titulo"
            class="form-control"
            type="text"
            placeholder="Titulo"
          />
        </div>

        <div class="col-md-12 m-2">
          <select v-model="productoForm.producto_cat" class="form-select" name="Categorias">
            <option disabled selected>Selecciona una opción</option>
            <option value="1">Rap</option>
            <option value="2">Rock</option>
            <option value="3">Jazz</option>
          </select>
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoForm.precio"
            class="form-control"
            type="text"
            placeholder="Precio"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoForm.imagen"
            class="form-control"
            type="text"
            placeholder="URL imagen"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoForm.img_alt"
            class="form-control"
            type="text"
            placeholder="Descripcion imagen"
          />
        </div>

        <div class="col-md-6 w-100">
          <button @click="$emit('productoNuevo', productoForm); toggleForm();" class="btn btn-primary" type="button">
            Guardar
          </button>
        </div>
      </div>
    </div>


    <div v-if="formProp" class="d-flex justify-content-between mt-3">
         
      <div class="card p-3 w-75" action="">
        <div class="col-md-12 m-2">
          <h3 v-if="formProp">Estás editando un producto</h3>
          <input
            v-model="productoEditar.titulo"
            class="form-control"
            type="text"
            placeholder="Titulo"
          />
        </div>

        <div class="col-md-12 m-2">
          <select v-model="productoEditar.producto_cat" class="form-select" name="Categorias">
            <option disabled selected>Selecciona una opción</option>
            <option value="1">Gabinetes</option>
            <option value="2">Placa de Video</option>
            <option value="3">Mother</option>
          </select>
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoEditar.precio"
            class="form-control"
            type="text"
            placeholder="Precio"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoEditar.imagen"
            class="form-control"
            type="text"
            placeholder="URL imagen"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="productoEditar.img_alt"
            class="form-control"
            type="text"
            placeholder="Descripcion imagen"
          />
        </div>
        <div class="d-flex justify-content-between mt-3">
      <div class="form-check form-switch ms-3">
        <input
          v-on:click="productos"
          type="checkbox"
          class="form-check-input"
          id="check1"
        />
        <label for="check1" class="form-check-label">Agregar</label>
      </div>
    </div>

        <div class="col-md-6 w-100">
          <button @click="$emit('productoEditado', productoEditar); formEditar" class="btn btn-primary" type="button">
            Guardar
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "catalogoFormulario",
  props: {
    formProp: Boolean,
    productoEditar: Object
    // titulo: String,
    // categoria: Number,
    // precio: Number,
    // url: String,
    // descrip: String,
  },
  data() {
    return {
      form: false,
      productos: [],
      productoForm: {
        titulo: "",
        producto_cat: "",
        precio: "",
        imagen: "",
        img_alt: "",
      },
    };
  },
  computed: {
      formEditar() {
          return this.formProp ? false : true;
      },
  },

};
</script>

<style>
</style>