<template>
  <input type="text" @keyup="onPhoneChange" placeholder="Телефон" @change="onPhoneChange" ref="phone" v-model="value" class="form-control maskedinput-phone">
</template>

<script>
import Inputmask from "inputmask";

export default {
  props: {
    value: {
      type: String,
      default: null
    }
  },

  mounted() {
    const mask = new Inputmask("+7 (999) 999-99-99");
    mask.mask(this.$refs.phone);
  },

  methods: {
    onPhoneChange() {
      this.$emit('input', this.value);

      // если пользователь полностью заполнил номер мобильного телефона, то мы должны вызвать метод событие complited
      if (this.value !== null && this.value.search('_') === -1) {
        this.$emit('completed', this.value);
      }
    }
  }
}
</script>