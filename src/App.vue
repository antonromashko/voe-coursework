<template>
  <v-app>
    <div id="app">
      <router-view name="Content"/>
    </div>
  </v-app>
</template>

<style lang="scss">
.form-title {
  display: block;
  margin-bottom: 15px;
  text-align: center;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
