<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/about">
          About
        </router-link> |
        <router-link to="/directory">
          Directory
        </router-link> |
        <router-link to="/computed">
          Computed
        </router-link> |
        <router-link to="/watch">
          Watch
        </router-link> |
        <router-link to="/signup">
          Signup
        </router-link> |
        <router-link to="/signin">
          Signin
        </router-link> |
        <router-link to="/member">
          Member
        </router-link> |
        <router-link to="/member/edit">
          MemberEdit
        </router-link> |
        <router-link to="/error-handler">
          ErrorHandler
        </router-link>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
