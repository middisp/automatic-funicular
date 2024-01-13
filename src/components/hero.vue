<template>
  <section class="hero flex flex-col" style="background-image: url('https://picsum.photos/1200/370')">
    <h1>{{ title }}</h1>
    <p v-if="intro">{{ intro }}</p>
    <RouterLink v-if="link.to" class="btn" :to="link.to">{{ link.text }}</RouterLink>
</section>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      title: 'Get online week 2024',
      intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium officiis nostrum ullam beatae asperiores cumque itaque obcaecati reiciendis, inventore quod.',
      link: {
        text: 'Get involved Now',
        to: {name: 'ContentPage', params: {contentId: 'get-involved'}}
      } 
    }
  }
}
</script>