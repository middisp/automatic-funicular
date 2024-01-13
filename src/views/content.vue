<template>
  {{ contentId }}
</template>

<script>
import hero from '../components/hero.vue';

export default {
  name: 'ContentPage',
  props: ['contentId'],
  components: {
    hero
  }
}
</script>