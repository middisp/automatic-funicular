<template>
  <hero />
  <sidekick />
  <contact />
  <whatwedo />
</template>

<script>
import hero from '../components/hero.vue';
import sidekick from '../components/sidekick.vue';
import contact from '../components/contact.vue';
import whatwedo from '../components/whatWeDo.vue';

export default {
  name: 'HomeView',
  components: {
    hero,
    sidekick,
    contact,
    whatwedo
  }
}
</script>