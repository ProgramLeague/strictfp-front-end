<template lang="pug">
    #warp
      #player
        .playerBtn <span class='fa fa-play'></span>
        .playerBtn <span class='fa fa-folder-open'></span>
        .fa.fa-close#closeBtn(@click='hide')
        .playerBtn#boost boost
</template>
<style lang="less">
#player{
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    width: 20rem;
    height:3rem;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #bbb;
    box-shadow: 0 0 0.5em #bbb;
}
#closeBtn{
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    cursor: pointer;
}
.playerBtn{
    display: inline-flex;
    margin: 0 0.5rem;
    padding: 0;
    height: 3rem;
    width: 1.5rem;
    line-height: 3rem;
    font-size: 2rem;
    color:#666;
    span{
      line-height: 3rem;
      font-size: 2rem;
      color:#666;
    }
}
#boost{
    cursor: pointer;
    float: right;
    display: inline-block;
    width: auto;
    height: 2rem;
    box-sizing: border-box;
    line-height: 2rem;
    padding: 0 0.5rem;
    margin: 0.5rem 2rem;
    font-size: 1rem;
    vertical-align: center;
    border: 2px solid #33CC99;
    border-radius: 0.2rem;
  }
</style>
<script>
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
require('jquery')
require('jquery-ui-bundle')
export default{
  methods: {
    hide: function () {
      this.$store.state.UI.betaPlayer = false
    }
  },
  mounted () {
    console.log('启动音乐播放器')
    // $('#player').draggable()
  }
}
</script>
