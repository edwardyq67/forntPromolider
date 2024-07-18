<template>
  <div class="px-2 grid gap-2">
    <h2 class="text-[1.714rem] text-[#636363] font-medium">Marketing</h2>
    <div
      class="grid grid-cols-2 break-words bg-white border border-gray-200 rounded-md shadow-sm flex-col mb-6 min-w-0 relative w-[450px] gap-4 p-2 items-start"
    >
      <div class="col-span-1 grid">
        <article class="flex justify-center">
          <button
            :class="{
              'text-white bg-[#20e404]': estadoElegirModelo === 'uso',
              'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
                estadoElegirModelo === 'noUso',
              'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
                estadoElegirModelo !== 'uso' && estadoElegirModelo !== 'noUso',
            }"
            class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Elegir Modelo
          </button>
        </article>
        <article class="">
          <p class="text-[#c6c6c8] text-[.9rem]">
          Define la plantilla ideal para tu página de ventas
        </p>
        </article>
        
      </div>
      <div class="col-span-1">
        <article class="flex justify-center">
            <button
          :class="{
            'text-white bg-[#20e404]': estadoCompletarDatos === 'uso',
            'bg-[#c6c6c8] text-white border rounded border-[#c6c6c8]':
              estadoCompletarDatos === 'noUso',
            'bg-white text-[#c6c6c8] border rounded border-[#c6c6c8]':
              estadoCompletarDatos !== 'uso' && estadoCompletarDatos !== 'noUso',
          }"
          class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Completar Datos
        </button>
        </article>
      <article class="">
        <p class="text-[#c6c6c8] text-[.9rem]">
          Responde preguntas sobre tu producto para que podamos crear el texto
          con AI
        </p>
      </article>
        
      </div>
    </div>

     <component
    :is="currentComponent"
    @set-estado-elegir-modelo="setEstadoElegirModelo"
    @set-estado-completar-datos="setEstadoCompletarDatos"
  />
  </div>
</template>

<script>
import ElegirModelo from "./Gratis/ElegirModelo.vue";
import CompletarDatos from "./Gratis/CompletarDatos.vue";

export default {
  name: "index",
  components: {
    ElegirModelo,
    CompletarDatos,
  },
  data() {
    return {
      estadoElegirModelo: "uso",
      estadoCompletarDatos: "todavia",
    };
  },
  computed: {
    currentComponent() {
      return this.estadoElegirModelo === "uso"
        ? "ElegirModelo"
        : "CompletarDatos";
    },
  },
  methods: {
    setEstadoElegirModelo(nuevoEstado) {
      this.estadoElegirModelo = nuevoEstado;
    },
    setEstadoCompletarDatos(nuevoEstado) {
      this.estadoCompletarDatos = nuevoEstado;
    },
  },
};
</script>

