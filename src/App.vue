<script lang="js">

import { ref } from 'vue'
export default {
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      
      isMenuOpen.value = !isMenuOpen.value
      console.log(isMenuOpen.value)
    }

    return {
      isMenuOpen, toggleMenu
    }

  }
}
</script>

<template>
  <div class="bg-main text-text-color">
    <header class="fixed top-0 left-0 w-full py-8 md:px-[9%] px-[3%] bg-white flex justify-between items-center z-[100]">
      <a href="" class="text-[2.5rem] text-text-color font-bold cursor-default">
        Logo
      </a>

      <i class='bx bx-menu text-[3.6rem] text-text-color md:hidden' :class="{'bx bx-x': isMenuOpen}" @click="toggleMenu"></i>
      <nav :class="{ active: isMenuOpen }" class="navbar">
        <a href="#home" @click="toggleMenu" class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second">Home</a>
        <a href="#about" @click="toggleMenu" class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second">About</a>
        <a href="#services" @click="toggleMenu" class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second">Services</a>
        <a href="#ourwork" @click="toggleMenu" class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second">Our Work</a>
        <a href="#contact" @click="toggleMenu" class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second">Contact us</a>
      </nav>

    </header>

    <section id="home" class="flex flex-col-reverse md:flex-row bg-white justify-center items-center min-h-screen pt-40 md:px-[9%] px-[3%] pb-8">
      <div class="home-content mr-[10%]">
        <p class="text-[1.6rem]">
          Our goal
        </p>
        <h1 class="text-[5.6rem] font-bold">
          <div>
            Better products
          </div>
          <div>
            for your users
          </div>
        </h1>
        <p class="text-[1.6rem]">
          We help our clients realize their most important business goals
        </p>
        <a href="" class=" inline-block py-4 px-[2.8rem] bg-second rounded-[4rem] text-[1.6rem] text-text-color font-bold mt-[3rem] ml-[1.5rem] mr-[3rem]">GET IN TOUCH</a>
        <a href="" class="inline-block py-4 px-[2.8rem] rounded-[4rem] text-[1.6rem] text-text-color font-bold mt-[3rem] ml-[1.5rem] mr-[3rem]">WATCH VIDEO</a>

      </div>
      <div class="">
        <img src="./assets/zdjecie.jpg" alt="" class="w-[45vw]">
      </div>
    </section>

    <section id="about" class="min-h-screen pt-40 px-[9%] pb-8 flex flex-col-reverse md:flex-row justify-center items-center gap-8 ">
      <div>
        <img src="./assets/zdjecie.jpg" alt="" class="w-[45vw]">
      </div>

      <div class="ml-[10%]">
        <p class="text-[1.6rem]">
          WE HELP WITH
        </p>
        <h1 class="text-[5.6rem] font-bold">
          <div>Building</div>
          <div>
            better
          </div>
          <div>
            solutions
          </div>
        </h1>
        <a href="" class="inline-block py-4 px-[2.8rem] bg-second rounded-[4rem] text-[1.6rem] text-text-color font-bold mt-[3rem] ml-[1.5rem] mr-[3rem]">
          OUR SERVICES
        </a>
        
      </div>
    </section>

    <section id="services" class="min-h-screen pt-40 bg-white flex flex-col-reverse md:flex-row items-center justify-center">
      <div class="mr-[10%]">
        <h1 class="text-[5.6rem] font-bold">
          <div>
            Design solutions
          </div>
          <div>
            to improve products
          </div>
        </h1>
        <p class="text-[1.6rem] w-[50rem]">
          We help our clients make realize their most important business goals.
          We help our clients make realize their most important business goals. 
        </p>
        <a href="" class="inline-block py-4 px-[2.8rem] bg-second rounded-[4rem] text-[1.6rem] text-text-color font-bold mt-[3rem] ml-[1.5rem] mr-[3rem]">READ MORE</a>
      </div>
      <div>
        <img src="./assets/zdjecie.jpg" alt="" class="w-[45vw]">
      </div>
    </section>

    <section id="ourwork" class="min-h-screen pt-40 px-[9%] pb-8 flex flex-col-reverse md:flex-row justify-center items-center gap-8">
      <div>
        <img src="./assets/zdjecie.jpg" alt="" class="w-[45vw]">
      </div>

      <div class="ml-[10%]">
        <h1 class="text-[5.6rem] font-bold">
          <div>
            Develop powerful
          </div>
          <div>
            apps for your business
          </div>
          
        </h1>
        <p class="text-[1.6rem] w-[50rem]">
          We help our clients make realize their most important business goals.
          We help our clients make realize their most important business goals.
          We help our clients make realize their most important business goals. 
        </p>
        <a href="" class="inline-block py-4 px-[2.8rem] bg-second rounded-[4rem] text-[1.6rem] text-text-color font-bold mt-[3rem] ml-[1.5rem] mr-[3rem]">
          READ MORE
        </a>
      </div>
    </section>
    <section id="contact" class="min-h-screen pt-40 px-[9%] pb-8 flex justify-center items-center gap-8 bg-white">
      <div>
        <h1 class="text-[5.6rem]">
          Contact
        </h1>

      </div>
    </section>

    <footer class="flex justify-between items-center flex-wrap p-8 md:py-8 md:px-[9%]">
      <div>
        <p class="text-[1.6rem] text-second">
          Footer
        </p>
      </div>
      <div>
        <a href="#home"></a>
      </div>
    </footer>


  </div>
</template>

<style scoped>
  .home-content h3:nth-of-type(2) {
    margin-bottom: 2rem;
  }
</style>
