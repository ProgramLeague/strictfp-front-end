<template>
  <div>
    <div id="logo-logo">
      <router-link to="content"><b>P</b>rogram<span><b>L</b>eague</span></router-link>
    </div>
  </div>
</template>
<style lang="less">
@logo-color:#5EC99D;
#logo-logo{ 
      display: blcok;
      float: left;
      transform:scale(0.8,1);
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 200%;
      line-height: 4rem;
      vertical-align: center;
    span{
      color: @logo-color; 
    }
}    
</style>
<script>
export default {
  methods: {
    mounted () {
      let logo = document.getElementById('logo')
      console.log('logo' + logo)
    }
  }
}
</script>
