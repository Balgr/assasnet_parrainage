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
  background-color: #042a5f

body
  margin: 0
  padding: 0

html
  //scroll-behavior: smooth

a
  color white
</style>
