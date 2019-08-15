
<template>
  <div class="content-container mt-4" :class="{'mt-0 pb-3': !item.projects}">
    <h2>
      {{item.title}}
      <template v-if="item.org">
        -
        <a :href="item.url" target="_blank">{{item.org}}</a>
      </template>
    </h2>
    <small>{{item.subtitle}}</small>
    <div class="mt-1" :class="{'pb-2': !item.projects}">
      {{item.content}}
      <div v-if="item.projects" class="projects-container text-right">
        <v-btn class="mb-0 mt-2" @click="projectsActive = !projectsActive" small flat>
          View Projects
          <v-icon class="ml-1" small>{{projectsActive ? 'expand_less' : 'expand_more'}}</v-icon>
        </v-btn>
        <div class="flex-container mt-4 pb-4" v-if="projectsActive">
          <ProjectCard v-for="(item, index) in item.projects" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/views/partials/project-card';

export default {
  name: 'summaryCard',
  components: {
    ProjectCard,
  },
  props: [ 'item' ],
  data() {
    return {
      projectsActive: false,
    };
  },
};
</script>
