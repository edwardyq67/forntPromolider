<template>
  <div>
    <section class="px-2 md:mx-0 bg-[#0D0421]">
      <div class="grid grid-cols-2 container mx-auto items-center gap-10 py-10">
        <div
          class="relative rounded-full w-[350px] h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
            alt=""
          />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <div class="grid gap-5 text-start">
            <h1 class="text-6xl font-bold  text-white">{{titulo}}</h1>
            <p class="text-lg text-center md:text-start text-white">
             {{descripcion}}
            </p>
            <div>
              <button
                type="button"
                class="text-white font-semibold min-w-[300px] outline-none hover:bg-opacity-70 rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none bg-[#B96E8F]"
              >
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-2 md:mx-0 bg-[#7C466A] py-10">
      <div class="grid container mx-auto justify-center items-center gap-10 py-10">
        <h2 class="text-center border-b-2 px-10 pb-3 text-white text-6xl font-bold" style="border-bottom-color:#B96E8F;">
          SOBRE EL CURSO
        </h2>
        <div class="grid gap-2 font-medium">
          <div class="rounded-md flex gap-2 py-3 px-4 items-center" style="background:#0D0421;">
            <i class="fa-solid fa-plus text-white"></i>
            <h4 class="text-white">
              Módulo 1: Título del módulo 1
            </h4>
          </div>
          <div class="rounded-md flex gap-2 py-3 px-4 items-center" style="background:#0D0421;">
            <i class="fa-solid fa-plus text-white"></i>
            <h4 class="text-white">
              Módulo 2: Título del módulo 2
            </h4>
          </div>
          <div class="rounded-md flex gap-2 py-3 px-4 items-center" style="background:#0D0421;">
            <i class="fa-solid fa-plus text-white"></i>
            <h4 class="text-white">
              Módulo 3: Título del módulo 3
            </h4>
          </div>
          <div class="rounded-md flex gap-2 py-3 px-4 items-center" style="background:#0D0421;">
            <i class="fa-solid fa-plus text-white"></i>
            <h4 class="text-white">
              Módulo 4: Título del módulo 4
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section class="px-2 md:mx-0 bg-[#0D0421]">
      <div class="grid container mx-auto justify-center items-center gap-5 py-10">
        <h2 class="text-center text-4xl font-semibold text-[#B96E8F]">
          ¡APROVECHA ESTA OFERTA!
        </h2>
        <i class="mx-auto text-4xl fa-solid fa-trophy" style="color:#B96E8F;"></i>
        <div class="grid gap-2 font-medium mx-auto">
          <div>
            <button
              type="button"
              class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-semibold rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none bg-[#B96E8F]"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="px-2 md:mx-0 bg-[#7C466A] py-10">
      <div class="grid container grid-cols-2 mx-auto justify-center items-center gap-10 py-10">
        <div class="grid col-span-2 lg:col-span-1">
          <h2 class="text-center border-y-2 py-5 px-10 text-white text-6xl font-bold" style="border-top-color:white;border-bottom-color:white;">
            Nombre del <br /> Creador
          </h2>
          <p class="text-white lg:text-start text-center py-5 lg:py-10">
            Breve descripción del nombre del creador del curso que se va a ofertar con datos relevantes
          </p>
        </div>
        <div class="grid col-span-2 lg:col-span-1">
          <div class="relative rounded-md sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1 lg:ml-10" style="color:#C297AA;">
            <img
              class="absolute inset-0 w-full h-full object-cover"
              src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="px-2 md:mx-0 bg-[#0D0421]">
      <div class="grid container mx-auto items-center gap-5 py-20">
        <div class="text-center flex gap-5 justify-center items-end">
          <i class="fa-solid fa-star text-5xl" style="color:#ffff;"></i>
          <i class="fa-solid fa-star text-7xl" style="color:#ffff;"></i>
          <i class="fa-solid fa-star text-5xl" style="color:#ffff;"></i>
        </div>
        <h2 class="text-center text-4xl lg:text-6xl font-bold mb-5" style="color:#ffff;">
          G A R A N T Í A
        </h2>
        <div class="text-center border-y-2 py-5 px-10 grid gap-3" style="border-bottom-color:white;border-top-color:white;">
          <h2 class="text-4xl font-semibold" style="color:#ffff;">
            Garantía incondicional de 7 días
          </h2>
          <p class="text-xl" style="color:#ffff;">
            Tendrás tu dinero de vuelta sin preguntas hasta 7 días después de tu compra
          </p>
        </div>
      </div>
    </section>
    <section class="px-2 md:mx-0 bg-[#C297AA]">
      <div class="grid container mx-auto items-center gap-5 py-10 text-center">
        <div class="text-center flex gap-5 justify-center items-end text-4xl" style="color:#B96E8F;">
          <i class="fa-solid fa-mobile-screen"></i>
          <i class="fa-solid fa-laptop"></i>
          <i class="fa-solid fa-tablet-screen-button"></i>
        </div>
        <h4 class="text-xl" style="color:#B96E8F;">
          Accede desde cualquier dispositivo
        </h4>
        <div class="flex mx-auto">
          <div class="grid gap-4 py-8 px-4 lg:px-14 rounded-sm" style="background:#5C3C63;">
            <h6 class="text-white text-sm">Por apertura</h6>
            <h3 class="text-white text-7xl font-semibold">$49,99</h3>
            <div>
              <button
                type="button"
                class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none bg-[#B96E8F]"
              >
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Preguntas Frecuentes -->
    <section class="px-2 md:mx-0 bg-[#7C466A]">
      <div class="grid container mx-auto items-center gap-5 py-20">
        <h4 class="text-center text-4xl lg:text-6xl font-bold mb-5 pb-6 border-b-2 mx-auto" style="color:#B96E8F;">
          PREGUNTAS FRECUENTES
        </h4>
        <div class="grid gap-5">
          <div class="flex gap-5 items-center">
            <i class="fa-solid fa-question-circle text-5xl" style="color:#ffff;"></i>
            <h4 class="text-2xl font-semibold" style="color:#ffff;">
              ¿Puedo acceder al contenido desde cualquier lugar?
            </h4>
          </div>
          <p class="text-white text-lg">
            ¡Sí! El contenido está disponible desde cualquier parte del mundo.
          </p>
          <div class="flex gap-5 items-center">
            <i class="fa-solid fa-question-circle text-5xl" style="color:#ffff;"></i>
            <h4 class="text-2xl font-semibold" style="color:#ffff;">
              ¿Cuánto tiempo tengo para terminar el curso?
            </h4>
          </div>
          <p class="text-white text-lg">
            ¡El curso está disponible para siempre! Puedes hacerlo a tu propio ritmo.
          </p>
          <div class="flex gap-5 items-center">
            <i class="fa-solid fa-question-circle text-5xl" style="color:#ffff;"></i>
            <h4 class="text-2xl font-semibold" style="color:#ffff;">
              ¿Cómo puedo solicitar un reembolso si no estoy satisfecho?
            </h4>
          </div>
          <p class="text-white text-lg">
            Si no estás satisfecho en los primeros 7 días, te devolveremos tu dinero sin preguntas.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="css">

.accordion-content {
      display: none;
      transition: max-height 0.2s ease-out;
    }
    .accordion-content.active {
      display: block;
    }
</style>
<script>
import axios from 'axios'

export default {
    data() {
    return {
      plantilla: "",
      titulo: "", // Agrega los datos para el título
      descripcion: "", // Agrega los datos para el subtítulo
    };
  },
   mounted() {
    axios.get("http://localhost:8080/modelo/routerPlantilla1_gratis_seccion1/1")
    .then((response) => {
        this.titulo = response.data.titulo;
        this.descripcion = response.data.descripcion;
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
   }
}
</script>