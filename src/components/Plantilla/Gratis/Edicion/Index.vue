<template>
  <div class="px-2 grid gap-2 container">
    <h2 class="text-[1.714rem] text-[#636363] font-medium">Marketing</h2>
    <div
      class="grid grid-cols-5 break-words bg-white border border-gray-200 rounded-md shadow-sm flex-col mb-6 min-w-0 relative  gap-4 p-2 items-start"
    >
      <div class="col-span-1 grid">
        <article class="flex justify-center">
          <button
            :class="{
              'text-white bg-[#20e404]': estadoPersonalizarColores === 'uso',
              'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
                estadoPersonalizarColores === 'noUso',
              'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
                estadoPersonalizarColores !== 'uso' && estadoPersonalizarColores !== 'noUso',
            }"
            class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Personalizar colores
          </button>
        </article>
        <article class="">
          <p class="text-[#c6c6c8] text-[.9rem]">
          Elige los colores principales de tu página
        </p>
        </article>
        
      </div>
      <div class="col-span-1 grid">
        <article class="flex justify-center">
          <button
            :class="{
              'text-white bg-[#20e404]': estadoPresentarProduct === 'uso',
              'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
                estadoPresentarProduct === 'noUso',
              'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
                estadoPresentarProduct !== 'uso' && estadoPresentarProduct !== 'noUso',
            }"
            class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Presentar producto
          </button>
        </article>
        <article class="">
          <p class="text-[#c6c6c8] text-[.9rem]">
          Muestra tu producto para despertar interés en tu público
        </p>
        </article>
        
      </div>
      <div class="col-span-1 grid">
        <article class="flex justify-center">
          <button
            :class="{
              'text-white bg-[#20e404]': estadoDescribirProducto === 'uso',
              'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
                estadoDescribirProducto === 'noUso',
              'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
                estadoDescribirProducto !== 'uso' && estadoDescribirProducto !== 'noUso',
            }"
            class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Describir producto
          </button>
        </article>
        <article class="">
          <p class="text-[#c6c6c8] text-[.9rem]">
          Brinda más detalles sobre tu producto y lo que ofrece
        </p>
        </article>
        
      </div>
      <div class="col-span-1 grid">
        <article class="flex justify-center">
          <button
            :class="{
              'text-white bg-[#20e404]': estadoPresentarAutor === 'uso',
              'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
                estadoPresentarAutor === 'noUso',
              'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
                estadoPresentarAutor !== 'uso' && estadoPresentarAutor !== 'noUso',
            }"
            class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Presentar autor(a)
          </button>
        </article>
        <article class="">
          <p class="text-[#c6c6c8] text-[.9rem]">
          Describe a quien ha creado el producto
        </p>
        </article>
        
      </div>
      <div class="col-span-1">
        <article class="flex justify-center">
            <button
          :class="{
            'text-white bg-[#20e404]': estadoOfrecerProducto === 'uso',
            'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
              estadoOfrecerProducto === 'noUso',
            'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
              estadoOfrecerProducto !== 'uso' && estadoOfrecerProducto !== 'noUso',
          }"
          class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Ofrecer el producto
        </button>
        </article>
      <article class="">
        <p class="text-[#c6c6c8] text-[.9rem]">
          Define el precio y añade el link de la oferta
        </p>
      </article>
        
      </div>
    </div>
 <component
      v-if="plantilla == 'plantilla1_gratis'"
      :is="currentComponent"
      @set-estado-personalizarColores="setEstadoPersonalizarColores"
      @set-estado-presentarProduct="setEstadoPresentarProduct"
      @set-estado-describirProducto="setEstadoDescribirProducto"
      @set-estado-presentarAutor="setEstadoPresentarAutor"
      @set-estado-ofrecerProducto="setEstadoOfrecerProducto"
    />
  </div>
</template>

<script>
import axios from 'axios';
import PersonalizarColores from './Pag_plantilla1_gratis/PersonalizarColores.vue';
import PresentarProduct from './Pag_plantilla1_gratis/PresentarProducto.vue';
import DescribirProducto from './Pag_plantilla1_gratis/DescribirProducto.vue';
import PresentarAutor from './Pag_plantilla1_gratis/PresentarAutor.vue';
import OfrecerProducto from './Pag_plantilla1_gratis/OfrecerProducto.vue';
export default {
    name: 'pagVenta',
     components: {
    PersonalizarColores,
    PresentarProduct,
    DescribirProducto,
    PresentarAutor,
    OfrecerProducto,
  },
   data() {
    return {
      estadoPersonalizarColores: "uso",
      estadoPresentarProduct: "todavia",
      estadoDescribirProducto: "todavia",
      estadoPresentarAutor: "todavia",
      estadoOfrecerProducto: "todavia",
plantilla: '',
    };
  },
  mounted() {
    // Llama a fetchData() al montar el componente para obtener los datos iniciales
    this.fetchData();
  },
  computed: {
    currentComponent() {
      if (this.plantilla === 'plantilla1_gratis') {
        if (this.estadoPersonalizarColores === 'uso') return 'PersonalizarColores';
        if (this.estadoPresentarProduct === 'uso') return 'PresentarProduct';
        if (this.estadoDescribirProducto === 'uso') return 'DescribirProducto';
        if (this.estadoPresentarAutor === 'uso') return 'PresentarAutor';
        if (this.estadoOfrecerProducto === 'uso') return 'OfrecerProducto';
      } else if (this.plantilla === 'plantilla2_gratis') {
        // Lógica para plantilla2_gratis
      } else if (this.plantilla === 'plantilla3_gratis') {
        // Lógica para plantilla3_gratis
      }
      return null; // En caso de que la plantilla no esté definida o no haya coincidencias
    },
  },
    methods: {
    fetchData() {
      axios.get('http://localhost:8080/modelo/1')
        .then(response => {
          this.plantilla = response.data.Nombre_plantilla;
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    },
    // Métodos para manejar los eventos @set-estado-*
    setEstadoPersonalizarColores(estado) {
      this.estadoPersonalizarColores = estado;
    },
    setEstadoPresentarProduct(estado) {
      this.estadoPresentarProduct = estado;
    },
    setEstadoDescribirProducto(estado) {
      this.estadoDescribirProducto = estado;
    },
    setEstadoPresentarAutor(estado) {
      this.estadoPresentarAutor = estado;
    },
    setEstadoOfrecerProducto(estado) {
      this.estadoOfrecerProducto = estado;
    },
  },
}
</script>