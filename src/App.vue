<template lang="pug">

	#app(@onkeyup="showKeyCode(event)")
		navigation#nav
		#content
			#mobileBtn(@click='showMobileMen=true' v-if='this.$store.state.UI.Button')
				span#menu.fa.fa-bars
				<div id="p">{{this.$store.state.page}}</div>
			router-view#view
			playerBeta#playerBeta(v-if='this.$store.state.UI.betaPlayer')

</template>
<script>
/* eslint-disable */
require('font-awesome-webpack')
import navigation from './components/navigation'
// require('jquery')
// require('jquery-ui-bundle')
export default {
  data() {
    return {
      showMobileMen: false
    }
  },
  name: 'app',
  components: {
    navigation
    // contentBox
  },
  methods: {
    addDoc: function() {
      this.$router.push('/guide')
      console.log(this.$store.state.UI.Button)
    },
    toggleMobileMenu(state) {
      showMobileMen = state;
    }
  },
  mounted() {}
}
</script>
<style lang="less">
/*#mobileBtn{
    display: none;
  }*/
html,body{
  margin: 0;
  padding: 0;
}
#mobileSideBar {
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100%;
  /*background-color: red;*/
}

#hideMenu {
  width: 200%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.slide-fade-enter-active {
  transition: all .2s cubic-bezier(.25, .1, .25, 1);
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(.25, .1, .25, 1);
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(-5rem);
  opacity: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: '微软雅黑'
}

#sidebar {
  float: left;
  min-width: 12rem;
  height: 100%;
}

#mobileBtn {
  display: none;
}

#add {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #0099FF;
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

#add:hover {
  background-color: #00CCFF;
}

#content {
  position: relative;
  /*padding-top: 6rem;*/
  margin: 0 0;
  height: 100%;
  overflow: hidden;
}

#view {
  height: 100%;
  width: 100%;
  overflow: auto;
}

#nav {
  width: calc(100%);
  height: 4rem;
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 769px) {
  #sidebar {
    display: none;
  }
  #mobileBtn {
    cursor: pointer;
    background-color: #FFF;
    /*box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);*/
    z-index: 8;
    display: block;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    /*box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);*/
    width: 100%;
    height: 4rem;
  }
  #p {
    /*background-color: rgba(255, 0, 0, 0);*/
    display: flex;
    justify-content: center;
    height: 3rem;
    font-size: 1.2rem;
    vertical-align: middle;
    line-height: 3rem;
  }
  #menu {
    position: fixed;
    top: 0;
    display: block;
    margin: 0 0.5rem;
    align-items: center;
    color: #666;
    font-size: 2rem;
    line-height: 3rem;
    vertical-align: middle;
  }
  #content {
    /*试图修复 css 优先级问题*/
    width: 100% !important;
    margin: 0 !important;
    padding-top: 3rem;
    width: calc(100% - 3rem)
  }
}


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #FFF;
}


/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
  /*border-radius: 10px;*/
  background-color: #FFF;
}


/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
  /*border-radius: 10px;*/
  -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .3);
  background-color: #5EC99D;
}
</style>
