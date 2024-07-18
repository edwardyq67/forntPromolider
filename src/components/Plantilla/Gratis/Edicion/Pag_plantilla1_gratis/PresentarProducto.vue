
<template>
  <div class="flex justify-between gap-2">
    <div class="grid min-h-[600px] max-h-[600px] grid-cols-3 container  max-w-[700px] gap-4">
      <h2 class="text-[1.614rem] text-[#636363] font-medium col-span-3">
        Colores
      </h2>
       <span class="grid gap-2 col-span-3 w-full">
         <label class="text-[1rem] text-[#636363] font-light">Título</label>
         <input
           class="border-[#c6c6c8] border p-2 rounded outline-none w-full"
           placeholder="Alonso: Conviértete en un experto en negocios digitales"
           type="text"
           v-model="titulo"
         />
       </span>    
       <span class="grid gap-2 col-span-3">
         <label class="text-[1rem] text-[#636363] font-light">Subtítulo</label>
         <textarea
           v-model="descripcion"
           class="border-[#c6c6c8] border p-2 rounded outline-none w-full h-[100px]"
           placeholder="Descubre cómo personas comunes están ganando dinero con nuevas oportunidades de emprendimiento."
         ></textarea>
       </span>
      <span class="grid gap-2 col-span-3">
         <label class="text-[1rem] text-[#636363] font-light">Foto</label>
         <div class="h-[200px] w-[200px] bg-[#C9CED4] flex justify-center items-center">
            <h6 class="text-[#5D5D5D] text-[.8em]">500x500</h6> 
         </div>
         <button class="flex justify-around w-[220px] border-[#5981E3] border items-center py-2 text-[#5981E3] rounded-md">
            <i class="fa-solid fa-upload"></i> Cargar
         </button>
       </span>
      <div class="flex justify-between col-span-3 h-14">
        <button
          @click="cambiarEstadoAtras"
          class="text-black bg-[#c6c6c8] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none flex gap-2 items-center"
        >
          <i class="fa-solid fa-arrow-left"></i> Atrás
        </button>
        <button
          @click="cambiarEstado"
          class="text-white bg-[#20e404] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none flex gap-2 items-center"
        >
          Continuar <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Renderizado condicional del componente seleccionado -->
    <div>
         <div v-if="plantilla === 'plantilla1_gratis_personalizarColor'"><Plantilla1 /></div>
         <div v-if="plantilla === 'plantilla2_gratis_personalizarColor'"><Plantilla2 /></div>
         <div v-if="plantilla === 'plantilla3_gratis_personalizarColor'"><Plantilla3 /></div>
         <div v-if="plantilla === 'plantilla4_gratis_personalizarColor'"><Plantilla4 /></div>
       </div>
  </div>
</template>
<script>
import axios from "axios";
import Plantilla1 from "../../PlantillaGratis/plantilla1/Plantilla1_gratis.vue";
import Plantilla2 from "../../PlantillaGratis/plantilla1/Plantilla2_gratis.vue";
import Plantilla3 from "../../PlantillaGratis/plantilla1/Plantilla3_gratis.vue";
import Plantilla4 from "../../PlantillaGratis/plantilla1/Plantilla4_gratis.vue";

export default {
  components: {
    Plantilla1,
    Plantilla2,
    Plantilla3,
    Plantilla4,
  },
  props: {
    selectedOption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      plantilla: "",
      titulo: "", // Agrega los datos para el título
      descripcion: "", // Agrega los datos para el subtítulo
    };
  },
  mounted() {
    axios.get("http://localhost:8080/pagVenta/1")
      .then((response) => {
        this.plantilla = response.data.paletaColor;
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
      axios.get("http://localhost:8080/modelo/routerPlantilla1_gratis_seccion1/1")
      .then((response) => {
        this.titulo = response.data.titulo;
        this.descripcion = response.data.descripcion;
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  },
  methods: {
    cambiarEstadoAtras() {
      this.$emit("set-estado-personalizarColores", "uso");
      this.$emit("set-estado-presentarProduct", "todavia");
    },
    cambiarEstado() {
    axios.put("http://localhost:8080/modelo/routerPlantilla1_gratis_seccion1/1", {
      titulo: this.titulo,
      descripcion: this.descripcion
    }).then((response) => {
      // Código a ejecutar cuando la solicitud PUT ha sido exitosa
      this.$emit("set-estado-presentarProduct", "noUso");
      this.$emit("set-estado-describirProducto", "uso");
    }).catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al guardar los cambios:", error);
    });
    },
  },
};
</script>

<style scoped>
/* Agrega estilos personalizados aquí si es necesario */
</style>
