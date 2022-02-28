<template lang="html">
  <section class="p-4 bg-accent-pink">
    <div class="w-section sm:grid sm:grid-cols-5 sm:items-start sm:gap-10 w-72 sm:w-full mx-auto">
      <div class="sm:flex sm:justify-center sm:items-center sm:h-full">
        <div class="nav-logo">
          <router-link to="/">
            <img src="../assets/ottos-logo.png" alt="Otto's Ice Cream" class="w-24 mx-auto cursor-pointer">
          </router-link>
        </div>
      </div>

      <div class="sm:col-span-2 py-4">
        <h3 class="mx-auto border-b text-md">Navigation</h3>
        <div class="nav-links flex justify-around sm:flex-col sm:items-center w-full py-4">
          <router-link to="/" class="w-4/12">Homepage</router-link>
          <!-- <router-link to="/about" class="w-4/12">About</router-link> -->
          <router-link to="/menu" class="w-4/12">Menu</router-link>
        </div>
      </div>

      <div class="sm:col-span-2 py-4">
        <h3 class="border-b text-md">Contact</h3>
        <div class="mx-auto py-2 text-sm">
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <p>745 N Main St, Churubusco, IN 46723</p>
          </div>

          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p>http://Ottosicecream.com/</p>
          </div>

          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p>(260) 693-0770</p>
          </div>

          <div class="flex">
            <p>
              <a href="https://www.facebook.com/ottosicecream/">Our Facebook Page</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright ">
      <p>&#169; Copyright 2022</p>
    </div>
  </section>
</template>

<script>
export default {
  // components: {font-awesome-icon}
}
</script>
