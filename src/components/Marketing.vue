<template>
  <div class="px-2 grid gap-2">
    <h2 class="text-[1.714rem] text-[#636363] font-medium">Marketing</h2>
    <p class="w-[366px] text-[#636363] text-[1.1rem] font-normal mb-3">
      Aplica una estrategia de éxito. Empieza a vender con la ayuda de una
      Landingpage
    </p>
    <div class="mb-5">
      <button
      @click="goToIndex"
        class="w-[319px]  border text-[1rem] border-transparent rounded-md text-white font-medium py-2 px-4 inline-block border-[#20e404] bg-[#20e404] transition duration-150 hover:shadow-lg hover:shadow-[#71ff56] ease-in-out"
      >
        Crear página de ventas
      </button>
    </div>
    <div class="">
      <div class="flex px-2 justify-between">
        <label class="flex items-center text-[.75rem] text-[#6E6B7B]">
          Mostrar
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm custom-outline hover:border-[#41f823] rounded block w-full p-[.5rem] m-[.5rem]"
          >
            <option value="10" selected>10</option>

            <option value="25">25</option>
            <option value="30">50</option>
            <option value="100">100</option>
          </select>
          registro
        </label>
        <label class="flex items-center text-[.75rem] text-[#6E6B7B] gap-2">
          Buscar
          <input
            type="text"
            class="bg-white border border-gray-300 rounded-md text-gray-700 block w-full h-10 px-4 py-2 text-sm transition duration-150 custom-outline"
          />
        </label>
      </div>
      <div class="relative overflow-x-auto border shadow-sm sm:rounded">
        <table class="w-full text-sm text-left rtl:text-right text-[#6E6B7B]">
          <thead class="text-[#6E6B7B] uppercase bg-[#F8F8F8]">
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">Modulo</th>
              <th scope="col" class="px-6 py-3">Nombre clase</th>
              <th scope="col" class="px-6 py-3">Duracion clase</th>
              <th scope="col" class="px-6 py-3">Acción</th>
              
            </tr>
          </thead>
          <tbody>
            <tr class="text-xs text-[#6E6B7B] uppercase bg-[#F8F8F8] cursor-pointer hover:h-14 h-10 transition-all duration-200">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Alonzo Zegarra"</td>
              <td class="px-6 py-4">introduccion</td>
              <td class="px-6 py-4 text-[#0C8CE9] cursor-pointer">(25 min)</td>
              <td class="px-6 py-4 text-[#C0C4CC] text-[1.1rem]">...</td>
              
            </tr>
            <tr class="text-xs text-[#6E6B7B] uppercase bg-white hover:h-14 h-10 transition-all duration-200">
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4">Edward Yllanes</td>
              <td class="px-6 py-4">Programacion</td>
              <td class="px-6 py-4 text-[#0C8CE9] cursor-pointer">(30 min)</td>
              <td class="px-6 py-4 text-[#C0C4CC] text-[1rem]" >...</td>
             
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex px-2 justify-between">
        <label class="flex items-center text-[.75rem] text-[#6E6B7B]">
        
        </label>
        <label class="flex items-center text-[.75rem] text-[#6E6B7B] gap-2">
         
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marketing",
  methods: {
    goToIndex() {
      this.$router.push('/marketing/index');
    },
  },
};
</script>
<style>
.custom-outline:focus {
  outline: 0.05em solid #20e404; /* Ejemplo de contorno personalizado */
}
#countries {
  /* Utiliza el selector adecuado para el icono de selección del navegador */
  /* Por ejemplo, para cambiar el color en Chrome */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Define el fondo y el borde del icono de selección */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23b9b9c3' viewBox='0 0 20 20'%3e%3cpath d='M10 12l-5-5h10l-5 5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.3rem;
  background-position: right 0rem center;
  /* Ajusta el tamaño y el padding para el icono de selección */
  padding-right: 1.2rem; /* Ajusta según sea necesario */
}
</style>