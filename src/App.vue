<template>
  <div id="app">
    <app-message></app-message>
    <example-component :myProp="[{name:'aa'},{name:'bb'}]"></example-component>
    <countries-input></countries-input>

    <mdl-select2>
      name = "name"
      label = "label"
      :values = "[{key:'a',val:'aaa'},{key:'b',val:'bbb'}]"
      value = "a"
      selectedVal = "a"
      default = "z"
      
<!--      :value.sync="a"
      :label="a"
      name="a"
      default="a"
      :values="[{key:'a',val:'aaa'},{key:'b',val:'bbb'}]"> -->
  </mdl-select2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 'a'
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>