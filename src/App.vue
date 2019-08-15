<template>
  <v-app id="app">
    <v-content ref="contentContainer">
      <Sidebar />
      <Content />
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/views/sidebar';
import Content from '@/views/content';

export default {
  name: 'app',
  components: {
    Sidebar,
    Content,
  },
  data() {
    return {
      image: 1,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      const scrollPos = Math.round(
        (window.scrollY / this.$refs.contentContainer.$el.clientHeight) * 8 + 1
      );
      if (scrollPos !== this.image) {
        this.image = scrollPos;
        this.$root.$emit('setImage', scrollPos);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
