<template lang="pug">
  #warp
    #all
      .container-left
        card.card(v-for='item in this.$store.state.clone' v-bind:title='item.title' v-bind:content='item.content')
      containerRight.container-right
</template>
<script>
import card from './cards'
import containerRight from './container-right'
export default {
  name: 'cards',
  components: {
    card,
    containerRight
  },
  mounted () {
  }
}
</script>
<style lang="less">
.card {
    margin: 1rem 0;
    flex-wrap: wrap;
    flex-flow: row;
}
#all {
    padding-top: 6rem;
    /*width: 1140px;*/
    max-width: 1140px;
    margin: 0 auto;
}
.container-left{
  width: 73%;
  float: left;
}
.container-right{
  float: right;
  width: 27%;
  height: 64rem;
}
@media screen and (max-width: 1180px) {
    #all{
      padding-left: 1rem;
      padding-right: 1rem;
    }
}
@media screen and (max-width: 736px) {
    .container-right{
      display: none;
    }
    .container-left{
      width: 100%;
      .card{
        width: 100%;
        border-bottom: 1px solid #ddd;
      }
    }
}
</style>
