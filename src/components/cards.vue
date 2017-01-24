<template lang="pug">
    .cards
      .text
        a.title {{title}}
        .content {{content}}
        .info {{author}} &nbsp {{time}}
</template>
<style lang="less">
.cards {
    overflow: hidden;
    margin: 0;
    background-color: #fff;
    /*border: 1px solid red;*/
}
.title {
    display: block;
    padding: 0 0;
    font-size: 1em;
    font-weight: 700;
    width: 100%;
    height:1.5em;
    color: #000;
    line-height: 1.5em;
    vertical-align: center;
}
.text {
  margin: 0 0rem;
}
.content {
    color: #000;
    height: auto;
    font-size: 1em;
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
      pic: require('../assets/lz.jpg')
    }
  }
}
</script>
