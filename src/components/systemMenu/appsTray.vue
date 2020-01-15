<template>
  <div class="apps-tray">
    <ul>
      <li v-for="app in acikUygulamalar" :key="app.appId">
        <i class="fa fa-cog"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acikUygulamalar: this.$store.state.acikUygulamalar
    };
  }
};
</script>

<style scoped>
.apps-tray {
    margin-left: 3px;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 48px;
  height: 40px;
}

li:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
