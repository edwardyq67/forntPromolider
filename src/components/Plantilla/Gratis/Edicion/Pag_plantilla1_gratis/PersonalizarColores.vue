<template>
  <div class="flex justify-between gap-2">
    <div class="grid min-h-[600px] max-h-[600px] grid-cols-3 container  max-w-[700px] gap-4">
      <h2 class="text-[1.614rem] text-[#636363] font-medium col-span-3">
        Colores
      </h2>
      <p class="text-[1rem] text-[#636363] font-light col-span-3">
        Selecciona los colores que mejor representan a tu negocio:
      </p>

      <!-- Opciones de selección de colores -->
      <div class="flex gap-2 col-span-3 items-center h-16">
        <div
          class="border p-[3px] rounded flex justify-center items-center"
          :class="{
            'border-[#20e404]': selectedOption === 'plantilla1_gratis_personalizarColor',
            'border-[#636363]': selectedOption !== 'plantilla1_gratis_personalizarColor',
          }"
          @click="selectOption('plantilla1_gratis_personalizarColor')"
        >
          <input
            type="radio"
            name="plantilla"
            value="plantilla1_gratis_personalizarColor"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <div class="flex gap-2 cursor-pointer" @click="selectOption('plantilla1_gratis_personalizarColor')">
          <span class="w-16 h-16 bg-[#B96E8F] rounded-md"></span>
          <span class="w-16 h-16 bg-[#0D0421] rounded-md"></span>
          <span class="w-16 h-16 bg-[#7C466A] rounded-md"></span>
          <span class="w-16 h-16 bg-[#C297AA] rounded-md"></span>
          <span class="w-16 h-16 bg-[#5C3C63] rounded-md"></span>
          <span class="w-16 h-16 bg-[#ED7A68] rounded-md"></span>
        </div>
      </div>

      <div class="flex gap-2 col-span-3 items-center h-16">
        <div
          class="border p-[3px] rounded flex justify-center items-center"
          :class="{
            'border-[#20e404]': selectedOption === 'plantilla2_gratis_personalizarColor',
            'border-[#636363]': selectedOption !== 'plantilla2_gratis_personalizarColor',
          }"
          @click="selectOption('plantilla2_gratis_personalizarColor')"
        >
          <input
            type="radio"
            name="plantilla"
            value="plantilla2_gratis_personalizarColor"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <div class="flex gap-2 cursor-pointer" @click="selectOption('plantilla2_gratis_personalizarColor')">
          <span class="w-16 h-16 bg-[#3784DC] rounded-md"></span>
          <span class="w-16 h-16 bg-[#213A59] rounded-md"></span>
          <span class="w-16 h-16 bg-[#92B2D2] rounded-md"></span>
          <span class="w-16 h-16 bg-[#5E8AC3] rounded-md"></span>
          <span class="w-16 h-16 bg-[#758AA5] rounded-md"></span>
          <span class="w-16 h-16 bg-[#ED7A68] rounded-md"></span>
        </div>
      </div>

      <div class="flex gap-2 col-span-3 items-center h-16">
        <div
          class="border p-[3px] rounded flex justify-center items-center"
          :class="{
            'border-[#20e404]': selectedOption === 'plantilla3_gratis_personalizarColor',
            'border-[#636363]': selectedOption !== 'plantilla3_gratis_personalizarColor',
          }"
          @click="selectOption('plantilla3_gratis_personalizarColor')"
        >
          <input
            type="radio"
            name="plantilla"
            value="plantilla3_gratis_personalizarColor"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <div class="flex gap-2 cursor-pointer" @click="selectOption('plantilla3_gratis_personalizarColor')">
          <span class="w-16 h-16 bg-[#0691B0] rounded-md"></span>
          <span class="w-16 h-16 bg-[#CBE3E7] rounded-md"></span>
          <span class="w-16 h-16 bg-[#BFB7B5] rounded-md"></span>
          <span class="w-16 h-16 bg-[#E7E6E4] rounded-md"></span>
          <span class="w-16 h-16 bg-[#758AA5] rounded-md"></span>
          <span class="w-16 h-16 bg-[#908b92] rounded-md"></span>
        </div>
      </div>

      <div class="flex gap-2 col-span-3 items-center h-16">
        <div
          class="border p-[3px] rounded flex justify-center items-center"
          :class="{
            'border-[#20e404]': selectedOption === 'plantilla4_gratis_personalizarColor',
            'border-[#636363]': selectedOption !== 'plantilla4_gratis_personalizarColor',
          }"
          @click="selectOption('plantilla4_gratis_personalizarColor')"
        >
          <input
            type="radio"
            name="plantilla"
            value="plantilla4_gratis_personalizarColor"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <div class="flex gap-2 cursor-pointer" @click="selectOption('plantilla4_gratis_personalizarColor')">
          <span class="w-16 h-16 bg-[#103233] rounded-md"></span>
          <span class="w-16 h-16 bg-[#5C3337] rounded-md"></span>
          <span class="w-16 h-16 bg-[#CA9783] rounded-md"></span>
          <span class="w-16 h-16 bg-[#B16674] rounded-md"></span>
          <span class="w-16 h-16 bg-[#E0C0BB] rounded-md"></span>
          <span class="w-16 h-16 bg-[#ED7A68] rounded-md"></span>
        </div>
      </div>

      <!-- Botones de navegación -->
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
      <component :is="selectedComponent" />
    </div>
  </div>
</template>

<script>
import Plantilla1 from "../../PlantillaGratis/plantilla1/Plantilla1_gratis.vue";
import Plantilla2 from "../../PlantillaGratis/plantilla1/Plantilla2_gratis.vue";
import Plantilla3 from "../../PlantillaGratis/plantilla1/Plantilla3_gratis.vue";
import Plantilla4 from "../../PlantillaGratis/plantilla1/Plantilla4_gratis.vue";
import axios from 'axios';
export default {
  name: "PersonalizarColores",
 
  components: {
    Plantilla1,
    Plantilla2,
    Plantilla3,
    Plantilla4,
  },
  data() {
    return {
      selectedOption:"" ,
    };
  },
  computed: {
    selectedComponent() {
      switch (this.selectedOption) {
        case "plantilla1_gratis_personalizarColor":
          return "Plantilla1";
        case "plantilla2_gratis_personalizarColor":
          return "Plantilla2";
        case "plantilla3_gratis_personalizarColor":
          return "Plantilla3";
        case "plantilla4_gratis_personalizarColor":
          return "Plantilla4";
        default:
          return ""; // Manejar caso por defecto si es necesario
      }
    },
  },
   mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:8080/pagVenta/1").then((response) => {
        this.selectedOption = response.data.paletaColor;
      });
    },
    cambiarEstadoAtras() {
      this.$emit("set-estado-elegir-modelo", "uso");
      this.$emit("set-estado-completar-datos", "todavia");
    },
     cambiarEstado() {
    axios.put("http://localhost:8080/pagVenta/1", {
      paletaColor: this.selectedOption
    }).then((response) => {
      // Código a ejecutar cuando la solicitud PUT ha sido exitosa
      this.$emit("set-estado-personalizarColores", "noUso");
      this.$emit("set-estado-presentarProduct", "uso");
    }).catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al guardar los cambios:", error);
    });
  },
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>
<style scoped>
.styled-radio {
  @apply appearance-none w-4 h-4 bg-white border-none rounded-sm cursor-pointer;
}

.styled-radio:checked {
  @apply bg-[#20e404];
}

.styled-radio:checked::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 2px;
  position: absolute;
  top: 2px;
  left: 2px;
}
</style>
