<template>
  <div class="share_model" v-show="count" @click="check_this">
    <div class="qr_code">
      <img src="../../../static/images/two.png" alt="二维码">
      <p>分享二维码给好友</p>
    </div>
  </div>
</template>
<script type="es6">
  export default{
      data(){
          return{
            
          }
      },
      computed: {
        count () {
            return this.$store.state.turn_off
        }
      },
      methods:{
        check_this(){
          this.$store.state.turn_off = !this.$store.state.turn_off
        }    
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .share_model
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background rgba(0, 0, 0, .5)
    z-index 80
    .qr_code
      position absolute
      top 50%
      left 50%
      margin-left  -50px
      margin-top  -50px
      img
        width 50%
      p
        text-align left
        color #fff
        font 1.6rem/2rem "华文细黑"
</style>
