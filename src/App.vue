<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>


<style lang="stylus">
#app
  font-family 'Karla', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color white
  height: 100vh
  width: 100vw

#nav
  padding 30px
  a
    font-weight bold
    color white
    &.router-link-exact-active
      color #42b983

body
  margin: 0
  padding: 0

html
  //scroll-behavior: smooth



a
  color white
</style>
