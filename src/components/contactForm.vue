<template>
  <form class="contact-form" novalidate :on-submit="submitAction">
    <label for="Iam">I am</label>
    <select id="Iam" name="Iam">
      <option v-for="(option, index) in IamOptions" :key="index" :value="option.value">{{ option.text }}</option>
    </select>
    <label for="Iwant">and I want</label>
    <select id="Iwant" name="Iwant">
      <option v-for="(option, index) in IwantOptions" :key="index" :value="option.value">{{ option.text }}</option>
    </select>
    <button class="btn btn-solid">{{ buttonText }}</button>
  </form>
</template>

<script>
import optionsLists from '../constants/selectData';

export default {
  name: 'ContactForm',
  props: {
    submitAction: {
      type: Function,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Start soon'
    }
  },
  data() {
    return {
      IamOptions: optionsLists.IamOptions,
      IwantOptions: optionsLists.IwantOptions
    }
  }
}
</script>