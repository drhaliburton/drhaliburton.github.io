
<template>
  <v-navigation-drawer class="sidebar pl-3 pr-4" mobile-break-point="850" app>
    <computer />
    <a href="https://www.linkedin.com/in/rhaliburton/" target="_blank">
      <h1>{{content.title}}</h1>
    </a>
    <h3 class="mb-3">{{content.subtitle}}</h3>
    <v-btn color="black" class="ma-1" :href="`mailto:${content.email}`" small flat>
      <v-icon dark small class="mr-2">email</v-icon>
      {{content.email}}
    </v-btn>
    <br />
    <v-btn color="black" class="ma-1" :href="`tel:${content.phone}`" target="_blank" small flat>
      <v-icon dark small class="mr-2 mt-0">phone</v-icon>
      {{content.phone}}
    </v-btn>
    <br />
    <v-btn
      color="black"
      class="ma-1"
      :href="`http://github.com/${content.github}`"
      target="_blank"
      small
      flat
    >
      <v-icon dark small class="mr-2">computer</v-icon>
      {{content.github}}
    </v-btn>
    <br />
    <v-btn color="black" class="ma-1" small flat @click="savePdf()">
      <v-icon dark small class="mr-2">archive</v-icon>download .pdf
    </v-btn>
    <br />
    <header class="mt-4">Experience</header>
    <ul class="mt-3">
      <li v-for="(item, index) in content.experience" :key="index">{{item}}</li>
    </ul>
  </v-navigation-drawer>
</template>

<script>
import computer from '@/views/partials/computer.vue';

export default {
  name: 'Sidebar',
  components: {
    computer,
  },
  computed: {
    image() {
      return 'comp1.png';
    },
    content() {
      return this.$store.getters.sidebar;
    },
  },
  methods: {
    savePdf() {
      window.print();
    },
  },
};
</script>

<style scoped>
header {
  font-size: 16px;
}
</style>
