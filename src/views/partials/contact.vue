
<template>
  <div class="contact-container mb-3">
    <Computer />
    <a href="https://www.linkedin.com/in/rhaliburton/" target="_blank">
      <h1>{{content.title}}</h1>
    </a>
    <small>{{content.subtitle}}</small>
    <br />
    <v-btn color="black" class="ma-1" :href="`mailto:${content.email}`" small flat>
      <v-icon dark small class="mr-2">email</v-icon>
      {{content.email}}
    </v-btn>|
    <v-btn color="black" class="ma-1" :href="`tel:${content.phone}`" target="_blank" small flat>
      <v-icon dark small class="mr-2 mt-0">phone</v-icon>
      {{content.phone}}
    </v-btn>
  </div>
</template>

<script>
import Computer from '@/views/partials/computer';

export default {
  name: 'contact',
  components: {
    Computer,
  },
  data() {
    return {
      projectsActive: false,
    };
  },
  computed: {
    content() {
      return this.$store.getters.sidebar;
    },
  },
};
</script>
