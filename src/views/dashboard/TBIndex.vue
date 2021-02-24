<template>
  <div class="container">
    <div class="dashboard-text">淘宝</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarnumKeyboard from 'vue-etc-keyboard'

export default {
  name: 'TBIndex',
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
