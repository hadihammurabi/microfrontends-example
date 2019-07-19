<template>
  <div class="about">
    <input type="number" v-model="val" min="0" style="text-align: center"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    val: 0,
  }),
  watch: {
    val(to) {
      document.dispatchEvent(new CustomEvent('changeval', {detail: to}))
    }
  }
}
</script>

