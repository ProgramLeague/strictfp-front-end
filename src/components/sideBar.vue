<template lang="pug">
  #sidebar
    #user <div id="avator"></div> <p>曾婉柠</p>
    ul
      <li @click="gotoPath('/all')" :class="{slideActive: this.$data.selected === '/all'}">  <span class="fa fa-home"></span> 全部膜法
      <li @click="gotoPath('/timeline')" :class="{slideActive: this.$data.selected === '/timeline'}"> <span  class="fa fa-clock-o"></span> 时间的膜法
      <li @click="gotoPath('/classify')" :class="{slideActive: this.$data.selected === '/classify'}"> <span class="fa fa-star"></span> 分类膜法
      <li @click="gotoPath('/stars')" :class="{slideActive: this.$data.selected === '/stars'}"> <span class="fa fa-star"></span> 我喜欢的膜法
      <li @click="gotoPath('/trash')" :class="{slideActive: this.$data.selected === '/trash'}"> <span class="fa fa-trash"></span> 已废弃的膜法
    #cog.fa.fa-cog(@click="gotoPath('/setthings')") 设置
</template>
<style lang="less">
#sidebar{
    /*background-color: #0099FF;*/
    z-index: 999;
    position: relative;
    user-select: none;
    background:-moz-linear-gradient(-45deg,#0099FF ,#00CCFF);
    background:-webkit-linear-gradient(-45deg,#0099FF ,#00CCFF);
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    /*border-right: 1px solid #ddd;*/
    padding-top: 0;
    color:#FFF;
}
.slideActive{
  background-color:#3366CC;
}
#cog{
    cursor: pointer;
    position: absolute;
    bottom: 0.5em;
    right:0.6em;
    box-sizing: border-box;
    height: 1.5em;
    padding: 0.4em 0.4em;
    margin: 0;
    pad: 0;
    font-size: 1em;
    line-height: 1em;
    vertical-align: center;
    color:#FFF;
    span{
      color:#FFF;
    }
}
#user{
      cursor: pointer;
      flex-wrap: nowrap;
      display: inline-flex;
      flex-direction: row;
      align-items:center;
      /*background-color:#EDFFFF;*/
       background: radial-gradient(at right top, #FFF, #EDFFFF);
      position: relative;
      padding-top: 4em;
      color: #0099FF;
      padding-left: 0.5em;
      box-sizing: border-box;
      padding-bottom: 1em;
      width: 100%;
      vertical-align: middle;
        #avator{
          box-sizing: content-box;
          width: 2rem;
          height:2rem;
          border-radius:1rem;
          border: 0.1em solid #FFF;
          background-image: url("../assets/user.png");
          background-size: cover;
          background-position: center;
          margin-right:0.3em;
     }
     p{
         line-height: 2em;
         font-size: 2em;
         color: #0099FF;
     }
}
ul{
    display: block;
    padding-top: 2em;
    overflow: hidden;
}
li{
    cursor: pointer;
    @ul_height:2.2em;
    display: block;
    width: 100%;
    height: @ul_height;
    text-decoration: none;
    font-size: 1.3em;
    letter-spacing: 0.08em;
    color: #FFF;
    padding: 0 0.8em;
    line-height: @ul_height;
    vertical-align: middle;
    span{
        padding-right:0.2em;
        color: #FFF;
    }
    &:hover{
        background-color: #00CCFF;
    }
}
#user #btns span{
    color:#FFF;
}
@media screen and (max-width: 769px) {
    #user{
        display: none;
    }
    #sidebar ul{
        padding-top: 4rem;
    }
    #sidebar ul li {
        font-size: 1.2rem;
        text-indent: 0rem;
        letter-spacing: 0.04rem;
    }
}
</style>
<script>
// router.map({
//   '/setthings': {
//     component: setthings
//   }
// })
export default{
  name: 'sidebar',
  components: {
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    gotoPath (path) {
      this.$router.push(path)
      this.$data.selected = path
      console.log(this.$data.selected)
    }
  }
}
</script>
