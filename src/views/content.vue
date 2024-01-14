<template>
  <section class="content-grid content-page">
    <h1>{{ title }}</h1>
    <div v-html="content" />
  </section>
</template>

<script>
import getPageContent from '../constants/pageContent';

import hero from '../components/hero.vue';

export default {
  name: 'ContentPage',
  props: ['contentId'],
  components: {
    hero
  },
  data () {
    return {
      title: null,
      content: null
    }
  },
  created () {
    const data = getPageContent(this.contentId);
    this.title = data.title;
    this.content = data.content;
  }
}
</script>

<style lang="scss">
.content-page {
  gap: 3rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>