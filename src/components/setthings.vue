<template lang="pug">
  div
    #warp
      h1 关于
      div.about
        p copyright 曾婉柠 2016
        router-link(to='os') 开放源代码许可
        br
        router-link(to='os') 更新日志
        br
      h1 测试中的功能
      div.about
        p#a(@click='enableBeta') 测试版音乐播放器
      h1(style='color:#ddd') 永远怀念
      router-link#heHasDead.about(to='os') 曾宇
</template>
<script>
export default{
  mounted () {
    this.$store.state.page = '设置和关于'
  },
  methods: {
    enableBeta: function () {
      this.$store.state.UI.betaPlayer = true
    }
  }
}
</script>
<style lang='less'>
#a{
  text-decoration: underline;
  cursor: pointer;
}
#warp{
  column-count: 2;
    width: 100%;
    height: 100%;
    background-image: url('../assets/about_bg.jpg');
    background-size: cover;
}
h1 {
    color:#0099FF;
    padding:2rem 6rem;
}
.about{
     padding:0 6rem;
     a,p{
     color:#ddd;
     font-size: 1.2rem;
     line-height: 2rem;
     }
     a{
       /*display: block;*/
       /*width: auto;*/
     }
}
#heHasDead{
    color: #FFF;
    margin: 4rem 6rem;
    padding:  0.5rem 1rem ;
    border: 0.1em solid #FFF;
    background-color: #000;
    text-decoration: none;
}
@media screen and (max-width: 769px) {
  #warp{
      column-count: 1;
      overflow: auto;
  }
}
</style>
