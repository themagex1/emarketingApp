<script lang="js">

import { ref } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper";

import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const isMenuOpen = ref(false)

    const toggleMenu = () => {

      isMenuOpen.value = !isMenuOpen.value
      console.log(isMenuOpen.value)
    }

    return {
      isMenuOpen, toggleMenu,
      modules: [Navigation],
    }

  }
}
</script>

<template>
  <div class="bg-main text-text-color">
    <header
      class="fixed top-0 left-0 w-full md:px-[9%] px-[3%] bg-[url('./assets/14043.jpg')] bg-top flex justify-between items-center z-[100]">
      <a href="" class=" text-text-color font-bold cursor-default">
        <img src="./assets/Logo.webp" class="w-1/2 md:w-[32%]" alt="">
      </a>

      <i class='bx bx-menu text-[3.6rem] text-text-color md:hidden' :class="{ 'bx bx-x': isMenuOpen }"
        @click="toggleMenu"></i>
      <nav :class="{ active: isMenuOpen }" class="navbar ">
        <a href="#home" @click="toggleMenu"
          class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second link-animation">Home</a>
        <a href="#about" @click="toggleMenu"
          class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second link-animation">Features</a>
        
        <a href="#ourwork" @click="toggleMenu"
          class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second link-animation">About us</a>
        <a href="#contact" @click="toggleMenu"
          class="text-[1.7rem] text-text-color ml-16 transition-[0.3s] hover:text-second active:text-second link-animation">Contact
          us</a>
      </nav>

    </header>

    <section id="home"
      class="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen pt-40 md:px-[9%] px-[3%] pb-8 bg-opacity-10 bg-[url('./assets/14043.jpg')] bg-top ">
      <div class="home-content mr-[10%] ">
        <p class="text-[1.7rem] font-semibold mb-4 italic">
          
        </p>
        <h1 class="text-[5.6rem] font-extrabold">
          <div>
            <i class='bx bxs-chevrons-right'></i>
            Test your CPU
          </div>
          <div>
            in a moment <i class='bx bxs-chevrons-left'></i>
          </div>
        </h1>
        <p class="text-[1.7rem] font-semibold mt-8 italic">
          Push your limits with FannMark - the product that will help you achieve new levels of performance and success!
        </p>


        <div class="flex mt-16">
          <a href="https://github.com/themagex1/emarketingApp" class="text-[1.8rem] mx-auto md:mx-0 md:mr-[8rem] link-animation">CHECK PRODUCT<i
              class='bx bx-right-arrow ml-4'></i></a>
          <a href="" class="text-[1.8rem] link-animation">WATCH VIDEO <i class='bx bxs-videos ml-4'></i></a>

        </div>

      </div>
      
      <div class="flex">
        
        <swiper :navigation="true" :modules="modules" class="mySwiper w-screen md:w-[45vw] my-auto ">
          <swiper-slide>
            <img class="object-fill w-full " src="./assets/screen-main.png" alt="image slide 1" />
          </swiper-slide>
          <swiper-slide>
            <img class="object-fill w-full " src="./assets/screen.png" alt="image slide 1" />
          </swiper-slide>

          <swiper-slide>
            <img class="object-fill mx-auto md:h-[23vw]" src="./assets/screen-result.png" alt="image slide 2" />
          </swiper-slide>
          <swiper-slide>
            <img class="object-fill w-full" src="./assets/screen-stress.png" alt="image slide 3" />
          </swiper-slide>
        </swiper>

      </div>
    </section>

    <section id="about"
      class="min-h-screen text-white pt-40 px-[9%] pb-8 flex flex-col-reverse md:flex-row justify-center items-center gap-8 bg-[url('./assets/background.jpg')] bg-right">
      <div>
        <img src="./assets/algo.webp" alt="" class="md:w-[45vw]">
      </div>

      <div class="ml-[10%]">
        <h1 class="text-[5.6rem] font-extrabold">
          Intricate algorithm 

        </h1>
        <p class="text-[1.8rem] italic w-[50rem]">
          Our application uses a Fannkuch-Redux algorithm to test the computing power of your CPU in the best way possible.
        </p>
        
      </div>
    </section>

    <section id=""
      class="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen pt-40 md:px-[9%] px-[3%] pb-8 bg-opacity-10 bg-[url('./assets/14043.jpg')] bg-top">
      <div class="mr-[10%] ml-16">
        <h1 class="text-[5.6rem] font-extrabold">
          Test your limits
        </h1>
        <p class="text-[1.8rem] font-bold w-[50rem] italic">
          If you're looking for a reliable and accurate CPU stress test tool, look no further than our benchmarking application. Try it out today and see how it can help you take your system's performance to the next level.
        </p>
        
      </div>
      <div>
        <img src="./assets/fire.webp" alt="" class="md:w-[25vw]">
      </div>
    </section>
    <section id="ourwork"
      class="min-h-screen pt-40 px-[9%] pb-8 flex flex-col justify-center items-center gap-8 bg-[url('./assets/background.jpg')] bg-right">
      <h2 class="text-[4.5rem] text-white font-bold mb-16">
        <i class='bx bxs-right-arrow mr-4'></i>Our Team<i class='bx bxs-left-arrow ml-4' ></i>
      </h2>

      <div class="services-container flex justify-center items-center flex-wrap gap-8">
        <div class="services-box">
          <img src="./assets/DR.webp" alt="" class=" rounded-full w-1/2 mx-auto mb-4">
          <i class='bx bxs-briefcase'></i>
          <h3>Damian Rosiak</h3>
          <h4 class="text-[2.2rem] font-semibold italic">
            CEO
          </h4>
          <p>"Our CEO is a visionary leader with a wealth of experience in the technology industry. With a deep
            understanding of the importance of benchmarking and performance optimization, our CEO is committed to
            delivering the best possible solutions to our clients"
          </p>
        </div>
        <div class="services-box">
          <img src="./assets/SK.webp" alt="" class=" rounded-full w-1/2 mx-auto mb-4">
          <i class='bx bx-dollar'></i>
          <h3>Stanisław Kowalczyk</h3>
          <h4 class="text-[2.2rem] font-semibold italic">
            CFO
          </h4>
          <p>"Our CFO is a strategic thinker who is skilled at forecasting and managing financial risk. They are highly
            analytical and have a keen eye for detail, enabling them to provide accurate and timely financial insights to
            support business decisions and drive our company's financial success."</p>
        </div>
        <div class="services-box">
          <img src="./assets/GM.webp" alt="" class=" rounded-full w-1/2 mx-auto mb-4">
          <i class='bx bxs-user-voice'></i>
          <h3>Grzegorz Matczak</h3>
          <h4 class="text-[2.2rem] font-semibold italic">
            COO
          </h4>
          <p class="">"As a natural leader, our COO fosters a culture of accountability, collaboration, and continuous improvement.
            They believe that by empowering our employees and providing them with the tools and resources they need to
            succeed, we can achieve great things together."</p>
        </div>
      </div>
      <div class="text-[1.9rem] font-semibold mb-8 italic text-white">
        <div class="text-center">
          <i class='bx bx-target-lock mr-2 mb-4'></i>Our goal<i class='bx bx-target-lock ml-2'></i>
        </div>
        "Our company is dedicated to providing reliable and accurate benchmarking solutions to help businesses and individuals measure the performance of their devices, applications, and systems."
      </div>
    </section>

    
    <section id="contact" class="min-h-screen pt-40 px-[9%] pb-8 flex justify-center items-center gap-8 bg-[url('./assets/14043.jpg')] bg-top">
      <div class="flex flex-col">
        <h1 class="text-[5.6rem] font-extrabold mb-8">
          Contact us
        </h1>
        <form action="" class="flex flex-col">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-[1.8rem] text-main font-semibold">Your name</label>
            <input type="email" id="name" class="bg-gray-50 text-[1.8rem] border border-gray-300 rounded-lg focus:ring-main focus:border-main block w-[50rem] p-2.5 dark:bg-main dark:border-second dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." required>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-[1.8rem] text-main font-semibold">Your email</label>
            <input type="email" id="email" class="bg-gray-50 text-[1.8rem] border border-gray-300 rounded-lg focus:ring-main focus:border-main block w-[50rem] p-2.5 dark:bg-main dark:border-second dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@name.com" required>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-[1.8rem] text-main font-semibold">Your message</label>
            <textarea type="email" id="email" class="bg-gray-50 text-[1.8rem] border h-[20rem] border-gray-300 rounded-lg focus:ring-main focus:border-main block w-[50rem] p-2.5 dark:bg-main dark:border-second dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..." required></textarea>
          </div>
          <a href="" class="text-[2.5rem] mx-auto mt-8 link-animation">SEND<i class='bx bxs-send ml-4' ></i></a>
            
        </form>
        

      </div>
    </section>

    <section>

    </section>
    <footer class="flex justify-between items-center flex-wrap p-8 md:py-8 md:px-[9%]">
      <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex flex-col mb-4 sm:mb-0">
                
                <div class="text-white text-[1.3rem]">email: info@fannmark.pl</div>
                <div class="text-white text-[1.3rem]">tel: +48 22 506 93 00</div>
                <div class="text-white text-[1.3rem]">adres: Al. Jana Pawła II 27, Warszawa, Centrum</div>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-[1.5rem] font-medium text-gray-500 sm:mb-0 text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-[1.5rem] sm:text-center text-white">© 2023 <a href="" class="hover:underline">FannMark</a>. All Rights Reserved.</span>
    </div>
    </footer>


  </div>
</template>

<style scoped></style>
