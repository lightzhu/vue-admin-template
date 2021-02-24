<template>
  <div class="container">
    <div class="dashboard-text">支付宝</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TBIndex',
  components: {},
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
