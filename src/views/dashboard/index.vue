<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <CarnumKeyboard :is-mew-energy="1" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarnumKeyboard from 'vue-etc-keyboard'

export default {
  name: 'Dashboard',
  components: {
    CarnumKeyboard
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
