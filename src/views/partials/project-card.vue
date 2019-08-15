
<template>
  <v-card class="ma-3 text-left" max-width="350px">
    <v-img
      :src="item.img | getImagePath"
      max-height="220px"
      gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.1)"
    />
    <v-card-text class="pb-0">
      <h2>{{item.title}}</h2>
      <small v-if="item.skills">{{item.skills}}</small>
      <p>{{item.content}}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn flat :href="item.url" target="_blank">View More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'summaryCard',
  props: [ 'item' ],
};
</script>

<style scoped>
p {
  font-size: 14px;
}

small {
  font-size: 14px;
}
</style>
