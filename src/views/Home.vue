<template>
  <article class="w-section mx-auto bg-primary-bg">
    <section id="banner" class="relative">
      <div class="banner-bg bg-custom-banner w-full h-64"></div>

      <div class="home-card mx-4 top-48 border-accent-blue">
        <p class="py-4 text-2xl">Otto's Ice Cream</p>
        <p class="pb-4">Come swing on by our retro ice cream shop! We offer: 50 plus flavors of hand dipped SUPER PREMIUM ice cream from Wisconsin, homemade waffle cones, coney dogs, shakes, malts, and sundaes.  We hope to see you soon!</p>
      </div>
    </section>

    <section class="">
      <iframe class="sm:hidden mx-auto mt-48" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fottosicecream%2F&tabs=timeline%2C%20events%2C%20messages&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

      <iframe class="hidden sm:block mx-auto my-24" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fottosicecream%2F&tabs=timeline%2C%20events%2C%20messages&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </section>

    <section class="relative mt-24 mb-32">
      <div class="inset-x-0 mx-4 rounded">
        <div class="flavor-banner-bg bg-custom-banner inset-x-0 h-72 rounded-xl">
        </div>
      </div>

      <div class="home-card mx-8 top-64 border-accent-pink">
        <router-link to="/menu">
          <p class="py-4 text-2xl">Try Our Flavors</p>
          <p class="pb-4">Over 50 flavors of Super Premium ice cream from Wisconsin!</p>
        </router-link>
      </div>
    </section>

    <section class="flex items-center justify-center pb-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12001.254899382458!2d-85.33217346397177!3d41.23672366845059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816757bcd620503%3A0x2c8018adf5390f68!2sOtto%E2%80%99s%20Ice%20Cream-%20Seasonal%20with%20Pop%20Up%20Openings*21%20SEE%20OUR%20fb%20page%20for%20Updated%20Info*21!5e0!3m2!1sen!2sus!4v1645387805890!5m2!1sen!2sus" class="w-full px-4 h-96" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.banner-bg {
  background-image: url('../assets/ice-cream-2.jpg');
}

.flavor-banner-bg {
  background-image: url('../assets/ice-cream-25.jpg');
}
</style>
