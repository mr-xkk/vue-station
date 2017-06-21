<template>
  <div class="share_model" v-show="turn_off" @click="turn_off=false">
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
            turn_off:true
          }
      },
      methods:{
         to_off(){
             this.turn_off==true? this.turn_off = false: this.turn_off = true;
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
