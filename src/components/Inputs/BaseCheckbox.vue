<template>
  <div class="form-check" :class="[{ disabled: disabled }, inlineClass]">
    <label :for="cbId" class="form-check-label">
      <input
        :id="cbId"
        class="form-check-input"
        type="checkbox"
        :disabled="disabled"
        v-model="model"
      />
      <span class=""></span>
      <!-- form-check-sign -->
      <slot> <span v-if="inline">&nbsp;</span> </slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'base-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: [Array, Boolean],
    disabled: Boolean,
    inline: Boolean,
    hasError: Boolean
  },
  data() {
    return {
      cbId: '',
      touched: false
    };
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(check) {
        if (!this.touched) {
          this.touched = true;
        }
        this.$emit('input', check);
      }
    },
    inlineClass() {
      if (this.inline) {
        return `form-check-inline`;
      }
    }
  },
  created() {
    this.cbId = Math.random()
      .toString(16)
      .slice(2);
  }
};
</script>
