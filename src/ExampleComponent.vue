<template>
    <p>{{id}} Dynamic prop value: {{myProp[0].name}} </p>
</template>

<script>
    export default {
        // props: ['myProp']
        props: {
            myProp:'',
            id:''
        }
    }
</script>
<style>
  /*@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');*/
</style>