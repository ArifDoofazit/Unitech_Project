<script>
export default {
  name: 'Preloader'
}
</script>

<template>
  <div class="preloader">
    <div class="flex justify-center items-center">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  /* Add spinner animation styles */
  background: url(../assets/image/UGL/Unitech-Logo-Animation.gif) no-repeat;
  background-size: cover;
  width: 850px;
  height: 450px;
  position: fixed;
  left: 50%;
  top: 45% !important;
}

@media (max-width: 768px) {
  .spinner {
    width: 500px;
    height: 320px;
    margin-left: -10px;
    left: 0px;
  }
}

@media (max-width: 576px) {
  .spinner {
    width: 400px;
    height: 220px;
    position: fixed;
    left: 50%;
  }
}
</style>