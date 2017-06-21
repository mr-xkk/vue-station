<template>
  <div id="model" v-if="open">
    <div id="dialog">
      <div class="title">
        <img src="../../static/images/wrong.png" class="close" @click="close">
        <h1>注册GuGu</h1>
        <p>不再做艰辛的码农</p>
        <form action="#" method="get">
          <input type="text" placeholder="账号" class="id" name="username">
          <input type="password" placeholder="密码" class="ps" name="password">
          <button type="submit">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  export default{
    data(){
      return {
        open: true
      }
    },
    methods: {
      close: function () {
        if(this == true){
          this.open = false
        }
        this.open = !this.open
      }
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus">
  #model
    width 100%
    height 100%
    background rgba(0,0,0,0.5)
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 1000
    margin auto
    #dialog
      width 300px
      height 300px
      border 1px dashed teal
      position fixed
      left 0
      top 0
      right 0
      bottom 0
      z-index 1000
      margin auto
      background #fff
      text-align center
      .close
        width 8%
        position absolute
        right 2%
        top 2%
        transition all 1s
        &:hover
          transform rotate(360deg)
      h1
        font 3rem/4rem "微软雅黑"
        color: #fff
        background teal
      p
        font 1.6rem/3.6rem "微软雅黑"
        color: #fff
        background teal
      input
        display block
        width 90%
        height 30px
        margin 2% auto
        padding-left 2%
      button
        width 94%
        background teal
        display block
        margin 2% auto
        height 35px
        border none
        font-size 1.6rem
        letter-spacing 2px
        color #fff
</style>
