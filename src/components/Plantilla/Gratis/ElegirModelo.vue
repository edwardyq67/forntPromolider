<template>
  <form class="grid grid-cols-3 container gap-4">
    <h2 class="text-[1.614rem] text-[#636363] font-medium col-span-3 mb-5">Modelo</h2>
    
    <!-- Opción 1 -->
    <div class="col-span-1">
      <label class="flex items-start">
        <div class="border p-[3px] rounded flex justify-center items-center" :class="{ 'border-[#20e404]': selectedOption === 'plantilla1_gratis' }">
          <input
            type="radio"
            name="plantilla"
            value="plantilla1_gratis"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <span class="ml-2 cursor-pointer">
          <img :src="plantilla1" alt="Plantilla 1">
        </span>
      </label>
    </div>
    
    <!-- Opción 2 -->
    <div class="col-span-1">
      <label class="flex items-start">
        <div class="border p-[3px] rounded flex justify-center items-center" :class="{ 'border-[#20e404]': selectedOption === 'plantilla2_gratis' }">
          <input
            type="radio"
            name="plantilla"
            value="plantilla2_gratis"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <span class="ml-2 cursor-pointer">
          <img :src="plantilla2" alt="Plantilla 2">
        </span>
      </label>
    </div>
    
    <!-- Opción 3 -->
    <div class="col-span-1">
      <label class="flex items-start">
        <div class="border p-[3px] rounded flex justify-center items-center" :class="{ 'border-[#20e404]': selectedOption === 'plantilla3_gratis' }">
          <input
            type="radio"
            name="plantilla"
            value="plantilla3_gratis"
            class="styled-radio"
            v-model="selectedOption"
          />
        </div>
        <span class="ml-2 cursor-pointer">
          <img :src="plantilla1" alt="Plantilla 3">
        </span>
      </label>
    </div>
    
    <!-- Botón de Continuar -->
    <div class="flex col-span-3 justify-end">
      <button
        @click="cambiarEstado"
        class="text-white bg-[#20e404] focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none flex gap-2 items-center"
      >
        Continuar <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </form>
</template>
<script>
import axios from 'axios';
import plantilla1 from "../../../imagen/plantilla.webp";
import plantilla2 from "../../../imagen/plantilla2.webp";

export default {
  name: "ElegirModelo",
  data() {
    return {
      selectedOption: '', // Deja esto vacío al principio
      plantilla1,
      plantilla2,
    };
  },
  mounted() {
    // Llama a fetchData() al montar el componente para obtener los datos iniciales
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:8080/modelo/1")
        .then(response => {
          this.selectedOption = response.data.Nombre_plantilla;
          
        })
        .catch(error => {
          console.error("Error al obtener datos:", error);
        });
        
       
    },
    cambiarEstado() {
      axios.put("http://localhost:8080/modelo/1",{
    Nombre_plantilla: this.selectedOption,
  })
      this.$emit("set-estado-elegir-modelo", "noUso");
      this.$emit("set-estado-completar-datos", "uso");
    },
  },
};
</script>
<style scoped>
.styled-radio {
  @apply appearance-none w-4 h-4 bg-white border border-none rounded-sm cursor-pointer;
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
