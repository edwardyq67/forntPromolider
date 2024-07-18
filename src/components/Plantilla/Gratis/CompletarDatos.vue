<template>
  <form class="grid grid-cols-3 container  max-w-[700px]  gap-4 ">
    <h2 class="text-[1.614rem] text-[#636363] font-medium col-span-3">
      Producto autor
    </h2>
    <p class="text-[1rem] text-[#636363] font-light col-span-3">
      Responde preguntas sobre tu producto para que podamos crear el texto con
      AI
    </p>
    <span class="grid gap-2 col-span-3 w-full">
      <label class="text-[1rem] text-[#636363] font-light col-span-3"
        >¿Cuál es el nombre de tu producto?</label
      >
      <input
        class="border-[#c6c6c8] border p-2 rounded outline-none w-[700px]"
        placeholder="Nombre del producto"
        type="text"
        v-model="Nombre_producto"
      />
    </span>
    <span class="grid gap-2 col-span-3 ">
      <label class="text-[1rem] text-[#636363] font-light col-span-3"
        >Describe las ventajas que tu producto ofrece y cómo funciona.</label
      >
      <textarea v-model="Description"  class="border-[#c6c6c8] border p-2 rounded outline-none w-[700px] h-[100px]" placeholder="Cuenta un poco sobre cómo funciona tu producto, qué ofrece y qué problemas resuelve. " name="" id="" ></textarea>
    </span>
    <span class="grid gap-2 col-span-3">
      <label class="text-[1rem] text-[#636363] font-light col-span-3"
        >Cuenta un poco sobre el autor del producto.</label
      >
      <textarea v-model="Nombre_Autor"  class="border-[#c6c6c8] border p-2 rounded outline-none w-[700px] h-[100px]" placeholder="Escribe sobre quien ha creado el producto. Habla sobre la trayectoria profesional y los logros del autor. " name="" id="" ></textarea>
    </span>
    <div class="flex justify-between col-span-3 ">
      <button
        @click="cambiarEstadoAtras"
        class="text-black bg-[#c6c6c8] focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none flex gap-2 items-center"
      >
        <i class="fa-solid fa-arrow-left"></i> Atras 
      </button>
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
export default {
  name: "CompletarDatos",
  data() {
    return {
      Nombre_producto: '', // Deja esto vacío al principio
      Description:'',
      Nombre_Autor:'',
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
          this.Nombre_producto = response.data.Nombre_producto; // Establece el nombre del producto basado en la respuesta del servidor
          this.Description = response.data.Description; // Establece la descripción basada en la respuesta del servidor
          this.Nombre_Autor = response.data.Nombre_Autor; // Establece el nombre del autor basado en la respuesta del servidor
          console.log("Datos obtenidos:", response.data);
        })
        .catch(error => {
          console.error("Error al obtener datos:", error);
        });
    },
    cambiarEstadoAtras() {
      this.$emit("set-estado-elegir-modelo", "uso");
      this.$emit("set-estado-completar-datos", "todavia");
    },
    cambiarEstado() {
      axios.put("http://localhost:8080/modelo/1",{
    Nombre_producto: this.Nombre_producto,
    Description: this.Description,
    Nombre_Autor: this.Nombre_Autor,
  })
    this.$router.push('/marketing/pagVenta');
    },
  },
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
