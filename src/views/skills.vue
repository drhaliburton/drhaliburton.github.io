
<template>
  <div>
    <header>Summary</header>
    <section class="mt-4 mb-4">{{summary}}</section>

    <header>Skill Stack</header>
    <h4 class="mt-3">Languages & Frameworks</h4>
    <p>{{stack.languages}}</p>

    <h4 class="mt-3">Project Management</h4>
    <p>{{stack.management}}</p>

    <h4 class="mt-3">Additional Experience</h4>
    <p>{{stack.other}}</p>

    <h4 class="mt-3">Spoken Languages</h4>
    <p>{{stack.spoken}}</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  computed: {
    summary() {
      return this.$store.getters.summary;
    },
    stack() {
      return this.$store.getters.stack;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
