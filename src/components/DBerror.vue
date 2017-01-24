<template >
<div>
   <h1>请联网后使用</h1>
  <div id='about'>
      <p>未能在本地读取数据库版号。为了确保数据正确合并，请先联机。
      若您暂时无法联机，您可以清除本地数据后使用。
      但是，自上一次同步之后的所有数据将被清除。
      </p>
      <a style="color:red"> 清除浏览数据继续并使用</a>
  </div>
</div>
</template>
<script>
export default{
  mounted () {
    this.$store.state.page = '开放源代码许可'
    this.$store.state.UI.Button = false
  },
  destroyed () {
    this.$store.state.UI.Button = true
  }
}
</script>
<style lang='less'>
h1 {
    color:#0099FF;
    padding:2rem 6rem;
}
#about{
     font-size: 1.0rem;
     padding:0 6rem;
     line-height: 2rem;
}
</style>