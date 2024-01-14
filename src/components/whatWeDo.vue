<template>
  <section class="what-we-do">
    <h3>What we do?</h3>
    <p>You might not have heard of us, but we're the people behind impactful programmes.</p>
    <div class="card-wrap">
      <template v-if="getContent.length">
        <card v-for="(card, index) in getContent" :key="index" :title="card.title" :text="card.text" />
      </template>
    </div>
    <RouterLink class="btn" :to="{name: 'ContentPage', params: {contentId: 'about'}}">More about what we do</RouterLink>
  </section>

</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useContentStore } from '../store/content';

import card from './card.vue';

export default {
  name: 'WhatWeDo',
  components: {
    card
  },
  created () {
    this.fetchContent();
  },
  computed: {
    ...mapState(useContentStore, ['getContent'])
  },
  methods: {
    ...mapActions(useContentStore, ['fetchContent'])
  }
}
</script>