<template>
  <div class="card">
    <h4>{{ title }}</h4>
    <p>{{ text }}</p>
    <a href="#" class="btn btn-border">Read more</a>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: 'Missing title'
    },
    text: {
      type: String,
      default: 'Missing text'
    }
  }
}
</script>