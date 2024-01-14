<template>
  <section class="contact-section">
    <h3>How can we help you?</h3>
    <p>You might not have heard of us, but we're the people behind impactful programmes.</p>
    <contactForm buttonText="Start now" :submitAction="() => console.log('submit')" />
  </section>
</template>

<script>
import contactForm from './contactForm.vue'

export default {
  name: 'ContactSection',
  components: {
    contactForm
  }
}
</script>