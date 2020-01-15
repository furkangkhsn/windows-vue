<template>
  <div class="baslat_menusu" v-click-outside="hideBaslat">
    <div
      class="baslat-button"
      @click="baslatMenusuGoster = !baslatMenusuGoster"
    >
      <i class="fab fa-windows"></i>
    </div>
    <div class="main-search-container">
      <input class="main-search" type="text" placeholder="Arama..." />
      <i class="fa fa-microphone"></i>
    </div>
    <transition name="slideIn">
      <div class="baslat-dropdown" v-if="baslatMenusuGoster">
        <div class="baslat-dropdown-bg"></div>
        <islemler />
        <appList />
        <div class="metro"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import islemler from "./baslatMenusu/islemler.vue";
import appList from "./baslatMenusu/appList.vue";
export default {
  data() {
    return {
      baslatMenusuGoster: false
    };
  },
  methods: {
    hideBaslat() {
      this.baslatMenusuGoster = false;
    }
  },
  components: {
    islemler,
    appList
  },
  directives: {
    ClickOutside
  }
};
</script>

<style>
.slideIn-enter-active {
  animation: slide-in 0.2s;
}

.slideIn-leave-active {
  animation: slide-in 0.2s reverse;
}

@keyframes slide-in {
  from {
    height: 400px;
    opacity: 0;
  }

  to {
    height: 700px;
    opacity: 1;
  }
}

.baslat_menusu {
  position: relative;
  display: flex;
  font-size: 2rem;
  padding: 0;
  margin: 0;
}

.baslat_menusu > .baslat-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.baslat_menusu > .baslat-button {
  color: #3ac4ff;
  padding: 0.1rem 1rem;
}

.main-search-container {
  align-items: stretch;
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
}

.main-search-container svg {
  align-self: center;
  margin-right: 8px;
  right: 8px;
  font-size: 1.3rem;
}

.main-search {
  align-items: stretch;
  display: flex;
  border: none;
  line-height: 100%;
  margin-left: 1rem;
  padding-left: 1rem;
  color: #fff;
  background-color: transparent;
  margin: 0;
  width: 285px;
  outline: none;
}

.main-search::placeholder {
  color: #aaa;
}

.baslat_menusu:focus .baslat-dropdown {
  display: flex;
}

.baslat-dropdown {
  position: absolute;
  bottom: 100%;
  left: 0;
  font-size: 15px;
  background: inherit;
  overflow: hidden;
  height: 700px;
  width: 600px;
  min-width: 350px;
  border-top: 0.1px solid #fff;
  border-right: 0.1px solid #fff;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  z-index: 999999999;
}

.baslat-dropdown-bg {
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
  border-top: 0.1px solid #fff;
  border-right: 0.1px solid #fff;
  display: flex;
  flex-direction: row;
}

.baslat-dropdown-bg:before {
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

.app-list {
  flex: 2;
  z-index: 9999999999999999;
  padding: 0 1.5rem;
  padding-top: 15px;
}

.metro {
  flex: 3;
}

.letter-group {
  color: #ccc;
}

.letter-group .letter {
  margin-bottom: 5px;
}

.letter-group li svg {
  color: #fff;
}

.letter-group ul {
  margin: 0;
  padding: 0;
}

.letter-group li {
  display: flex;
  list-style: none;
  align-items: center;
  margin-bottom: 3px;
}

.letter-group li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.letter-group li .icon {
  background-color: #1a76d8;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
