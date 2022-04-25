<template>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  letter-spacing: 1px;
  color: #222222;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  a {
    text-decoration: none;
    color: #222222;
  }
  input {
    border: none;
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
