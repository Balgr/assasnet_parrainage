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
  height: 100%
  width: 100%
  background-color: #042a5f

body
  margin: 0
  padding: 0
  background-color: #042a5f;

html
  //scroll-behavior: smooth

a
  color white


@media screen and (max-width: 599px)
  h2
    width: 80%
    line-height 1.1em
    font-size: 1.5em
  .logo
    width: 150px


@media screen and (min-width: 600px) and (max-width: 767px)
  h2
    width: 100%
    line-height 1.1em
    font-size: 2em


@media screen and (min-width: 768px) and (max-width: 991px)
  h2
    width: 100%
    line-height 1.1em
    font-size: 2em

@media screen and (min-width: 992px) and (max-width: 1199px)
  h2
    width 75%

@media screen and (min-width: 1200px)
  h2
    width: 50%

</style>
