<template lang="pug">
div
  input#searchInput
  <i class="fa fa-search" id='searchBtn' aria-hidden="true"></i>
</template>
<style lang="less">
#searchInput{
  position: absolute;
  border:1px solid #666;
  margin: 1rem 2rem;
  margin-left:12rem;
  width: 12rem;
  height: 2rem;
  line-height:2rem;
  font-size: 1.5rem;
  border-radius:1rem;
  text-align:center;
}
#searchBtn{
  font-size: 1.5rem;
  position: relative;
  left: 25rem;
  top: 1.2rem;
  display: inline-block;
}
</style>
<script>
  export default{
  }
</script>
