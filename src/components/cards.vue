<template lang="pug">
    .cards
      .text
        a.title {{title}}
        .info {{author}} &nbsp {{time}}
        .content(v-html="content")
        .mask
</template>
<style lang="less">
.cards {
    overflow: hidden;
    background-color: #fff;
    /*border: 1px solid red;*/
}
.title {
    display: block;
    padding: 0 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    color: #000;
    line-height: 1.5em;
    vertical-align: center;
}
.text {
  margin: 0 0rem;
}
.content {
    overflow: hidden;
    position: relative;
    *{
      display: inline;
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
      text-align: left;
    }
    blockquote{
      white-space:nowrap;
    }
    color: #000;
    max-height: 12rem;
    font-size: 1em;
  }
  .mask{
        z-index: 9;
        position: relative;
        bottom:6rem;
        left: 0;
        width: 100%;
        height: 6rem;
        background:-webkit-linear-gradient(top,rgba(255, 255, 255, 0),rgba(255, 255, 255, 1));
        &::after{
          content:'查看全文';
          color:#5EC99D;
          position:absolute;
          bottom:0;
          width:100%;
          text-align:center;
          font-width:700;
        }
    }
.info {
    color: #999;
    padding: 0 0;
}
.pic {
    width: 100%;
    height: 20rem;
    margin: 1rem 2rem;
    background-size: cover;
}
.container-right {

}
@media screen and (max-width: 426px) {
    .cards {
        border-bottom: 1px solid #999;
    }
}
</style>
<script>
export default {
  props: ['title', 'content', 'link', 'time', 'author'],
  data () {
    return {
    }
  }
}
</script>
