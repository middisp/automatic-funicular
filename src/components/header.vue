<template>
  <header class="content-grid">
    <div class="flex space-between search-wrap">
      <div class="search">Search</div>
      <div class="actions flex">
        <div class="learn">Learn</div>
        <div class="donate">Donate</div>
      </div>
    </div>
    <div class="navigation-wrap">
      <img src="../assets/images/logo.png" alt="Good things toundation">
      <nav>
          <RouterLink v-for="(item, index) in getNav" :to="item.path" :key="index">{{ item.name }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { useNavigationStore } from '../store/navigation';
import { RouterLink } from 'vue-router';

export default {
    name: 'Header',
    computed: {
        ...mapState(useNavigationStore, ['getNav'])
    },
    components: { RouterLink }
}
</script>