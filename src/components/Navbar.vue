<template lang="html">
  <nav id="nav" class="shadow-darkxl nav-bg-gradient relative h-16 w-full transition duration-500 ease-out z-20">
    <div class="w-section relative flex mx-auto my-0">
      <div class="nav-section left-side bg-accent-pink">
        <div class="w-24 ml-1 mt-1">
          <router-link to="/">
            <img src="../assets/ottos-logo.png" alt="Otto's Ice Cream" class=" cursor-pointer">
          </router-link>
        </div>
      </div>

      <div class="nav-section right-side right-0 bg-accent-blue">
        <div class="sm:hidden absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="toggleDropDown">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <div class="hidden absolute sm:flex sm:flex-row sm:justify-around sm:items-center w-72 h-full right-0 text-xl text-primary-text">
          <router-link to="/" class="nav-router-link">Home</router-link>

          <!-- <router-link to="/about" class="hover:bg-primary-bg font-bold p-2 rounded hover:shadow-md">About</router-link> -->

          <router-link to="/menu" class="nav-router-link">Menu</router-link>
        </div>
      </div>
    </div>
  </nav>

  <div class="drop-down sm:hidden absolute w-full z-10 bg-gray-200 text-lg transition-400  " ref="dropDown">
    <router-link to="/" class="drop-down-link" @click="toggleDropDown">Home</router-link>

    <!-- <router-link to="/about" class="hover:bg-white transition duration-200 block py-1" @click="toggleDropDown">About</router-link> -->

    <router-link to="/menu" class="drop-down-link" @click="toggleDropDown">Menu</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods: {
    toggleDropDown() {
      this.$refs.dropDown.classList.toggle('down')
    }
  }
}
</script>

<style lang="css">
  .left-side {
    clip-path: polygon(0 0, 73% 0, 100% 100%, 0% 100%);
  }

  .right-side {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 27% 100%);
  }

   .drop-down {
    top: -3rem;
  }

  .down {
    top: 4rem;
  }
</style>
