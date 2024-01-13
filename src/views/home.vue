<template>
  <hero />
  <sidekick />
  <contact />
</template>

<script>
import hero from '../components/hero.vue';
import sidekick from '../components/sidekick.vue';
import contact from '../components/contact.vue';

export default {
  name: 'HomeView',
  components: {
    hero,
    sidekick,
    contact
  }
}
</script>