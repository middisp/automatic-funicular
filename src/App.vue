<template>
  <Header />
  <main class="content-grid">
    <router-view />
  </main>
</template>

<script>
import Header from './components/header.vue';

export default {
  components: {
    Header
  }
}
</script>