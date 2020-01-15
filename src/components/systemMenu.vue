<template>
  <div class="bottom-main">
    <div class="bottom-main-bg"></div>
    <baslatMenusu />
    <appsTray />
    <div class="system-tray">
      <div class="saat-tarih">
        <div class="saat">14.23</div>
        <div class="tarih">15.04.2020</div>
      </div>
      <div class="show-desktop"></div>
    </div>
  </div>
</template>

<script>
import baslatMenusu from "@/components/systemMenu/baslatMenusu.vue";
import appsTray from "@/components/systemMenu/appsTray.vue";
export default {
  components: {
    baslatMenusu,
    appsTray
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-main {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: inherit;
  align-items: center;
  padding: 0;
  margin: 0;
  color: #ccc;
  z-index: 999999999999999990000;
}

.bottom-main-bg {
  position: absolute;
  bottom: 100%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 15px;
  background: inherit;
  overflow: hidden;
  min-width: 350px;
  display: flex;
  flex-direction: row;
  z-index: -1;
}

.bottom-main-bg:before {
  content: " ";
  background: rgba(0, 0, 0, 0.95);
  position: absolute;
  left: -25px;
  right: -25px;
  top: -25px;
  bottom: -25px;
  box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.1);
  filter: blur(10px);
}

.apps-tray {
  flex: 10;
}

.system-tray {
  display: flex;
  color: white;
}

.system-tray .saat-tarih {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  font-size: 0.8rem;
}

.show-desktop {
  content: "";
  padding: 0 0.3rem;
  border-left: 0.1px solid #666;
}

</style>
