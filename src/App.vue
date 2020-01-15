<template>
  <div id="app">
    <div class="main">
      <div class="main-view">a</div>

      <system-menu />
    </div>
    <router-view />
  </div>
</template>
<script>
import systemMenu from "@/components/systemMenu.vue";
export default {
  components: {
    systemMenu
  }
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: url(assets/images/login-bg2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.main {
  display: flex;
  flex-direction: column;
}

.main-view {
  flex: 1;
  flex-grow: 10;
}
</style>
