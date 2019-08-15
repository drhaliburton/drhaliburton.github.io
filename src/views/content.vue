
<template>
  <v-container fluid>
    <Contact />
    <Skills />
    <div class="mt-3">
      <header>Education</header>
      <span v-for="(item, index) in education" :key="index">
        <Card :item="item" />
        <v-divider v-if="index !== education.length - 1" class="mt-3" />
      </span>
    </div>
    <div class="mt-3">
      <header>Experience</header>
      <span v-for="(item, index) in experience" :key="index">
        <Card :item="item" />
        <v-divider v-if="index !== experience.length - 1" class="mt-3" />
      </span>
    </div>
  </v-container>
</template>

<script>
import Contact from '@/views/partials/contact.vue';
import Computer from '@/views/partials/computer.vue';
import Skills from '@/views/skills.vue';
import Card from '@/views/partials/summary-card.vue';

export default {
  name: 'Content',
  components: {
    Contact,
    Computer,
    Skills,
    Card,
  },
  computed: {
    summary() {
      return this.$store.getters.summary;
    },
    stack() {
      return this.$store.getters.stack;
    },
    education() {
      return this.$store.getters.education;
    },
    experience() {
      return this.$store.getters.experience;
    },
  },
};
</script>
