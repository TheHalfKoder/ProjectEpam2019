<template>
  <div class="app-employee">
    <app-table/>
  </div>
</template>

<script>
import AppTable from './common/app-table';

export default {
  name: 'employee',
  components: {
    AppTable
  },
  data () {
    return {
      title: "Employee"
    }
  }
}
</script>

<style scoped>
  .app-employee {
    flex: 1 0 auto;
  }
</style>


