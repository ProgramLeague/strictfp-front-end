<template>
<div class="navigation_warp">
  <div class="navigation">
    <logo id="logo"></logo>
    <ul>
      <li> <router-link to="bolg_moving">渲染测试</router-link></li>
    </ul>
    <!-- <search id="search"></search> -->
  </div>
</div>
</template>
<style lang="less">
.navigation_warp{
    border-bottom: 1px solid #5EC99D;  
}
.navigation {
    max-width: 1180px;
    height: 4rem;
    /*border: 1px solid red;*/
    margin: 0 auto;
    /*box-shadow: 0 0 13px rgba(0, 0, 0, 0.1);*/
    ul {
        float: right;
        width: auto;
        height: 4rem;
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            color: #666;
            height: 4rem;
            width: auto;
            line-height: 4rem;
        }
        .fa {
            margin: 0 0.5rem;
        }
  }
    #logo {
        width: 28rem;
        height: 4rem;
        float: left;
    }
    a{
      text-decoration: none;
      color:#666;
    }
}
</style>
<script>
import search from '../components/search'
import logo from '../components/logo'
export default {
  components: {
    search,
    logo
  },
  methods: {
  }
}
</script>
