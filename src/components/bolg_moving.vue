<template lang="pug">
    div#bolg_moving
      p 这是一个测试页面
      p 输入知乎专栏地址，我们将把知乎专栏的内容渲染到时间线中。
      div.input-warp
        <input v-model="username">
      .single-btn-warp
        a.primary-button(@click='zhiHuFetch()') 完成
      .single-btn-warp
      div(v-for="item in this.$store.state.clone") <h2>{{item.title}}</h2> <br> {{item.content}}
</template>
<style lang="less">
    input {
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left: 5px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        width: 100%;

    }
    .input-warp{
        margin: 0 auto;
        width: 30%;
        min-width: 300px;
    }
    input:focus {
        border-color: #5EC99D;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(94,201,157, .6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(94,201,157, .6)
    }
    P{
        text-align: center;
    }
    .primary-button{
        left:50%;
        margin-left: -2em;
        display: inline-block;
        padding: 0 1em;
        height: 2em;
        width: auto;
        line-height: 2em;
        background-color: #2ACB72;
        color: white;
        border-radius: 2px;
        position: relative;
    }
    .single-btn-warp{
        font-size: 100%;
        width: 100%;
        height: 2em;
        margin: 0.5em;
    }
    #bolg_moving{
        overflow-y: scroll;
    }
</style>
<script>
import jquery from 'jquery'
export default {
  data () {
    return {
      username: 'ice1000'
    }
  },
  methods: {
    zhiHuFetch: function () {
      let wm = this
      this.neirong = {test: false}
      console.log('开始请求')
      jquery.ajax({
        url: 'http://127.0.0.1:9998/zhihu?username=' + wm.$data.username,
        dataType: 'json',
        complete: function (data) {
          wm.$store.state.clone = JSON.parse(data.responseText)
          wm.$store.state.fetched = wm.$store.state.clone
        }
      })
    }}
}
</script>