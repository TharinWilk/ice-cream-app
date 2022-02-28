<template lang="html">
  <section id="flavors">
    <div class="w-full h-full">
      <div class="flavor-background flex items-center justify-center h-72 bg-center bg-cover bg-no-repeat">
        <h3 class="ice-cream-text text-4xl font-bold ">Ice Cream Flavors</h3>
      </div>

      <div v-for="flavor in flavors" :key="flavor" class="bg-primary-bg">
        <p class="py-4 hover:bg-accent-blue transition duration-200 cursor-pointer" @click="toggleDescription($event)">{{ flavor.name }}</p>
      </div>
    </div>

    <div class="fixed inset-0 top-0 bg-black bg-opacity-50 transition duration-200 cursor-pointer" v-show="toggleModal" @click.self="closeModal">
      <div class="relative w-72 mx-auto mt-32 p-5 bg-white rounded-lg  cursor-text">
        <button class="absolute right-2 top-1 padding-1 text-sm text-gray-600 hover:text-black" @click="closeModal">X</button>
        <p class="border-b-2 border-accent-pink text-2xl">{{ clickedFlavor }}</p>
        <p class="mt-4">{{ FlavorDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      flavors: [ { name:'Bang! Latte Da (caffeinated)', description: 'Fantastic Wisconsin-made caffeinated espresso ice cream with fudge swirls and chocolate chunks.' },
       { name: 'Banana Cream Pie', description: 'Your favorite comfort food now on a cone! Banana ice cream churned with a marshmallow ripple and real Nilla Wafers.'},
       { name: 'Birthday Cake', description: 'Sweet birthday cake-flavored ice cream with swirls of blue frosting and bursts of colorful confetti sprinkles.'},
        { name: 'Black Cherry', description: 'Simply sweet black cherry ice cream with boat-loads of whole black cherries.'},
        { name:'Black Licorice', description: 'If you love the taste of black licorice, this is the ice cream for you!' },
        { name:'Blue Moon', description: 'Just like the milk in the bottom of a Fruit Loops bowl, this tasty ice cream has a sweet Fruit Loops taste and a wacky blue color.' },
        { name:'Blueberry Cheesecake', description: 'Delectably smooth cheesecake ice cream topped off with a tangy blueberry ripple and soft cheesecake chunks.' },
        { name:'Butter Pecan', description: 'Buttery pecan ice cream with boat-loads of crispy, lightly roasted and salted pecans.' },
        { name:'Coconut Almond Bliss', description: 'Tropical coconut-flavored ice cream with tons of melt-in-your-mouth chocolate flakes and crispy almond pieces.' },
        { name:'Cookie Dough', description: 'Sweet cookie-flavored ice cream with heaps of soft chocolate chip cookie dough chunks and tons of rich chocolate chips.' },
        { name:'Cotton Candy', description: 'Blue and pink cotton candy ice creams spun together for that whimsical carnival sensation!' }, { name:'Exhausted Parent', description: 'Bourbon-spiked espresso ice cream swirled with bittersweet chocolate chunks.' },
        { name:'Kitty Kitty Bang Bang', description: 'Irresistibly smooth cheesecake ice cream mixed with a sweet raspberry ripple, Oreo cookies and soft chocolate chunks.' },
        { name:'Lemon Poppy Seed', description: 'All-natural, fresh and bright lemon ice cream speckled with poppy seeds.' },
        { name:'Mackinac Island Fudge', description: 'Sweet vanilla ice cream with a melt-in-your-mouth chocolate fudge ripple and chunks of rich chocolate fudge.' },
        { name:'Mint Chip', description: 'Classic, fresh mint ice cream loaded with melt-in-your-mouth, rich chocolate flakes.' },
        { name:'Munchie Madness', description: 'Sweet cake batter ice cream swirled with a salted caramel ripple and brimming with Oreos, M&M pieces and peanut butter cups.' },
        { name:'Old Fashioned Vanilla', description: 'An award-winning and all-natural classic vanilla ice cream made with Wisconsin cream, cane sugar and pure vanilla.' },
        { name:'Peach', description: 'Fresh peach ice cream packed with real peaches to celebrate the warm spring weather, available for a limited time only.' },
        { name:'Peanut Butter Cup', description: 'Vanilla ice cream loaded with soft cookie dough chunks, rich chocolate flakes, and a thick peanut butter ripple.' },
        { name:'Raspberry Rhapsody', description: 'Black raspberry ice cream swirled with a sweet raspberry ripple and heavenly chocolate covered raspberry cups.' },
        { name:"Snap O' Lantern (pumpkin pie)", description: 'An award-winning combination of spicy pumpkin ice cream and heaps of gingersnap cookies, available for a limited time only.' },
        { name:'Strawberry', description: 'Award-winning and deliciously fresh strawberry ice cream loaded to the brim with real, whole strawberries.' },
        { name:'Strawberry Cheesecake', description: 'Cheesecake ice cream swirled with a strawberry ripple and loads of gooey cheesecake pieces.' },
        { name:'Superman', description: 'Meet your new kryptonite... Cherry, Blue Moon and Vanilla ice creams combine forces to bring you one super scoop!' },
        { name:'Turtle', description: 'Classic vanilla ice cream with swirls of rich chocolate fudge and gooey caramel, and bunches of lightly roasted and salted pecans.' },
        { name:'Ultimate Oreo', description: 'Scrumptious Oreo ice cream made with boat-loads of whole Oreos.' } ],
        clickedFlavor: null,
        FlavorDescription: null
    }
  },
  computed: {
    toggleModal() {
      if(this.clickedFlavor !== null) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    toggleDescription(el) {
      this.flavors.forEach(flavor => {
        if(flavor.name === el.target.textContent) {
          this.clickedFlavor = flavor.name
          this.FlavorDescription = flavor.description
        }
      });
    },
    closeModal() {
      if(this.toggleModal === true) {
        this.clickedFlavor = null
        this.FlavorDescription = null
      }
    }
  }
}
</script>


<style>
  .flavor-background {
    background-image: url('../assets/ice-cream-21.jpg');
  }

  .ice-cream-text {
    text-shadow: 0px 0px 10px #ffffff;
  }
</style>
