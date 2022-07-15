<template>
  <footer>
    <div class="inner">
      <div class="copyright">
        Copyright &copy; <span>{{ date }}</span> Demix Finance. All rights
        reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  created() {
    this.date = new Date().getFullYear();
  },
  data() {
    return {
      date: null,
    };
  },
};
</script>
