<template>
  <section class="contact-section">
    <h3>How can we help you?</h3>
    <p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
    <contactForm buttonText="Start now" :submitAction="() => console.log('submit')" />
  </section>
</template>

<script>
import contactForm from './contactForm.vue';

export default {
  name: 'ContactSection',
  components: {
    contactForm
  }
}
</script>