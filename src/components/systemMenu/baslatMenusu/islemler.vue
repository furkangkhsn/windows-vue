<template>
  <div class="islemler">
    <div class="all-apps">
      <i class="fas fa-bars"></i>
    </div>
    <div class="bottom-islem">
      <div class="bottom-islem-apps">
        <i class="fas fa-power-off"></i>
      </div>
      <div class="bottom-islem-apps">
        <i class="fas fa-cog"></i>
      </div>
      <div class="bottom-islem-apps">
        <i class="fas fa-user"></i>
      </div>
    </div>
  </div>
</template>

<style>
.islemler {
  width: max-content;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.islemler > div.all-apps {
  padding: 0.8rem 1rem;
}

.islemler > div.all-apps:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.islemler > div > i {
  font-size: 1rem;
  color: #ccc;
}

.bottom-islem {
  color: #ccc;
  display: flex;
  flex-direction: column-reverse;
}

.bottom-islem .bottom-islem-apps {
  padding: 0.8rem 1rem;
}

.bottom-islem .bottom-islem-apps:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>