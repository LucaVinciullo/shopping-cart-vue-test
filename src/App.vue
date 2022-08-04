<template>
  <div id="app" class="typography">
    <ViewLoader />
    <div class="features-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  .features-container {
    height: 100vh;
    width: 100vw;

    position: absolute;
    top: 0;
    left: 0;

    background-color: #f0cac9;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.typography {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #131313;
  text-align: left;

  h2 {
    margin: 0;
    padding: 16px 0;
  }

  p {
    margin: 0;
  }

  .text--light {
    font-weight: lighter;
  }

  .text--bold {
    font-weight: bold;
  }
}
</style>
